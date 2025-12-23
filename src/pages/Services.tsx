import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Activity, 
  Syringe, 
  FileText, 
  Scissors, 
  Eye, 
  Baby,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Консультации врачей",
    description: "Приём специалистов всех направлений детской медицины",
    features: ["Первичный осмотр", "Назначение лечения", "Рекомендации по уходу"],
    price: "от 2 500 ₽",
  },
  {
    icon: Baby,
    title: "Полное обследование детей",
    description: "Комплексная диагностика здоровья ребёнка",
    features: ["Осмотр педиатра", "Анализы", "УЗИ", "Заключение"],
    price: "от 8 000 ₽",
  },
  {
    icon: Activity,
    title: "УЗИ диагностика",
    description: "Ультразвуковое исследование всех органов и систем",
    features: ["УЗИ брюшной полости", "УЗИ сердца", "УЗИ почек", "Нейросонография"],
    price: "от 1 500 ₽",
  },
  {
    icon: Heart,
    title: "ЭКГ",
    description: "Электрокардиография для оценки работы сердца",
    features: ["Быстрый результат", "Расшифровка кардиолога", "Без боли"],
    price: "от 1 200 ₽",
  },
  {
    icon: FileText,
    title: "Анализы крови и мочи",
    description: "Лабораторные исследования всех видов",
    features: ["Общий анализ крови", "Биохимия", "Гормоны", "Аллергены"],
    price: "от 500 ₽",
  },
  {
    icon: Syringe,
    title: "Вакцинация",
    description: "Плановые и дополнительные прививки для детей",
    features: ["По национальному календарю", "Импортные вакцины", "Осмотр перед прививкой"],
    price: "от 1 000 ₽",
  },
  {
    icon: Eye,
    title: "Профилактические осмотры",
    description: "Регулярные осмотры для контроля здоровья",
    features: ["Для садика", "Для школы", "Для спорта"],
    price: "от 3 000 ₽",
  },
  {
    icon: FileText,
    title: "Медицинские справки",
    description: "Оформление справок для детских учреждений",
    features: ["Форма 026/у", "Форма 086/у", "Справка в бассейн"],
    price: "от 1 500 ₽",
  },
  {
    icon: Scissors,
    title: "Хирургические процедуры",
    description: "Малые хирургические вмешательства для детей",
    features: ["Удаление бородавок", "Обработка ран", "Снятие швов"],
    price: "от 2 000 ₽",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="glass-card p-6 hover-lift h-full flex flex-col">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
        <service.icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      
      <ul className="space-y-2 mb-6 flex-1">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-lg font-bold text-primary">{service.price}</span>
        <Link to="/appointment">
          <Button variant="soft" size="sm">
            Записаться
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-pattern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши <span className="gradient-text">услуги</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Полный спектр медицинских услуг для детей от 0 до 18 лет. 
              Современное оборудование и опытные специалисты.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Индивидуальный подход к каждому ребёнку
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы понимаем, что каждый ребёнок уникален. Наши врачи подберут 
                оптимальный план обследования и лечения с учётом особенностей 
                вашего малыша.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Консультация по результатам обследований",
                  "Подробные рекомендации для родителей",
                  "Возможность связаться с врачом после приёма",
                  "Гибкий график записи",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/appointment">
                <Button variant="hero" size="lg">
                  Записаться на приём
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Нужна консультация?
              </h3>
              <p className="text-muted-foreground mb-6">
                Не уверены, какой специалист вам нужен? Позвоните нам, и мы 
                поможем подобрать врача для вашего ребёнка.
              </p>
              <a href="tel:+74951234567">
                <Button variant="default" size="lg" className="w-full">
                  +7 (495) 123-45-67
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
