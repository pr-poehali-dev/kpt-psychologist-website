import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Психолог КПТ</div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">О специалисте</a>
          <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">Услуги</a>
          <a href="#approach" className="text-foreground/70 hover:text-primary transition-colors">КПТ подход</a>
          <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Контакты</a>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Путь к внутреннему равновесию начинается здесь
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
            Профессиональная психологическая помощь в рамках когнитивно-поведенческой терапии
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-primary" />
              </div>
              <p className="text-foreground/60 text-lg">Ваше фото здесь</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">О специалисте</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Я специализируюсь на когнитивно-поведенческой терапии и помогаю людям справляться с тревогой, депрессией, 
              стрессом и другими эмоциональными трудностями.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              В моей практике я использую научно обоснованные методы КПТ, которые помогают изменить негативные паттерны 
              мышления и поведения на более адаптивные и конструктивные.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Опыт работы 10+ лет
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Сертифицированный КПТ специалист
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-20 bg-muted/20 rounded-3xl my-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Brain",
                title: "Работа с тревогой",
                description: "Преодоление тревожных расстройств и панических атак через методы КПТ"
              },
              {
                icon: "Heart",
                title: "Депрессия",
                description: "Помощь в преодолении депрессивных состояний и возвращение радости жизни"
              },
              {
                icon: "Sparkles",
                title: "Личностный рост",
                description: "Работа над самооценкой, уверенностью и развитием личности"
              },
              {
                icon: "Users",
                title: "Отношения",
                description: "Улучшение навыков коммуникации и построение здоровых отношений"
              },
              {
                icon: "Target",
                title: "Стресс и выгорание",
                description: "Управление стрессом и профилактика эмоционального выгорания"
              },
              {
                icon: "Lightbulb",
                title: "Изменение привычек",
                description: "Формирование полезных привычек и преодоление деструктивных паттернов"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-border/50"
              >
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Что такое КПТ подход?
          </h2>
          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 p-8 md:p-12 rounded-3xl space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              <strong className="text-primary">Когнитивно-поведенческая терапия (КПТ)</strong> — это научно обоснованный метод психотерапии, 
              который фокусируется на связи между мыслями, эмоциями и поведением.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Структурированность",
                  text: "Четкий план работы и конкретные цели на каждую сессию"
                },
                {
                  title: "Ориентация на результат",
                  text: "Краткосрочная терапия с измеримыми результатами"
                },
                {
                  title: "Научная обоснованность",
                  text: "Методы подтверждены многочисленными исследованиями"
                },
                {
                  title: "Активное участие",
                  text: "Домашние задания и практика навыков между сессиями"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-foreground/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Свяжитесь со мной</h2>
          <p className="text-lg text-foreground/70 mb-12">
            Готовы начать путь к изменениям? Запишитесь на первую консультацию
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "Mail",
                title: "Email",
                text: "psycholog@example.com"
              },
              {
                icon: "Phone",
                title: "Телефон",
                text: "+7 (999) 123-45-67"
              },
              {
                icon: "MessageCircle",
                title: "Telegram",
                text: "@psycholog_cbt"
              }
            ].map((contact, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-2xl border border-border/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{contact.title}</h3>
                <p className="text-foreground/70">{contact.text}</p>
              </div>
            ))}
          </div>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t border-border/50 mt-20">
        <div className="text-center text-foreground/60">
          <p>© 2024 Психолог КПТ. Все права защищены.</p>
          <p className="mt-2 text-sm">Конфиденциальность гарантирована</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
