import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Психолог КПТ</h1>
            <ul className="hidden md:flex gap-6">
              {["Главная", "Обо мне", "Услуги", "КПТ", "Контакты"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 text-foreground leading-tight">
                Путь к осознанной жизни начинается здесь
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональная психологическая поддержка в формате когнитивно-поведенческой терапии
              </p>
              <Button
                size="lg"
                onClick={() => scrollToSection("контакты")}
                className="rounded-full px-8 text-lg hover:scale-105 transition-transform"
              >
                Записаться на консультацию
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/afc048a6-e402-4b95-8c50-ca85c3b6c207/files/d78bfd61-daa2-4512-9788-c7f85fe76115.jpg"
                alt="Психолог"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="обо-мне" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Обо мне</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Я — дипломированный психолог с опытом работы более 7 лет. Специализируюсь на когнитивно-поведенческой
              терапии, которая помогает людям изменить деструктивные модели мышления и поведения.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "GraduationCap", title: "Образование", text: "Магистр психологии, сертификат КПТ-терапевта" },
              { icon: "Award", title: "Опыт", text: "Более 1000 часов индивидуальных консультаций" },
              { icon: "Heart", title: "Подход", text: "Эмпатия, конфиденциальность, научная обоснованность" },
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Тревожные расстройства",
                description: "Работа с паническими атаками, ОКР, социальной тревожностью",
                icon: "Brain",
              },
              {
                title: "Депрессивные состояния",
                description: "Помощь в преодолении депрессии и апатии",
                icon: "Sparkles",
              },
              {
                title: "Стресс и выгорание",
                description: "Восстановление эмоциональных ресурсов",
                icon: "Flame",
              },
              {
                title: "Отношения",
                description: "Сложности в личных и семейных отношениях",
                icon: "Users",
              },
              {
                title: "Самооценка",
                description: "Повышение уверенности в себе",
                icon: "TrendingUp",
              },
              {
                title: "Личностный рост",
                description: "Развитие и самопознание",
                icon: "Target",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-2xl"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="кпт" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/afc048a6-e402-4b95-8c50-ca85c3b6c207/files/2a3b97cc-10bb-4d56-88d3-cab891cbf254.jpg"
                alt="КПТ подход"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Что такое КПТ?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Когнитивно-поведенческая терапия — это научно обоснованный метод психотерапии, который помогает
                выявить и изменить негативные модели мышления и поведения.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Check", text: "Краткосрочная и эффективная" },
                  { icon: "Check", text: "Фокус на настоящем и будущем" },
                  { icon: "Check", text: "Практические техники и упражнения" },
                  { icon: "Check", text: "Научно доказанная эффективность" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={20} className="text-primary-foreground" />
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Запись на консультацию</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/afc048a6-e402-4b95-8c50-ca85c3b6c207/files/0f55dbd5-6f36-436a-803b-ea577038c1d6.jpg"
                alt="Консультация"
                className="rounded-3xl shadow-2xl w-full mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <p className="text-lg">+7 (999) 123-45-67</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <p className="text-lg">psycholog@example.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <p className="text-lg">Пн-Пт: 10:00 - 20:00</p>
                </div>
              </div>
            </div>
            <Card className="border-none shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Я свяжусь с вами в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-xl" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Психолог КПТ. Все права защищены.</p>
          <p className="text-sm text-muted-foreground mt-2">Конфиденциальность гарантирована</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
