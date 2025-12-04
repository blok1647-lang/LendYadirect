import { Zap, CheckCircle, MessageCircle } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Запуск за 1 день',
      description: 'Мгновенная настройка и запуск кампании в работу.',
      gradient: 'from-[#1A62FF]/10 to-[#3A8BFF]/10'
    },
    {
      icon: CheckCircle,
      title: 'Гарантия результата',
      description: 'Оптимизация бюджета и рост целевых заявок.',
      gradient: 'from-[#3A8BFF]/10 to-[#1A62FF]/10'
    },
    {
      icon: MessageCircle,
      title: 'Поддержка и отчётность',
      description: 'Регулярные отчёты, прозрачная аналитика.',
      gradient: 'from-[#1A62FF]/10 to-[#3A8BFF]/10'
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#1A62FF]/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-4 text-[2rem] sm:text-[2.5rem]">Почему выбирают меня</h2>
          <p className="text-[#0E0E12]/70 max-w-[600px] mx-auto text-base sm:text-lg">
            Индивидуальный подход к каждому проекту и проверенные методы работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#1A62FF]/10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#1A62FF]/10 transition-all duration-300 active:scale-98 sm:hover:-translate-y-2"
              >
                {/* Иконка */}
                <div className={`mb-4 sm:mb-6 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1A62FF]" strokeWidth={2} />
                </div>

                {/* Заголовок */}
                <h3 className="mb-3 text-[#0E0E12] text-xl sm:text-[1.5rem]">
                  {benefit.title}
                </h3>

                {/* Описание */}
                <p className="text-[#0E0E12]/60 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}