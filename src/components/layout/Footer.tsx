import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpg";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Baby City" className="w-14 h-14 object-contain bg-white rounded-xl p-1" />
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-secondary">Baby</span>{" "}
                  <span className="text-primary">City</span>
                </h2>
                <p className="text-sm text-primary-foreground/70">{t('hero.subtitle')}</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              {[
                { name: t('nav.about'), href: "/about" },
                { name: t('nav.doctors'), href: "/doctors" },
                { name: t('nav.services'), href: "/services" },
                { name: t('nav.branches'), href: "/branches" },
                { name: t('nav.appointment'), href: "/appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {[t('services.consultations'), t('services.diagnostics'), t('services.vaccination'), t('services.checkups')].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contacts')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+998901234567" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@babycity.uz" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  info@babycity.uz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70 text-sm">
                  <p>{t('footer.workdays')}</p>
                  <p>{t('footer.weekends')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Baby City. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
