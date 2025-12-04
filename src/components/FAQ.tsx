import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'Сколько стоит настройка?',
      answer: 'Стоимость зависит от масштаба проекта и сложности ниши. Базовая настройка начинается от 25 000 ₽. Комплексное ведение рекламы — от 15% от рекламного бюджета. Точную стоимость озвучу после анализа вашего проекта.'
    },
    {
      question: 'Какие гарантии вы даёте?',
      answer: 'Я гарантирую профессиональную настройку всех элементов кампании согласно лучшим практикам Яндекс.Директа. Если в течение первого месяца результаты не удовлетворят вас, я продолжу оптимизацию бесплатно до достижения целевых показателей.'
    },
    {
      question: 'Когда я увижу результат?',
      answer: 'Первые заявки начинают приходить уже в первые дни после запуска. Оптимальные показатели кампания достигает через 2-4 недели работы, когда накапливается достаточно данных для точной оптимизации.'
    },
    {
      question: 'Вы работаете с нишами любой сложности?',
      answer: 'Да, за 5 лет работы я настраивал кампании для самых разных ниш: от e-commerce до B2B-сервисов и узкоспециализированных услуг. Сложные ниши — это интересный вызов, который я с удовольствием принимаю.'
    },
    {
      question: 'Как проходит процесс работы?',
      answer: 'Сначала мы обсуждаем ваши цели и бюджет. Затем я провожу аудит (если реклама уже есть) или анализ ниши. Далее настраиваю кампании, согласовываю с вами и запускаю. После запуска еженедельно предоставляю отчёты и оптимизирую показатели.'
    },
    {
      question: 'Нужен ли большой бюджет для старта?',
      answer: 'Не обязательно. Минимальный бюджет зависит от ниши и конкуренции, но можно начать уже от 30 000 ₽/месяц на рекламу. Я помогу определить оптимальный бюджет для ваших целей и настрою кампанию максимально эффективно.'
    }
  ];

  const leftColumn = faqItems.slice(0, 3);
  const rightColumn = faqItems.slice(3, 6);

  const FAQItem = ({ item, index, globalIndex }: { item: typeof faqItems[0]; index: number; globalIndex: number }) => {
    const isOpen = openIndex === globalIndex;

    return (
      <div
        className="mb-4 rounded-2xl bg-white border border-[#1A62FF]/10 shadow-lg shadow-black/5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#1A62FF]/10"
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
          className="w-full p-6 flex items-center justify-between text-left group"
        >
          <h3 className="pr-4 group-hover:text-[#1A62FF] transition-colors">
            {item.question}
          </h3>
          <ChevronDown
            className={`w-6 h-6 text-[#1A62FF] flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-0">
            <p className="text-[#0E0E12]/70 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-[#1A62FF]/5 to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-4 text-[2rem] sm:text-[2.5rem]">Часто задаваемые вопросы</h2>
          <p className="text-[#0E0E12]/70 max-w-[600px] mx-auto text-base sm:text-lg">
            Ответы на популярные вопросы о настройке Яндекс.Директа
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Левая колонка */}
          <div>
            {leftColumn.map((item, index) => (
              <FAQItem key={index} item={item} index={index} globalIndex={index} />
            ))}
          </div>

          {/* Правая колонка */}
          <div>
            {rightColumn.map((item, index) => (
              <FAQItem key={index} item={item} index={index} globalIndex={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}