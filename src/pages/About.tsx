import { Shield, Heart, Award, Users, Clock, CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Забота",
      description: "Каждый ребёнок получает индивидуальное внимание и заботу",
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Современные стандарты безопасности и гигиены",
    },
    {
      icon: Award,
      title: "Профессионализм",
      description: "Врачи высшей категории с многолетним опытом",
    },
    {
      icon: Users,
      title: "Доверие",
      description: "Тысячи семей доверяют нам здоровье своих детей",
    },
  ];

  const achievements = [
    { value: "2009", label: "Год основания" },
    { value: "50+", label: "Врачей" },
    { value: "10 000+", label: "Пациентов в год" },
    { value: "15+", label: "Лет опыта" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-pattern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              О нашей <span className="gradient-text">клинике</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Детский медицинский центр "Детский Доктор" — это современная клиника, 
              где здоровье вашего ребёнка в надёжных руках опытных специалистов.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Клиника "Детский Доктор" была основана в 2009 году группой 
                  опытных педиатров с целью создать медицинский центр, где дети 
                  будут чувствовать себя комфортно и безопасно.
                </p>
                <p>
                  За 15 лет работы мы выросли из небольшой клиники в современный 
                  многопрофильный медицинский центр с полным спектром услуг для 
                  детей от рождения до 18 лет.
                </p>
                <p>
                  Сегодня в нашей команде более 50 врачей различных специальностей, 
                  и мы ежегодно помогаем тысячам маленьких пациентов.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div 
                  key={item.label}
                  className="glass-card p-6 text-center hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Лицензии и сертификаты
            </h2>
            
            <div className="space-y-4">
              {[
                "Лицензия на осуществление медицинской деятельности № ЛО-77-01-XXXXX",
                "Сертификат соответствия стандартам качества ISO 9001:2015",
                "Аккредитация Росздравнадзора",
                "Членство в Российской ассоциации педиатров",
              ].map((license, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-foreground">{license}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Безопасность и комфорт
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Строгое соблюдение санитарных норм и дезинфекция помещений" },
                  { icon: Heart, text: "Дружелюбная атмосфера и игровые зоны для детей" },
                  { icon: Clock, text: "Отдельные потоки для здоровых и больных пациентов" },
                  { icon: Award, text: "Современное оборудование ведущих мировых производителей" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-muted-foreground pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Мы заботимся о каждом ребёнке
                </h3>
                <p className="text-muted-foreground">
                  Наша миссия — сделать визит к врачу комфортным и безопасным 
                  для детей и их родителей. Мы создаём тёплую атмосферу, 
                  где ваш ребёнок будет чувствовать себя спокойно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
