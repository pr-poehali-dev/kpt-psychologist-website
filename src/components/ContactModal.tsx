import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUBMIT_URL = "https://functions.poehali.dev/969498f5-be35-488d-8c9e-f6e582205de3";

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [form, setForm] = useState({ name: "", phone: "", telegram: "", request: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", telegram: "", request: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background border border-border/50 w-full max-w-lg p-8 md:p-12 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-foreground/40 hover:text-foreground transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {status === "success" ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mx-auto">
              <Icon name="Check" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Заявка отправлена!</h3>
            <p className="text-foreground/60 font-light">Я свяжусь с вами в ближайшее время</p>
            <Button onClick={onClose} className="mt-4 uppercase tracking-wider">Закрыть</Button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Записаться на консультацию</h3>
            <p className="text-foreground/50 font-light mb-8 text-sm">Заполните форму, и я свяжусь с вами</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">Имя *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                  className="w-full bg-muted/30 border border-border/50 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">Телефон *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-muted/30 border border-border/50 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">Telegram</label>
                <input
                  name="telegram"
                  value={form.telegram}
                  onChange={handleChange}
                  placeholder="@username"
                  className="w-full bg-muted/30 border border-border/50 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-foreground/60 mb-2">Запрос <span className="normal-case tracking-normal">(необязательно)</span></label>
                <textarea
                  name="request"
                  value={form.request}
                  onChange={handleChange}
                  placeholder="Опишите, с чем хотите поработать..."
                  rows={3}
                  className="w-full bg-muted/30 border border-border/50 px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-6 uppercase tracking-wider font-medium text-base"
              >
                {status === "loading" ? "Отправка..." : "Отправить заявку"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
