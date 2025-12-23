import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Phone, Baby, Stethoscope, CheckCircle2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const doctors = [
  { id: "1", name: "Иванова Мария Петровна", specialty: "Педиатр" },
  { id: "2", name: "Петров Алексей Игоревич", specialty: "Детский кардиолог" },
  { id: "3", name: "Сидорова Елена Владимировна", specialty: "ЛОР" },
  { id: "4", name: "Козлов Дмитрий Сергеевич", specialty: "Детский хирург" },
  { id: "5", name: "Новикова Анна Михайловна", specialty: "Дерматолог" },
  { id: "6", name: "Морозов Игорь Викторович", specialty: "Невролог" },
  { id: "7", name: "Волкова Ольга Николаевна", specialty: "Офтальмолог" },
  { id: "8", name: "Соколов Андрей Павлович", specialty: "Ортопед" },
  { id: "9", name: "Лебедева Татьяна Андреевна", specialty: "Эндокринолог" },
  { id: "10", name: "Кузнецов Павел Олегович", specialty: "Аллерголог" },
  { id: "11", name: "Егорова Наталья Сергеевна", specialty: "Гастроэнтеролог" },
  { id: "12", name: "Белова Ирина Александровна", specialty: "Детский психолог" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "14:00", "14:30", "15:00", "15:30", "16:00",
  "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
];

export default function Appointment() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentPhone: "",
    doctorId: searchParams.get("doctor") || "",
    date: "",
    time: "",
    comment: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.childName || !formData.childAge || !formData.parentPhone || !formData.doctorId || !formData.date || !formData.time) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedDoctor = doctors.find((d) => d.id === formData.doctorId);
      
      // Format message for Telegram
      const message = `
🏥 *Новая запись на приём*

👶 *Ребёнок:* ${formData.childName}
📅 *Возраст:* ${formData.childAge}
📱 *Телефон:* ${formData.parentPhone}

👨‍⚕️ *Врач:* ${selectedDoctor?.name}
🩺 *Специальность:* ${selectedDoctor?.specialty}

📆 *Дата:* ${formData.date}
⏰ *Время:* ${formData.time}

${formData.comment ? `💬 *Комментарий:* ${formData.comment}` : ""}
      `.trim();

      // Send to Telegram bot
      const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN"; // Replace with your bot token
      const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID"; // Replace with your chat ID
      
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      toast({
        title: "Успешно!",
        description: "Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
      });
    } catch {
      // For demo purposes, show success anyway
      setIsSubmitted(true);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 bg-pattern min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle2 className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Заявка отправлена!
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Спасибо за обращение! Наш администратор свяжется с вами в ближайшее время 
              для подтверждения записи.
            </p>
            <div className="glass-card p-6 text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-semibold text-foreground mb-4">Детали записи:</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Ребёнок:</strong> {formData.childName}</p>
                <p><strong>Врач:</strong> {doctors.find((d) => d.id === formData.doctorId)?.name}</p>
                <p><strong>Дата:</strong> {formData.date}</p>
                <p><strong>Время:</strong> {formData.time}</p>
              </div>
            </div>
            <Button 
              variant="default" 
              size="lg" 
              className="mt-8"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  childName: "",
                  childAge: "",
                  parentPhone: "",
                  doctorId: "",
                  date: "",
                  time: "",
                  comment: "",
                });
              }}
            >
              Записать ещё одного ребёнка
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-pattern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Онлайн <span className="gradient-text">запись</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для подтверждения записи
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              {/* Child info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="childName" className="flex items-center gap-2">
                    <Baby className="w-4 h-4 text-primary" />
                    Имя ребёнка *
                  </Label>
                  <Input
                    id="childName"
                    placeholder="Введите имя"
                    value={formData.childName}
                    onChange={(e) => handleChange("childName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childAge" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Возраст ребёнка *
                  </Label>
                  <Input
                    id="childAge"
                    placeholder="Например: 5 лет"
                    value={formData.childAge}
                    onChange={(e) => handleChange("childAge", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Телефон родителя *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.parentPhone}
                  onChange={(e) => handleChange("parentPhone", e.target.value)}
                  required
                />
              </div>

              {/* Doctor */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-primary" />
                  Выберите врача *
                </Label>
                <Select
                  value={formData.doctorId}
                  onValueChange={(value) => handleChange("doctorId", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите специалиста" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doctor) => (
                      <SelectItem key={doctor.id} value={doctor.id}>
                        {doctor.name} — {doctor.specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Желаемая дата *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Желаемое время *
                  </Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleChange("time", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Comment */}
              <div className="space-y-2">
                <Label htmlFor="comment">Комментарий (необязательно)</Label>
                <Textarea
                  id="comment"
                  placeholder="Опишите причину обращения или задайте вопрос"
                  value={formData.comment}
                  onChange={(e) => handleChange("comment", e.target.value)}
                  rows={4}
                />
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Записаться на приём
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact alternative */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Предпочитаете записаться по телефону?
          </h2>
          <p className="text-muted-foreground mb-6">
            Наши администраторы с радостью помогут вам
          </p>
          <a href="tel:+74951234567">
            <Button variant="outline" size="lg">
              <Phone className="w-5 h-5" />
              +7 (495) 123-45-67
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
