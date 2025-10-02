import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Building2",
      title: "Строительство домов",
      description: "Возведение жилых и коммерческих объектов под ключ"
    },
    {
      icon: "PaintBucket",
      title: "Ремонт и отделка",
      description: "Внутренние и наружные отделочные работы любой сложности"
    },
    {
      icon: "Hammer",
      title: "Реконструкция",
      description: "Модернизация и обновление существующих зданий"
    },
    {
      icon: "Wrench",
      title: "Инженерные системы",
      description: "Монтаж отопления, водоснабжения, электрики"
    }
  ];

  const projects = [
    {
      image: "/img/2f278878-0cfa-49b7-9ce4-e7d2ac9a94c4.jpg",
      title: "ЖК «Современный»",
      description: "Многоквартирный жилой комплекс, 120 квартир"
    },
    {
      image: "/img/12240db2-59c5-47c4-a996-5e0f313dbd53.jpg",
      title: "Частный дом",
      description: "Коттедж 250м², современная архитектура"
    },
    {
      image: "/img/2199a144-bc20-4f46-9dc6-06e23686979c.jpg",
      title: "Ремонт квартиры",
      description: "Дизайнерский ремонт трёхкомнатной квартиры"
    }
  ];

  const benefits = [
    { number: "15+", text: "Лет опыта" },
    { number: "200+", text: "Объектов сдано" },
    { number: "100%", text: "Гарантия качества" },
    { number: "24/7", text: "Поддержка клиентов" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="HardHat" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">СтройБригада</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary via-secondary/90 to-primary">
        <div className="container mx-auto text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Строительство<br />в Кемерово
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Профессиональная бригада с 15-летним опытом. Строим качественно, сдаём вовремя.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
              Наши проекты
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Полный цикл строительных работ</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Наши проекты</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Портфолио выполненных работ</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <Icon name="ArrowRight" size={24} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-5xl font-bold mb-2 text-primary">{benefit.number}</div>
                <div className="text-lg opacity-90">{benefit.text}</div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl leading-relaxed opacity-90">
              Мы — команда профессионалов с многолетним опытом в строительстве. 
              Используем только качественные материалы и современные технологии. 
              Гарантируем соблюдение сроков и прозрачное ценообразование на всех этапах работы.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">Свяжитесь с нами</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Оставьте заявку, и мы перезвоним в течение 15 минут</p>
          
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-secondary">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-secondary">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-secondary">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите ваш проект..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Icon name="Phone" size={20} className="text-primary" />
              <span className="text-lg font-semibold">+7 (384) 200-00-00</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Icon name="Mail" size={20} className="text-primary" />
              <span className="text-lg">info@stroybrigada-kmr.ru</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span className="text-lg">г. Кемерово, ул. Строительная, 1</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="opacity-75">© 2024 СтройБригада Кемерово. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
