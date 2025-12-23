import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contacts() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-pattern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="gradient-text">Контакты</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады ответить на ваши вопросы и помочь записаться на приём
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Как с нами связаться</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="tel:+74951234567"
                  className="glass-card p-6 hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                  <p className="text-primary font-medium">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-1">Звоните в рабочее время</p>
                </a>

                <a 
                  href="mailto:info@detdoctor.ru"
                  className="glass-card p-6 hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-secondary font-medium">info@detdoctor.ru</p>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение дня</p>
                </a>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                    <p className="text-foreground">г. Москва, ул. Детская, д. 15</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Рядом с метро Детская (5 минут пешком)
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">График работы</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="flex justify-between gap-4">
                        <span>Понедельник — Пятница</span>
                        <span className="font-medium text-foreground">8:00 — 20:00</span>
                      </p>
                      <p className="flex justify-between gap-4">
                        <span>Суббота — Воскресенье</span>
                        <span className="font-medium text-foreground">9:00 — 18:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://t.me/detdoctor" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Написать в Telegram
                </Button>
              </a>
            </div>

            {/* Map */}
            <div className="glass-card overflow-hidden h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.397087990512!2d37.61844!3d55.75396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzE0LjMiTiAzN8KwMzcnMDYuNCJF!5e0!3m2!1sru!2sru!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения клиники"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Как добраться
            </h2>
            <div className="glass-card p-8 text-left">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">На метро:</strong> Станция "Детская" 
                  (выход №3), далее 5 минут пешком по улице Детской.
                </p>
                <p>
                  <strong className="text-foreground">На автобусе:</strong> Маршруты 
                  №15, 24, 38 до остановки "Детская больница".
                </p>
                <p>
                  <strong className="text-foreground">На автомобиле:</strong> Бесплатная 
                  парковка для пациентов на территории клиники (въезд со двора).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
