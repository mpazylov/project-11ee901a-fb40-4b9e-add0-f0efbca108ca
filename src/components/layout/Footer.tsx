import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Baby City Hospital" 
                className="w-14 h-14 object-contain bg-white rounded-xl p-1"
              />
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-secondary">Baby</span>{" "}
                  <span className="text-primary">City</span>
                </h2>
                <p className="text-sm text-primary-foreground/70">Детская больница</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Современный детский медицинский центр с опытными врачами и заботливым отношением к каждому маленькому пациенту.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {[
                { name: "О клинике", href: "/about" },
                { name: "Наши врачи", href: "/doctors" },
                { name: "Услуги", href: "/services" },
                { name: "Филиалы", href: "/branches" },
                { name: "Записаться", href: "/appointment" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {[
                "Консультации врачей",
                "УЗИ диагностика",
                "Анализы",
                "Вакцинация",
                "Профосмотры",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  г. Москва, ул. Детская, д. 15
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="tel:+74951234567"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="mailto:info@babycity.ru"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  info@babycity.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70 text-sm">
                  <p>Пн-Пт: 8:00 - 20:00</p>
                  <p>Сб-Вс: 9:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Baby City Hospital. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-primary-foreground/50 hover:text-primary-foreground/70 text-sm transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
