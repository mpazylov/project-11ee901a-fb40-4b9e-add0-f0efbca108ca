import { Star, Quote } from "lucide-react";

interface Review {
  id: string;
  author: string;
  childAge: string;
  rating: number;
  date: string;
  text: string;
  doctor?: string;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Анна М.",
    childAge: "3 года",
    rating: 5,
    date: "15 декабря 2024",
    text: "Замечательная клиника! Врачи внимательные и заботливые. Ребёнок не боится ходить к врачу, потому что здесь создана очень дружелюбная атмосфера. Особенно благодарны педиатру Марии Петровне за её терпение и профессионализм.",
    doctor: "Иванова М.П., педиатр",
  },
  {
    id: "2",
    author: "Сергей К.",
    childAge: "7 лет",
    rating: 5,
    date: "10 декабря 2024",
    text: "Проходили полное обследование перед школой. Всё организовано очень удобно — все специалисты в одном месте, не нужно бегать по разным клиникам. Результаты анализов готовы быстро. Рекомендую!",
  },
  {
    id: "3",
    author: "Елена В.",
    childAge: "1.5 года",
    rating: 5,
    date: "5 декабря 2024",
    text: "Наблюдаемся с рождения. Очень довольны качеством обслуживания. Врачи всегда на связи, отвечают на все вопросы. Отдельное спасибо за терпение с маленькими пациентами!",
    doctor: "Сидорова Е.В., ЛОР",
  },
  {
    id: "4",
    author: "Дмитрий Н.",
    childAge: "5 лет",
    rating: 4,
    date: "1 декабря 2024",
    text: "Хорошая клиника с современным оборудованием. Немного долго ждали приёма, но сам приём был очень качественным. Врач всё подробно объяснил и дал полезные рекомендации.",
  },
  {
    id: "5",
    author: "Мария Л.",
    childAge: "10 лет",
    rating: 5,
    date: "28 ноября 2024",
    text: "Обратились с аллергией. Аллерголог Павел Олегович провёл полное обследование и назначил эффективное лечение. Уже через неделю увидели улучшения. Очень благодарны!",
    doctor: "Кузнецов П.О., аллерголог",
  },
  {
    id: "6",
    author: "Ольга С.",
    childAge: "4 года",
    rating: 5,
    date: "20 ноября 2024",
    text: "Делали УЗИ ребёнку. Кабинет оборудован всем необходимым, врач очень аккуратно и бережно проводил исследование. Ребёнок даже не испугался. Спасибо за профессионализм!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-accent fill-accent" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <div 
      className="glass-card p-6 hover-lift animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">{review.author}</h3>
          <p className="text-sm text-muted-foreground">Ребёнок: {review.childAge}</p>
        </div>
        <Quote className="w-8 h-8 text-primary/20" />
      </div>
      
      <StarRating rating={review.rating} />
      
      <p className="mt-4 text-muted-foreground leading-relaxed">{review.text}</p>
      
      {review.doctor && (
        <p className="mt-4 text-sm text-primary font-medium">
          Врач: {review.doctor}
        </p>
      )}
      
      <p className="mt-4 text-sm text-muted-foreground/70">{review.date}</p>
    </div>
  );
}

export default function Reviews() {
  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
  
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-pattern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Отзывы <span className="gradient-text">родителей</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Что говорят о нас родители наших маленьких пациентов
            </p>
            
            {/* Rating summary */}
            <div className="inline-flex items-center gap-4 bg-card rounded-2xl p-6 shadow-card">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{averageRating}</div>
                <StarRating rating={Math.round(parseFloat(averageRating))} />
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">{reviews.length}+</div>
                <div className="text-muted-foreground">отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Рекомендуют нас" },
              { value: "4.9", label: "Средняя оценка" },
              { value: "10 000+", label: "Довольных семей" },
              { value: "15 лет", label: "Доверия родителей" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
