import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Baby, 
  Microscope, 
  Scissors, 
  Activity,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  Shield
} from "lucide-react";

interface Department {
  icon: React.ElementType;
  title: string;
  description: string;
  services: string[];
  specialists: number;
  color: string;
}

const departments: Department[] = [
  {
    icon: Baby,
    title: "Педиатрическое отделение",
    description: "Комплексное медицинское обслуживание детей от рождения до 18 лет",
    services: [
      "Первичный приём педиатра",
      "Наблюдение новорождённых",
      "Лечение простудных заболеваний",
      "Оформление медицинских документов",
      "Консультации по питанию и развитию",
    ],
    specialists: 15,
    color: "primary",
  },
  {
    icon: Microscope,
    title: "Диагностическое отделение",
    description: "Современные методы диагностики для точной постановки диагноза",
    services: [
      "УЗИ всех органов",
      "ЭКГ и холтер-мониторинг",
      "Лабораторные анализы",
      "Аллергопробы",
      "Функциональная диагностика",
    ],
    specialists: 12,
    color: "secondary",
  },
  {
    icon: Scissors,
    title: "Хирургическое отделение",
    description: "Безопасные хирургические вмешательства для детей",
    services: [
      "Консультация детского хирурга",
      "Малые хирургические операции",
      "Удаление новообразований",
      "Обработка травм",
      "Плановые операции",
    ],
    specialists: 8,
    color: "accent",
  },
  {
    icon: Activity,
    title: "Реабилитация",
    description: "Восстановление здоровья и развитие детей",
    services: [
      "ЛФК и массаж",
      "Физиотерапия",
      "Логопедия",
      "Психологическая помощь",
      "Развивающие занятия",
    ],
    specialists: 10,
    color: "primary",
  },
];

function DepartmentCard({ department, index }: { department: Department; index: number }) {
  return (
    <div 
      className="glass-card overflow-hidden hover-lift animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`h-2 bg-${department.color}`} />
      <div className="p-6 md:p-8">
        <div className={`w-16 h-16 rounded-2xl bg-${department.color}/10 flex items-center justify-center mb-6`}>
          <department.icon className={`w-8 h-8 text-${department.color}`} />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-3">{department.title}</h3>
        <p className="text-muted-foreground mb-6">{department.description}</p>
        
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground font-medium">{department.specialists} специалистов</span>
          </div>
        </div>
        
        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
          Услуги отделения
        </h4>
        <ul className="space-y-3 mb-6">
          {department.services.map((service) => (
            <li key={service} className="flex items-start gap-3">
              <CheckCircle2 className={`w-5 h-5 text-${department.color} shrink-0 mt-0.5`} />
              <span className="text-muted-foreground">{service}</span>
            </li>
          ))}
        </ul>
        
        <Link to="/appointment">
          <Button variant="soft" className="w-full">
            Записаться в отделение
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Departments() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-pattern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши <span className="gradient-text">отделения</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Четыре специализированных отделения для комплексной заботы 
              о здоровье вашего ребёнка
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Baby, value: "4", label: "Отделения" },
              { icon: Users, value: "45+", label: "Специалистов" },
              { icon: Clock, value: "12 ч", label: "Работаем ежедневно" },
              { icon: Shield, value: "100%", label: "Безопасность" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((department, index) => (
              <DepartmentCard key={department.title} department={department} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Нужна помощь в выборе отделения?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Наши консультанты помогут определить, к какому специалисту 
            лучше записаться вашему ребёнку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74951234567">
              <Button variant="hero" size="lg">
                Позвонить
              </Button>
            </a>
            <Link to="/appointment">
              <Button variant="outline" size="lg">
                Записаться онлайн
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
