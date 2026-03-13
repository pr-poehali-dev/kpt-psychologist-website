import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <nav className="border-b border-border/30 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-8 flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-bold text-primary tracking-tight">CBT Help</div>
          <div className="hidden md:flex gap-12 text-sm uppercase tracking-wider">
            <a href="#about" className="text-foreground/60 hover:text-primary transition-colors font-medium">Обо мне</a>
            <a href="#services" className="text-foreground/60 hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#approach" className="text-foreground/60 hover:text-primary transition-colors font-medium">Подход</a>
            <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors font-medium">Контакты</a>
          </div>
          <div className="flex md:hidden gap-6 text-xs uppercase tracking-wider">
            <a href="#about" className="text-foreground/60 hover:text-primary transition-colors font-medium">Обо мне</a>
            <a href="#services" className="text-foreground/60 hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors font-medium">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="relative container mx-auto px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/afc048a6-e402-4b95-8c50-ca85c3b6c207/files/b56a5969-a322-46c7-87d0-6a70ca871683.jpg" 
            alt="Кабинет психолога"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.15] tracking-tight my-4 px-2">
            Путь к внутреннему <span className="italic">равновесию</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto font-light text-[#000000] px-2">
            Профессиональная психологическая помощь в рамках когнитивно-поведенческой терапии
          </p>
          <Button 
            size="lg" 
            onClick={() => setModalOpen(true)}
            className="text-sm md:text-base px-6 md:px-10 py-5 md:py-7 uppercase tracking-wider font-medium hover:scale-105 transition-transform w-full sm:w-auto"
          >
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16 md:py-20 border-t border-border/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative hidden md:block">
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
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Обо мне и моем опыте</h2>
            <div className="space-y-4 text-base md:text-lg text-foreground/70 leading-relaxed font-light">
              <p>Меня зовут Олег, я окончил психфак МГУ и уже длительное время занимаюсь психотерапией и преподаю психологию. Я специализируюсь на когнитивно-поведенческой терапии и помогаю людям справляться с тревогой, депрессией, стрессом и другими эмоциональными трудностями.</p>
              <p>
                В моей практике я использую научно обоснованные методы КПТ, которые помогают изменить негативные паттерны 
                мышления и поведения на более адаптивные и конструктивные.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-4 text-sm uppercase tracking-wider">
              <div className="border-l-2 border-primary pl-4 py-2 font-medium">Опыт работы более 5 лет</div>
              <div className="border-l-2 border-primary pl-4 py-2 font-medium">
                Сертифицированный КПТ специалист
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative container mx-auto px-4 py-16 md:py-20 border-t border-border/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/afc048a6-e402-4b95-8c50-ca85c3b6c207/files/2ec84576-0c39-4a97-8984-0fa93cf207dc.jpg" 
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 md:mb-20 tracking-tight text-center">Запросы, с которыми мы будем работать</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
                className="group border-t-2 border-border/30 pt-6 md:pt-8 hover:border-primary transition-colors"
              >
                <div className="mb-4 md:mb-6">
                  <Icon name={service.icon} size={32} className="text-primary/60" />
                </div>
                <h3 className="text-foreground mb-3 tracking-tight font-semibold text-2xl md:text-3xl">{service.title}</h3>
                <p className="leading-relaxed font-light text-[#000000] text-base md:text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="container mx-auto px-4 border-t border-border/30 bg-muted/20 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-10 md:mb-16 tracking-tight text-center">
            Что такое КПТ подход?
          </h2>
          <div className="bg-background border border-border/30 p-6 md:p-16 space-y-8 md:space-y-10">
            <p className="text-foreground/80 leading-relaxed font-light text-lg md:text-2xl">
              <span className="font-semibold text-primary">Когнитивно-поведенческая терапия (КПТ)</span> — это научно обоснованный метод психотерапии, 
              который фокусируется на связи между мыслями, эмоциями и поведением.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
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
                <div key={index} className="border-l-2 border-primary/30 pl-5 md:pl-6">
                  <h4 className="font-semibold text-foreground mb-2 tracking-tight text-base md:text-lg">{item.title}</h4>
                  <p className="text-foreground/60 font-light leading-relaxed text-sm md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative container mx-auto px-4 border-t border-border/30 py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/afc048a6-e402-4b95-8c50-ca85c3b6c207/files/4d012820-d7b6-4e8e-a977-209b90832108.jpg" 
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 md:mb-8 tracking-tight text-center">Свяжитесь со мной</h2>
          <p className="text-lg md:text-xl text-foreground/60 mb-12 md:mb-20 text-center font-light max-w-2xl mx-auto leading-relaxed">
            Готовы начать путь к изменениям? Запишитесь на первую консультацию
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
            {[
              {
                icon: "Mail",
                title: "Email",
                text: "nyamkoba@gmail.com"
              },
              {
                icon: "Phone",
                title: "Телефон",
                text: "+7 (905) 503-44-01"
              },
              {
                icon: "MessageCircle",
                title: "Telegram",
                text: "@cbthelps"
              }
            ].map((contact, index) => (
              <div 
                key={index}
                className="text-center border-t-2 border-border/30 pt-8 hover:border-primary transition-colors"
              >
                <div className="w-20 h-20 border border-border/50 flex items-center justify-center mx-auto mb-6">
                  <Icon name={contact.icon} size={40} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 uppercase tracking-wider text-base">{contact.title}</h3>
                <p className="font-light text-[#000000] text-lg">{contact.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => setModalOpen(true)}
              className="text-sm md:text-base px-6 md:px-10 py-5 md:py-7 uppercase tracking-wider font-medium hover:scale-105 transition-transform w-full sm:w-auto"
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-10 md:py-16 border-t border-border/30">
        <div className="text-center text-foreground/40 text-sm uppercase tracking-widest font-light space-y-3">
          <p>© 2021 CBT Help</p>
          <p className="text-xs">Конфиденциальность гарантирована</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
