import { ArrowRight, Target, TrendingUp, BarChart3, Settings } from 'lucide-react';

export function PromoBlock() {
  const features = [
    { icon: Target, text: 'Точная настройка таргетинга' },
    { icon: TrendingUp, text: 'Оптимизация ставок и ROI' },
    { icon: BarChart3, text: 'Аналитика и метрики' },
    { icon: Settings, text: 'Техническая поддержка 24/7' }
  ];

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#1A62FF] via-[#2A72FF] to-[#3A8BFF] p-8 sm:p-12 md:p-16 shadow-2xl shadow-[#1A62FF]/20">
          {/* Декоративные элементы */}
          <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-[800px]">
            {/* Заголовок */}
            <h2 className="mb-4 sm:mb-6 text-white text-[1.75rem] sm:text-[2.5rem]">
              Комплексное ведение Яндекс.Директа
            </h2>

            {/* Описание */}
            <p className="mb-8 sm:mb-10 text-white/90 text-lg sm:text-xl leading-relaxed">
              Полное управление рекламой, оптимизация, снижение CPC, увеличение конверсий. 
              Подходит для бизнеса любого масштаба.
            </p>

            {/* Особенности */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-white text-sm sm:text-base">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Кнопка */}
            <button className="group px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white text-[#1A62FF] hover:bg-white/95 transition-all duration-300 active:scale-95 sm:hover:scale-105 shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center font-semibold">
              <span>Узнать стоимость</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}