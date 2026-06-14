import { useState } from "react";
import Icon from "@/components/ui/icon";

const SEND_LEAD_URL = "https://functions.poehali.dev/51bc4f45-9c72-46e9-814f-872387571d8e";

export default function Index() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);
    try {
      await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* Шапка */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/projects/3fbcc3c5-cfcd-4afe-83da-d6c2d6849c1d/bucket/3372afea-6e5d-4984-b552-cf55e81cbf96.png" alt="КомандаКлимата" className="h-10 w-auto" />
            <span className="font-bold text-slate-800 text-lg tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>КомандаКлимата</span>
          </div>
          <a
            href="tel:+79214219381"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-sky-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Icon name="Phone" size={15} />
            +7 (921) 421-93-81
          </a>
        </div>
      </header>

      {/* Герой */}
      <section className="relative pt-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 40%, #ffffff 70%)" }}
        />
        <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100 rounded-full opacity-60 blur-3xl -translate-y-1/4 translate-x-1/4 z-0" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-50 rounded-full opacity-80 blur-2xl z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Левая часть */}
          <div className="pb-16">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              Лучшее предложение сезона
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Кондиционер +<br />
              <span className="text-sky-500">монтаж со скидкой</span>
              <br />20%
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
              Одно из лучших предложений на рынке для жителей Санкт-Петербурга и Ленинградской области — покупай систему у нас и плати за установку значительно меньше конкурентов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm border border-sky-100">
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="Tag" size={20} className="text-sky-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Монтаж от</div>
                  <div className="text-slate-800 font-bold text-lg">17 000 ₽</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm border border-sky-100">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="Layers" size={20} className="text-emerald-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Мультисплит</div>
                  <div className="text-slate-800 font-bold text-lg">−10% скидка</div>
                </div>
              </div>
            </div>

            <a
              href="tel:+79214219381"
              className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-sky-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Icon name="PhoneCall" size={20} />
              Получить консультацию бесплатно
            </a>
          </div>

          {/* Правая часть — изображение */}
          <div className="relative flex justify-end items-end">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-100 w-full max-w-lg">
              <img
                src="https://cdn.poehali.dev/projects/3fbcc3c5-cfcd-4afe-83da-d6c2d6849c1d/files/471e1495-e900-4cb0-a4b4-86611a79d915.jpg"
                alt="Сплит-система в интерьере"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent" />
            </div>
            <div className="absolute -left-4 top-8 bg-white rounded-2xl shadow-xl px-5 py-3 border border-sky-50">
              <div className="text-xs text-slate-400 mb-0.5">Скидка на монтаж</div>
              <div className="text-2xl font-extrabold text-sky-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>−20%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок с услугами менеджеров */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">Один звонок</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Наш менеджер всё расскажет
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Не нужно разбираться в характеристиках самому — позвоните, и мы подберём идеальный вариант для вас.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Zap", title: "Подбор по мощности", desc: "Рассчитаем нужную мощность под площадь и особенности вашего помещения" },
              { icon: "BadgePercent", title: "Подбор по бюджету", desc: "Найдём оптимальный вариант в вашем ценовом диапазоне без переплат" },
              { icon: "Star", title: "Ключевые функции", desc: "Расскажем про инвертор, Wi-Fi управление, очистку воздуха и другие опции" },
              { icon: "Palette", title: "Дизайн и стиль", desc: "Поможем выбрать систему, которая впишется в ваш интерьер" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-sky-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sky-500/20 transition-colors">
                  <Icon name={item.icon} fallback="Star" size={22} className="text-sky-400" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-3xl p-8 text-center">
            <p className="text-sky-300 text-lg font-semibold mb-2">
              У нас дешевле — и системы, и монтаж
            </p>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Мы работаем напрямую с поставщиками и выполняем монтаж своими силами — без посредников и скрытых наценок
            </p>
          </div>
        </div>
      </section>

      {/* Форма */}
      <section id="form" className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://cdn.poehali.dev/projects/3fbcc3c5-cfcd-4afe-83da-d6c2d6849c1d/bucket/989b11b8-4da3-4d06-bef0-1e456bc4ebd3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-white/80" />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest mb-3">Бесплатная консультация</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Оставьте заявку — мы перезвоним
            </h2>
            <p className="text-slate-500">
              Менеджер свяжется в течение 15 минут и ответит на все вопросы
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-3xl shadow-xl border border-sky-100 p-10 text-center">
              <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name="CheckCircle" size={32} className="text-sky-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Заявка принята!</h3>
              <p className="text-slate-500">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-sky-100 p-8">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Ваше имя</label>
                  <div className="relative">
                    <Icon name="User" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="text"
                      placeholder="Иван"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3.5 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-300 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Номер телефона</label>
                  <div className="relative">
                    <Icon name="Phone" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3.5 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-300 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-sky-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Icon name={loading ? "Loader" : "Send"} size={18} className={loading ? "animate-spin" : ""} />
                {loading ? "Отправляем..." : "Перезвоните мне"}
              </button>

              <p className="text-slate-400 text-xs text-center mt-4">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm mb-2">Или позвоните сами прямо сейчас</p>
            <a
              href="tel:+79214219381"
              className="text-2xl font-bold text-sky-500 hover:text-sky-600 transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              +7 (921) 421-93-81
            </a>
            <p className="text-slate-400 text-xs mt-1">Бесплатно по России · пн–сб 9:00–20:00</p>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/projects/3fbcc3c5-cfcd-4afe-83da-d6c2d6849c1d/bucket/3372afea-6e5d-4984-b552-cf55e81cbf96.png" alt="КомандаКлимата" className="h-8 w-auto" />
            <span className="font-bold text-white text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>КомандаКлимата</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 · Продажа и монтаж кондиционеров</p>
        </div>
      </footer>
    </div>
  );
}