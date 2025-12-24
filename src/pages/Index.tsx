import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, Stethoscope, Star, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.jpg";

// Hero Section
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-pattern min-h-[90vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/10 animate-float-delayed" />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-accent/10 animate-float" />
      
      <div className="container-custom py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 fill-primary" />
              Лучшая детская клиника Москвы
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="text-secondary">Baby</span>{" "}
              <span className="text-primary">City</span> — <br />
              <span className="gradient-text">забота о детях</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Современный детский медицинский центр с опытными врачами, 
              передовым оборудованием и заботливым отношением к каждому ребёнку.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/appointment">
                <Button variant="hero" size="xl">
                  Записаться на приём
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/doctors">
                <Button variant="outline" size="xl">
                  Наши врачи
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "15+", label: "лет опыта" },
                { value: "50+", label: "врачей" },
                { value: "10K+", label: "пациентов" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-hover">
              <img 
                src={heroImage} 
                alt="Врач осматривает ребёнка в Baby City" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Baby City" className="w-12 h-12 object-contain" />
                <div>
                  <div className="font-semibold text-foreground">Работаем ежедневно</div>
                  <div className="text-sm text-muted-foreground">8:00 - 20:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Stethoscope,
      title: "Опытные врачи",
      description: "Более 50 специалистов с многолетним опытом работы с детьми",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Современное оборудование",
      description: "Передовые технологии диагностики и лечения",
      color: "secondary",
    },
    {
      icon: Heart,
      title: "Забота о детях",
      description: "Дружелюбная атмосфера и индивидуальный подход",
      color: "primary",
    },
    {
      icon: Users,
      title: "Комплексный подход",
      description: "Все необходимые обследования в одном месте",
      color: "secondary",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему выбирают <span className="text-primary">Baby City</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы создаём комфортные условия для детей и их родителей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Preview
function ServicesPreview() {
  const services = [
    { name: "Консультации врачей", icon: Stethoscope },
    { name: "УЗИ диагностика", icon: Shield },
    { name: "Анализы крови", icon: Heart },
    { name: "Вакцинация", icon: CheckCircle2 },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Полный спектр <span className="text-primary">медицинских услуг</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы предлагаем комплексное медицинское обслуживание для детей всех возрастов — 
              от профилактических осмотров до сложной диагностики.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service) => (
                <div key={service.name} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <service.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{service.name}</span>
                </div>
              ))}
            </div>

            <Link to="/services">
              <Button variant="default" size="lg">
                Все услуги
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card p-6 hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">12+</div>
                  <div className="text-muted-foreground">специальностей</div>
                </div>
                <div className="glass-card p-6 hover-lift bg-primary text-primary-foreground">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-primary-foreground/80">Экстренная помощь</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass-card p-6 hover-lift bg-secondary text-secondary-foreground">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-secondary-foreground/80">Довольных родителей</div>
                </div>
                <div className="glass-card p-6 hover-lift">
                  <div className="text-3xl font-bold text-secondary mb-2">4</div>
                  <div className="text-muted-foreground">филиала в Москве</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Запишитесь на приём сегодня
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Наши специалисты готовы помочь вашему ребёнку. 
          Запись онлайн или по телефону.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/appointment">
            <Button variant="secondary" size="xl">
              Записаться онлайн
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <a href="tel:+74951234567">
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              +7 (495) 123-45-67
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
