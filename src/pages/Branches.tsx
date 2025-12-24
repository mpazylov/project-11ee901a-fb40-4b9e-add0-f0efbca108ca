import { MapPin, Phone, Clock, Users, Building2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const branches = [
  {
    id: 1,
    name: "Baby City — Центральный",
    address: "г. Москва, ул. Детская, д. 15",
    phone: "+7 (495) 123-45-67",
    hours: "Пн-Вс: 8:00 - 21:00",
    isMain: true,
    services: ["Все специалисты", "Полная диагностика", "Стационар"],
  },
  {
    id: 2,
    name: "Baby City — Север",
    address: "г. Москва, ул. Северная, д. 42",
    phone: "+7 (495) 234-56-78",
    hours: "Пн-Сб: 9:00 - 20:00",
    isMain: false,
    services: ["Педиатрия", "УЗИ", "Анализы"],
  },
  {
    id: 3,
    name: "Baby City — Юг",
    address: "г. Москва, ул. Южная, д. 88",
    phone: "+7 (495) 345-67-89",
    hours: "Пн-Сб: 9:00 - 20:00",
    isMain: false,
    services: ["Педиатрия", "Неврология", "ЛОР"],
  },
  {
    id: 4,
    name: "Baby City — Запад",
    address: "г. Москва, ул. Западная, д. 21",
    phone: "+7 (495) 456-78-90",
    hours: "Пн-Пт: 9:00 - 19:00",
    isMain: false,
    services: ["Педиатрия", "Вакцинация", "Анализы"],
  },
];

const partnershipBenefits = [
  {
    icon: Building2,
    title: "Открытие филиала",
    description: "Станьте частью нашей сети и откройте филиал Baby City в своём городе",
  },
  {
    icon: Users,
    title: "Обучение персонала",
    description: "Мы обеспечиваем полное обучение врачей и медицинского персонала",
  },
  {
    icon: Handshake,
    title: "Поддержка бизнеса",
    description: "Маркетинговая поддержка, единые стандарты качества и бренд",
  },
];

function BranchCard({ branch }: { branch: typeof branches[0] }) {
  return (
    <div className={`glass-card p-6 hover-lift ${branch.isMain ? 'ring-2 ring-primary' : ''}`}>
      {branch.isMain && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
          Главный филиал
        </div>
      )}
      <h3 className="text-xl font-bold text-foreground mb-4">{branch.name}</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span className="text-muted-foreground">{branch.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary shrink-0" />
          <a 
            href={`tel:${branch.phone.replace(/\D/g, '')}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {branch.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary shrink-0" />
          <span className="text-muted-foreground">{branch.hours}</span>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-foreground mb-2">Услуги:</p>
        <div className="flex flex-wrap gap-2">
          {branch.services.map((service) => (
            <span 
              key={service}
              className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <Link to="/appointment">
        <Button variant="default" className="w-full">
          Записаться в этот филиал
        </Button>
      </Link>
    </div>
  );
}

export default function Branches() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-pattern">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши <span className="text-primary">филиалы</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Сеть детских клиник Baby City в Москве. Выберите ближайший филиал для записи на приём.
            </p>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {branches.map((branch, index) => (
              <div 
                key={branch.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BranchCard branch={branch} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-secondary">Сотрудничество</span> с Baby City
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к нашей сети детских клиник и откройте свой филиал Baby City
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {partnershipBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="glass-card p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Partnership CTA */}
          <div className="glass-card p-8 md:p-12 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Хотите стать партнёром Baby City?
                </h3>
                <p className="text-muted-foreground">
                  Мы ищем инвесторов и партнёров для открытия новых филиалов в Москве и регионах. 
                  Получите франшизу успешной сети детских клиник с проверенной бизнес-моделью.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacts">
                  <Button variant="hero" size="lg">
                    Стать партнёром
                  </Button>
                </Link>
                <a href="tel:+74951234567">
                  <Button variant="outline" size="lg">
                    Позвонить нам
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Мы на карте
            </h2>
            <p className="text-muted-foreground">
              Все наши филиалы расположены в удобных районах Москвы с хорошей транспортной доступностью
            </p>
          </div>
          
          <div className="glass-card overflow-hidden">
            <div className="aspect-[16/9] bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Интерактивная карта с филиалами Baby City
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
