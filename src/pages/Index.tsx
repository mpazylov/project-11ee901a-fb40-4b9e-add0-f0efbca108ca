import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, Stethoscope, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.jpg";

export default function Index() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pattern min-h-[90vh] flex items-center">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/10 animate-float-delayed" />
        
        <div className="container-custom py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
                <span className="text-secondary">Baby</span>{" "}
                <span className="text-primary">City</span> — <br />
                <span className="gradient-text">{t('hero.subtitle')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in">
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <Link to="/appointment">
                  <Button variant="hero" size="xl">
                    {t('hero.cta')}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button variant="outline" size="xl">
                    {t('hero.doctors')}
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.years')}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.doctors')}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.patients')}</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-hover">
                <img src={heroImage} alt="Baby City" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('features.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: t('features.experience'), desc: t('features.experience.desc') },
              { icon: Shield, title: t('features.equipment'), desc: t('features.equipment.desc') },
              { icon: Heart, title: t('features.care'), desc: t('features.care.desc') },
              { icon: Users, title: t('features.available'), desc: t('features.available.desc') },
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 hover-lift animate-fade-in">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground">{t('services.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Stethoscope, name: t('services.consultations'), desc: t('services.consultations.desc') },
              { icon: Shield, name: t('services.diagnostics'), desc: t('services.diagnostics.desc') },
              { icon: Heart, name: t('services.vaccination'), desc: t('services.vaccination.desc') },
              { icon: CheckCircle2, name: t('services.checkups'), desc: t('services.checkups.desc') },
            ].map((service, index) => (
              <div key={index} className="glass-card p-6 hover-lift">
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="default" size="lg">
                {t('services.all')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button variant="secondary" size="xl">
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+998901234567">
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                {t('cta.phone')}: +998 90 123 45 67
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
