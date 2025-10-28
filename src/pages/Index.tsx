import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/30 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-8 flex justify-between items-center">
          <div className="text-3xl font-bold text-primary tracking-tight">Психолог КПТ</div>
          <div className="hidden md:flex gap-12 text-sm uppercase tracking-wider">
            <a href="#about" className="text-foreground/60 hover:text-primary transition-colors font-medium">О специалисте</a>
            <a href="#services" className="text-foreground/60 hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#approach" className="text-foreground/60 hover:text-primary transition-colors font-medium">Подход</a>
            <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors font-medium">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground leading-[1.1] tracking-tight">
            Путь к внутреннему <span className="italic">равновесию</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Профессиональная психологическая помощь в рамках когнитивно-поведенческой терапии
          </p>
          <Button 
            size="lg" 
            className="text-base px-10 py-7 uppercase tracking-wider font-medium hover:scale-105 transition-transform"
          >
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section id="about" className="container mx-auto px-6 py-20 border-t border-border/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 -rotate-1"></div>
            <div className="relative bg-muted/40 p-12 md:p-16 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 border-2 border-primary/20 mx-auto mb-8 flex items-center justify-center">
                  <Icon name="User" size={80} className="text-primary/30" />
                </div>
                <p className="text-foreground/40 text-lg uppercase tracking-widest font-light">Фотография</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">О специалисте</h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed font-light">
              <p>
                Я специализируюсь на когнитивно-поведенческой терапии и помогаю людям справляться с тревогой, депрессией, 
                стрессом и другими эмоциональными трудностями.
              </p>
              <p>
                В моей практике я использую научно обоснованные методы КПТ, которые помогают изменить негативные паттерны 
                мышления и поведения на более адаптивные и конструктивные.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-6 text-sm uppercase tracking-wider">
              <div className="border-l-2 border-primary pl-4 py-2 font-medium">
                Опыт работы 10+ лет
              </div>
              <div className="border-l-2 border-primary pl-4 py-2 font-medium">
                Сертифицированный КПТ специалист
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-6 py-20 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-20 tracking-tight">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                className="group border-t-2 border-border/30 pt-8 hover:border-primary transition-colors"
              >
                <div className="mb-6">
                  <Icon name={service.icon} size={32} className="text-primary/60" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="container mx-auto px-6 py-20 border-t border-border/30 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight text-center">
            Что такое КПТ подход?
          </h2>
          <div className="bg-background border border-border/30 p-12 md:p-16 space-y-10">
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              <span className="font-semibold text-primary">Когнитивно-поведенческая терапия (КПТ)</span> — это научно обоснованный метод психотерапии, 
              который фокусируется на связи между мыслями, эмоциями и поведением.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
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
                <div key={index} className="border-l-2 border-primary/30 pl-6">
                  <h4 className="font-semibold text-foreground mb-2 text-lg tracking-tight">{item.title}</h4>
                  <p className="text-foreground/60 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-20 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight text-center">Свяжитесь со мной</h2>
          <p className="text-xl text-foreground/60 mb-20 text-center font-light max-w-2xl mx-auto leading-relaxed">
            Готовы начать путь к изменениям? Запишитесь на первую консультацию
          </p>
          <div className="grid md:grid-cols-3 gap-10 mb-16">
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
                className="text-center border-t-2 border-border/30 pt-8 hover:border-primary transition-colors"
              >
                <div className="w-16 h-16 border border-border/50 flex items-center justify-center mx-auto mb-6">
                  <Icon name={contact.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 uppercase tracking-wider text-sm">{contact.title}</h3>
                <p className="text-foreground/60 font-light">{contact.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-base px-10 py-7 uppercase tracking-wider font-medium hover:scale-105 transition-transform"
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-16 border-t border-border/30">
        <div className="text-center text-foreground/40 text-sm uppercase tracking-widest font-light space-y-3">
          <p>© 2024 Психолог КПТ</p>
          <p className="text-xs">Конфиденциальность гарантирована</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;