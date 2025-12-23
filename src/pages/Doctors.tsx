import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Star } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  rating: number;
}

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Иванова Мария Петровна",
    specialty: "Педиатр",
    experience: "15 лет опыта",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Петров Алексей Игоревич",
    specialty: "Детский кардиолог",
    experience: "12 лет опыта",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Сидорова Елена Владимировна",
    specialty: "ЛОР (отоларинголог)",
    experience: "10 лет опыта",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Козлов Дмитрий Сергеевич",
    specialty: "Детский хирург",
    experience: "18 лет опыта",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    rating: 5.0,
  },
  {
    id: "5",
    name: "Новикова Анна Михайловна",
    specialty: "Дерматолог",
    experience: "8 лет опыта",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
  },
  {
    id: "6",
    name: "Морозов Игорь Викторович",
    specialty: "Невролог",
    experience: "14 лет опыта",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
  },
  {
    id: "7",
    name: "Волкова Ольга Николаевна",
    specialty: "Офтальмолог",
    experience: "11 лет опыта",
    image: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
  },
  {
    id: "8",
    name: "Соколов Андрей Павлович",
    specialty: "Ортопед",
    experience: "16 лет опыта",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
  },
  {
    id: "9",
    name: "Лебедева Татьяна Андреевна",
    specialty: "Эндокринолог",
    experience: "9 лет опыта",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
  },
  {
    id: "10",
    name: "Кузнецов Павел Олегович",
    specialty: "Аллерголог",
    experience: "13 лет опыта",
    image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
  },
  {
    id: "11",
    name: "Егорова Наталья Сергеевна",
    specialty: "Гастроэнтеролог",
    experience: "10 лет опыта",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
  },
  {
    id: "12",
    name: "Белова Ирина Александровна",
    specialty: "Детский психолог",
    experience: "12 лет опыта",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop&crop=face",
    rating: 5.0,
  },
];

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="glass-card overflow-hidden hover-lift group">
      <div className="aspect-square overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-medium text-foreground">{doctor.rating}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-1">{doctor.name}</h3>
        <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="w-4 h-4" />
          {doctor.experience}
        </div>
        <Link to={`/appointment?doctor=${doctor.id}`}>
          <Button variant="soft" className="w-full">
            Записаться
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Doctors() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-pattern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши <span className="gradient-text">врачи</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Команда опытных специалистов, которые заботятся о здоровье ваших детей 
              с профессионализмом и любовью
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Врачей" },
              { value: "12", label: "Специальностей" },
              { value: "15+", label: "Лет опыта" },
              { value: "4.9", label: "Средний рейтинг" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Не нашли нужного специалиста?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь с нами, и мы поможем подобрать врача для вашего ребёнка
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment">
                <Button variant="hero" size="lg">
                  Записаться на приём
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contacts">
                <Button variant="outline" size="lg">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
