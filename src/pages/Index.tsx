import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Home",
      title: "Строительство домов",
      description: "Возведение домов под ключ любой сложности",
    },
    {
      icon: "Building",
      title: "Ремонт квартир",
      description: "Капитальный и косметический ремонт",
    },
    {
      icon: "Paintbrush",
      title: "Фасадные работы",
      description: "Отделка и утепление фасадов",
    },
    {
      icon: "Hammer",
      title: "Кровельные работы",
      description: "Монтаж и ремонт любых типов крыш",
    },
    {
      icon: "Wrench",
      title: "Инженерные системы",
      description: "Электрика, сантехника, отопление",
    },
    {
      icon: "Layers",
      title: "Фундаменты",
      description: "Заливка фундаментов всех типов",
    },
  ];

  const portfolio = [
    {
      image: "/img/d96c5245-7842-4d42-aed3-6459ea79302f.jpg",
      title: "Жилой комплекс",
      description: "3-этажный дом, 450 м²",
    },
    {
      image: "/img/a3aa8de8-9ba1-47a7-a72a-c99a2a649929.jpg",
      title: "Коммерческий объект",
      description: "Офисное здание, 800 м²",
    },
    {
      image: "/img/58d1ac88-0137-40e8-8b77-71e8336dd8d9.jpg",
      title: "Частный дом",
      description: "Коттедж премиум-класса, 280 м²",
    },
  ];



  const reviews = [
    {
      name: "Марина К.",
      text: "Отличная работа! Сделали ремонт квартиры за 2 месяца. Качество на высоте.",
      rating: 5,
    },
    {
      name: "Андрей С.",
      text: "Построили дом под ключ. Все в срок, все по договору. Рекомендую!",
      rating: 5,
    },
    {
      name: "Елена М.",
      text: "Профессиональная бригада. Сделали фасад и кровлю. Очень довольны результатом.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="HardHat" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">
                СтройБригада Кемерово
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="hover:text-primary transition-colors">
                Главная
              </a>
              <a
                href="#services"
                className="hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="hover:text-primary transition-colors"
              >
                Портфолио
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                О нас
              </a>

              <a
                href="#reviews"
                className="hover:text-primary transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="hidden md:flex gap-2">
              <Icon name="Phone" size={18} />
              +7 (384) 2XX-XX-XX
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="pt-32 pb-20 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/img/a3aa8de8-9ba1-47a7-a72a-c99a2a649929.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Строим качественно в Кемерово
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Профессиональная строительная бригада с опытом более 15 лет
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg gap-2">
              <Icon name="Phone" size={20} />
              Заказать звонок
            </Button>
            <Button size="lg" variant="secondary" className="text-lg gap-2">
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-primary-foreground"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Наши работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg mb-4">
                Мы — профессиональная строительная бригада из Кемерово с опытом
                работы более 15 лет. За это время мы реализовали более 200
                проектов различной сложности.
              </p>
              <p className="text-lg mb-4">
                Наша команда состоит из квалифицированных специалистов, которые
                используют только качественные материалы и современные технологии
                строительства.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">
                    Завершенных проектов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    15
                  </div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Довольных клиентов
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/58d1ac88-0137-40e8-8b77-71e8336dd8d9.jpg"
                alt="Наша команда"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>



      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="text-lg mb-4">{review.text}</p>
                  <p className="font-bold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(/img/d96c5245-7842-4d42-aed3-6459ea79302f.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Свяжитесь с нами
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon
                        name="Phone"
                        size={24}
                        className="text-primary-foreground"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">
                        +7 (384) 2XX-XX-XX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <Icon
                        name="Mail"
                        size={24}
                        className="text-secondary-foreground"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">
                        info@stroybrigada.ru
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Icon
                        name="MapPin"
                        size={24}
                        className="text-accent-foreground"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">
                        г. Кемерово, ул. Строительная, 1
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                  <Textarea
                    placeholder="Опишите ваш проект"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                  <Button type="submit" className="w-full gap-2" size="lg">
                    <Icon name="Send" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="HardHat" size={32} className="text-primary" />
                <span className="text-xl font-bold">
                  СтройБригада Кемерово
                </span>
              </div>
              <p className="text-gray-400">
                Профессиональное строительство и ремонт в Кемерово с 2009 года
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <a
                  href="#services"
                  className="block text-gray-400 hover:text-primary transition-colors"
                >
                  Услуги
                </a>
                <a
                  href="#portfolio"
                  className="block text-gray-400 hover:text-primary transition-colors"
                >
                  Портфолио
                </a>
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-primary transition-colors"
                >
                  О нас
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-primary transition-colors"
                >
                  Контакты
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 8:00 - 18:00</p>
                <p>Сб: 9:00 - 15:00</p>
                <p>Вс: Выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройБригада Кемерово. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;