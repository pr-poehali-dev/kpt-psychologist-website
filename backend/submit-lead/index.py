import json
import os
import psycopg2
import urllib.request

def handler(event: dict, context) -> dict:
    """Сохраняет заявку в БД и отправляет уведомление в Telegram"""
    
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    telegram = body.get('telegram', '').strip()
    request_text = body.get('request', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    cur.execute(
        f"INSERT INTO {schema}.leads (name, phone, telegram, request) VALUES (%s, %s, %s, %s) RETURNING id",
        (name, phone, telegram or None, request_text or None)
    )
    lead_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')
    if bot_token and chat_id:
        lines = [
            '🔔 *Новая заявка на консультацию*',
            f'👤 Имя: {name}',
            f'📞 Телефон: {phone}',
        ]
        if telegram:
            lines.append(f'💬 Telegram: {telegram}')
        if request_text:
            lines.append(f'📝 Запрос: {request_text}')
        lines.append(f'🆔 ID заявки: {lead_id}')
        message = '\n'.join(lines)

        tg_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
        tg_data = json.dumps({
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'Markdown'
        }).encode('utf-8')
        req = urllib.request.Request(tg_url, data=tg_data, headers={'Content-Type': 'application/json'})
        urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'success': True, 'id': lead_id})
    }
