import { Mail, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="border-t border-[#1A62FF]/10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Левая часть - Лого и описание */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A62FF] to-[#3A8BFF] flex items-center justify-center shadow-lg shadow-[#1A62FF]/20">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-[#0E0E12]">AntonDirect</span>
            </div>
            <p className="text-[#0E0E12]/60 leading-relaxed text-sm sm:text-base">
              Профессиональная настройка Яндекс.Директа.<br />
              Работаю на результат с гарантией качества.
            </p>
          </div>

          {/* Правая часть - Контакты */}
          <div className="md:text-right space-y-4">
            <div className="space-y-3">
              <a
                href="mailto:anton@antondirect.ru"
                className="inline-flex items-center gap-2 text-[#0E0E12]/70 hover:text-[#1A62FF] transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">anton@antondirect.ru</span>
              </a>
              <br />
              <a
                href="https://t.me/antondirect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0E0E12]/70 hover:text-[#1A62FF] transition-colors group"
              >
                <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">Telegram</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="#"
                className="text-xs sm:text-sm text-[#0E0E12]/50 hover:text-[#1A62FF] transition-colors"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#1A62FF]/10 text-center">
          <p className="text-xs sm:text-sm text-[#0E0E12]/50">
            © {new Date().getFullYear()} AntonDirect. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}