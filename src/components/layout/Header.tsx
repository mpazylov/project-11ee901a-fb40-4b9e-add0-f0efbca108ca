import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.jpg";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.doctors'), href: "/doctors" },
    { name: t('nav.services'), href: "/services" },
    { name: t('nav.departments'), href: "/departments" },
    { name: t('nav.branches'), href: "/branches" },
    { name: t('nav.reviews'), href: "/reviews" },
    { name: t('nav.contacts'), href: "/contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50">
      <div className="container-custom">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border/30 text-sm">
          <div className="flex items-center gap-6 text-muted-foreground">
            <span>{t('footer.workdays')} | {t('footer.weekends')}</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a 
              href="tel:+998901234567" 
              className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +998 90 123 45 67
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Baby City Hospital" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold">
                <span className="text-secondary">Baby</span>{" "}
                <span className="text-primary">City</span>
              </h1>
              <p className="text-xs text-muted-foreground">{t('hero.subtitle')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            <Link to="/appointment" className="hidden sm:block">
              <Button variant="hero" size="default">
                {t('nav.appointment')}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border/50 animate-fade-in">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/appointment" 
              onClick={() => setIsOpen(false)}
              className="mt-4"
            >
              <Button variant="hero" className="w-full">
                {t('nav.appointment')}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
