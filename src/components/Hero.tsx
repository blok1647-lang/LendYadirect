import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface StatCardProps {
  targetValue: number;
  suffix: string;
  label: string;
  delay: number;
  isNegative?: boolean;
}

function StatCard({ targetValue, suffix, label, delay, isNegative = false }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const timer = setTimeout(() => {
      setHasAnimated(true);
      const duration = 1400; // длительность анимации в мс
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [targetValue, delay, hasAnimated]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#1A62FF]/10 shadow-lg shadow-black/5"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (delay + 200) / 1000 }}
        className="text-[56px] leading-none font-bold text-[#1A62FF] mb-3"
      >
        {isNegative && '-'}
        {count}
        {suffix}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: (delay + 300) / 1000,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-[17px] text-[#0E0E12]/70"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const stats = [
    { targetValue: 200, suffix: '+', label: 'Запущенных кампаний', delay: 0 },
    { targetValue: 5, suffix: ' лет', label: 'Опыта в контекстной рекламе', delay: 150 },
    { targetValue: 40, suffix: '%', label: 'Средняя экономия бюджета', delay: 300, isNegative: true }
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A62FF]/5 via-white to-[#3A8BFF]/5"></div>
      <div className="absolute top-20 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1A62FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#3A8BFF]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-[900px] mx-auto">
          {/* Заголовок */}
          <h1 className="mb-4 sm:mb-6 bg-gradient-to-r from-[#0E0E12] to-[#0E0E12]/80 bg-clip-text text-transparent text-[2rem] sm:text-[3.5rem] leading-tight sm:leading-[1.1]">
            Профессиональная настройка Яндекс.Директа под ключ
          </h1>

          {/* Подзаголовок */}
          <p className="mb-8 sm:mb-10 text-[#0E0E12]/70 max-w-[700px] mx-auto text-base sm:text-lg leading-relaxed">
            Настройка рекламных кампаний, оптимизация, аналитика и рост прибыли. 
            Работаю прозрачно, быстро и с гарантией результата.
          </p>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-[#1A62FF] to-[#3A8BFF] text-white shadow-xl shadow-[#1A62FF]/30 hover:shadow-2xl hover:shadow-[#1A62FF]/40 transition-all duration-300 active:scale-95 sm:hover:scale-105 font-semibold">
              Заказать настройку
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white border-2 border-[#1A62FF] text-[#1A62FF] hover:bg-[#1A62FF]/5 transition-all duration-300 active:scale-95 sm:hover:scale-105 font-semibold">
              Получить консультацию
            </button>
          </div>

          {/* Статистика/доверие с анимацией */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                targetValue={stat.targetValue}
                suffix={stat.suffix}
                label={stat.label}
                delay={stat.delay}
                isNegative={stat.isNegative}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}