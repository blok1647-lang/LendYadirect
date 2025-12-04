import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, TrendingUp, Target, DollarSign, Users, Clock, BarChart3 } from 'lucide-react';

interface CaseData {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  gradient: string;
  metrics: {
    label: string;
    value: string;
    icon: any;
    change?: string;
  }[];
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
}

export function Cases() {
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);

  const cases: CaseData[] = [
    {
      id: 1,
      title: 'Интернет-магазин электроники',
      category: 'E-commerce',
      shortDescription: 'Увеличение продаж на 340% за 3 месяца с сохранением CPA',
      gradient: 'from-[#1A62FF]/10 to-[#3A8BFF]/10',
      metrics: [
        { label: 'CTR', value: '8.4%', icon: Target, change: '+180%' },
        { label: 'CPL', value: '320₽', icon: DollarSign, change: '-45%' },
        { label: 'Конверсия', value: '4.2%', icon: TrendingUp, change: '+210%' },
        { label: 'ROI', value: '480%', icon: BarChart3, change: '+340%' }
      ],
      fullDescription: 'Крупный интернет-магазин электроники с большим каталогом и высокой конкуренцией в нише.',
      challenge: 'Высокая стоимость клика, низкая конверсия, нецелевой трафик. Предыдущая кампания приносила убытки.',
      solution: 'Полная реструктуризация кампаний, сегментация по категориям товаров, внедрение динамического ремаркетинга, оптимизация ставок на основе данных Метрики.',
      results: [
        'Снижение CPL с 580₽ до 320₽',
        'Рост конверсии с 1.3% до 4.2%',
        'Увеличение CTR с 3% до 8.4%',
        'ROI вырос с 140% до 480%'
      ]
    },
    {
      id: 2,
      title: 'B2B SaaS платформа',
      category: 'B2B / Tech',
      shortDescription: 'Привлечение 120+ квалифицированных лидов при CPL 1200₽',
      gradient: 'from-[#3A8BFF]/10 to-[#1A62FF]/10',
      metrics: [
        { label: 'Лиды/месяц', value: '120+', icon: Users, change: '+290%' },
        { label: 'CPL', value: '1200₽', icon: DollarSign, change: '-38%' },
        { label: 'Качество лидов', value: '87%', icon: Target, change: '+52%' },
        { label: 'Скорость окупаемости', value: '18 дней', icon: Clock, change: '-60%' }
      ],
      fullDescription: 'SaaS платформа для автоматизации бизнес-процессов с чеком от 50 000₽/месяц.',
      challenge: 'Узкая целевая аудитория, высокая стоимость привлечения, длинный цикл сделки. Необходимы только качественные лиды.',
      solution: 'Настройка точного таргетинга по должностям и отраслям, создание отдельных кампаний для каждого сегмента, использование аудиторий look-alike, A/B тестирование посадочных страниц.',
      results: [
        'Привлечено 120+ квалифицированных лидов в месяц',
        'CPL снижен с 1940₽ до 1200₽',
        'Качество лидов выросло до 87%',
        'Сокращение цикла окупаемости с 45 до 18 дней'
      ]
    },
    {
      id: 3,
      title: 'Сеть медицинских центров',
      category: 'Healthcare',
      shortDescription: 'Экономия 42% бюджета при росте записей на 165%',
      gradient: 'from-[#1A62FF]/10 to-[#3A8BFF]/10',
      metrics: [
        { label: 'Записи', value: '+165%', icon: Users, change: '+165%' },
        { label: 'Экономия', value: '42%', icon: DollarSign, change: '-42%' },
        { label: 'CPA', value: '580₽', icon: Target, change: '-51%' },
        { label: 'CTR', value: '11.2%', icon: TrendingUp, change: '+220%' }
      ],
      fullDescription: 'Сеть из 8 медицинских центров с широким спектром услуг в Москве и области.',
      challenge: 'Неэффективное распределение бюджета, низкое качество трафика, высокий процент отказов. Много нецелевых звонков.',
      solution: 'Геосегментация кампаний по районам, раздельные кампании для каждого направления медицины, настройка коллтрекинга, оптимизация по звонкам, корректировки по времени суток.',
      results: [
        'Рост целевых записей на 165%',
        'Снижение CPA с 1180₽ до 580₽',
        'Экономия рекламного бюджета на 42%',
        'CTR вырос с 3.5% до 11.2%'
      ]
    }
  ];

  return (
    <section id="reviews" className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#1A62FF]/5 to-white overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute top-20 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1A62FF]/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#3A8BFF]/8 rounded-full blur-[120px]"></div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-[#0E0E12] text-[2rem] sm:text-[2.5rem]">Реальные кейсы и результаты</h2>
            <p className="text-[#0E0E12]/60 text-base sm:text-lg max-w-[700px] mx-auto">
              Примеры успешных проектов с измеримыми результатами и ростом ключевых показателей
            </p>
          </motion.div>
        </div>

        {/* Сетка кейсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedCase(caseItem)}
              className="group relative cursor-pointer"
            >
              {/* Свечение по контуру */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1A62FF] to-[#3A8BFF] rounded-3xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-400"></div>

              {/* Карточка */}
              <div className="relative h-full p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#1A62FF]/15 shadow-xl shadow-black/5 group-hover:shadow-2xl group-hover:shadow-[#1A62FF]/20 transition-all duration-400 overflow-hidden active:scale-98">
                {/* Градиентный фон карточки */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-br ${caseItem.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-400`}
                ></div>

                {/* Зеркальный блик */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                  <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-45"></div>
                </div>

                {/* Категория */}
                <div className="relative mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#1A62FF]/10 text-[#1A62FF] border border-[#1A62FF]/20">
                    {caseItem.category}
                  </span>
                </div>

                {/* Заголовок */}
                <h3 className="relative mb-3 text-[#0E0E12] group-hover:text-[#1A62FF] transition-colors duration-300 text-xl sm:text-[1.5rem]">
                  {caseItem.title}
                </h3>

                {/* Краткое описание */}
                <p className="relative mb-6 text-[#0E0E12]/70 text-sm leading-relaxed">
                  {caseItem.shortDescription}
                </p>

                {/* Метрики превью */}
                <div className="relative grid grid-cols-2 gap-3">
                  {caseItem.metrics.slice(0, 2).map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-[#1A62FF]/10 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-4 h-4 text-[#1A62FF]" />
                          <span className="text-xs text-[#0E0E12]/60">{metric.label}</span>
                        </div>
                        <div className="font-bold text-[#0E0E12] text-sm sm:text-base">{metric.value}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Кнопка "Подробнее" */}
                <div className="relative mt-6 pt-6 border-t border-[#1A62FF]/10">
                  <span className="text-sm text-[#1A62FF] group-hover:text-[#0E0E12] transition-colors flex items-center gap-2">
                    Смотреть кейс
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0E0E12]/60 backdrop-blur-md"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#1A62FF]/20 shadow-2xl"
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setSelectedCase(null)}
                className="sticky top-4 right-4 float-right z-10 w-10 h-10 rounded-full bg-[#1A62FF]/10 hover:bg-[#1A62FF]/20 backdrop-blur-sm border border-[#1A62FF]/20 flex items-center justify-center transition-all duration-300 active:scale-95 sm:hover:scale-110"
              >
                <X className="w-5 h-5 text-[#1A62FF]" />
              </button>

              {/* Градиентный хедер */}
              <div 
                className={`relative h-32 sm:h-48 rounded-t-3xl overflow-hidden bg-gradient-to-br ${selectedCase.gradient}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/95"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#1A62FF]/20 text-[#1A62FF] border border-[#1A62FF]/30 mb-2 sm:mb-3 backdrop-blur-sm">
                    {selectedCase.category}
                  </span>
                  <h2 className="text-[#0E0E12] text-[1.5rem] sm:text-[2.5rem]">{selectedCase.title}</h2>
                </div>
              </div>

              {/* Контент */}
              <div className="p-4 sm:p-8">
                {/* Метрики */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {selectedCase.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#1A62FF]/15 hover:border-[#1A62FF]/30 hover:shadow-lg hover:shadow-[#1A62FF]/10 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1A62FF]/10 flex items-center justify-center">
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#1A62FF]" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#0E0E12]/60">{metric.label}</span>
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-[#0E0E12] mb-1">{metric.value}</div>
                        {metric.change && (
                          <div className="text-xs text-[#1A62FF] font-semibold">{metric.change}</div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Описание проекта */}
                <div className="mb-6">
                  <h3 className="text-[#0E0E12] mb-3 text-lg sm:text-[1.5rem]">О проекте</h3>
                  <p className="text-[#0E0E12]/70 leading-relaxed text-sm sm:text-base">{selectedCase.fullDescription}</p>
                </div>

                {/* Задача */}
                <div className="mb-6 p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#1A62FF]/15 shadow-sm">
                  <h3 className="text-[#0E0E12] mb-3 text-lg sm:text-[1.5rem]">Задача</h3>
                  <p className="text-[#0E0E12]/70 leading-relaxed text-sm sm:text-base">{selectedCase.challenge}</p>
                </div>

                {/* Решение */}
                <div className="mb-6 p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#1A62FF]/15 shadow-sm">
                  <h3 className="text-[#0E0E12] mb-3 text-lg sm:text-[1.5rem]">Решение</h3>
                  <p className="text-[#0E0E12]/70 leading-relaxed text-sm sm:text-base">{selectedCase.solution}</p>
                </div>

                {/* Результаты */}
                <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#1A62FF]/10 to-[#3A8BFF]/10 border border-[#1A62FF]/20 shadow-lg shadow-[#1A62FF]/5">
                  <h3 className="text-[#0E0E12] mb-4 text-lg sm:text-[1.5rem]">Результаты</h3>
                  <ul className="space-y-3">
                    {selectedCase.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#0E0E12]/80 text-sm sm:text-base">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1A62FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-[#1A62FF]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}