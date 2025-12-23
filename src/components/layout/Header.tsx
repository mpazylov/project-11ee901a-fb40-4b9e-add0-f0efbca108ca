import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Heart } from "lucide-react";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "О клинике", href: "/about" },
  { name: "Врачи", href: "/doctors" },
  { name: "Услуги", href: "/services" },
  { name: "Отделения", href: "/departments" },
  { name: "Отзывы", href: "/reviews" },
  { name: "Контакты", href: "/contacts" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50">
      <div className="container-custom">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border/30 text-sm">
          <div className="flex items-center gap-6 text-muted-foreground">
            <span>Пн-Пт: 8:00 - 20:00 | Сб-Вс: 9:00 - 18:00</span>
          </div>
          <a 
            href="tel:+74951234567" 
            className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +7 (495) 123-45-67
          </a>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft group-hover:shadow-hover transition-all duration-300">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-foreground">Детский Доктор</h1>
              <p className="text-xs text-muted-foreground">Медицинский центр</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
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
            <Link to="/appointment" className="hidden sm:block">
              <Button variant="hero" size="default">
                Записаться
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
                key={item.name}
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
                Записаться на приём
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
