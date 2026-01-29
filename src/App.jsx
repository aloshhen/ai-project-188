import { Play, Image as ImageIcon, Video, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-800/50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Video className="w-8 h-8 text-violet-500" />
            <span className="text-2xl font-bold text-white">MediaHub</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#video" className="text-slate-300 hover:text-violet-400 transition-colors">Видео</a>
            <a href="#gallery" className="text-slate-300 hover:text-violet-400 transition-colors">Галерея</a>
          </div>
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105">
            Контакты
          </button>
        </nav>
      </header>

      {/* HERO with Vimeo Video */}
      <section id="video" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              Наш <span className="text-violet-500">Контент</span>
            </h1>
            <p className="text-2xl md:text-3xl text-violet-400 mb-8 font-bold">
              Профессиональное видео производство
            </p>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Смотрите наши последние работы и проекты в высоком качестве
            </p>
          </motion.div>

          {/* Vimeo Video Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
              <div className="aspect-video">
                <iframe 
                  title="vimeo-player" 
                  src="https://player.vimeo.com/video/1150530803?h=db56b5ddc7" 
                  className="w-full h-full"
                  frameBorder="0" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY Section with User Media */}
      <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-transparent to-violet-950/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-6">
              Медиа <span className="text-violet-500">Галерея</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Коллекция наших визуальных материалов и креативных работ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* User Photo 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800/50 hover:border-violet-600/50 transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-violet-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <ImageIcon className="w-8 h-8 text-violet-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Креативный Дизайн</h3>
              <div className="relative rounded-xl overflow-hidden mb-4 bg-slate-800/50">
                <img 
                  src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.svg?" 
                  alt="Креативный дизайн"
                  className="w-full h-64 object-contain p-4"
                />
              </div>
              <p className="text-slate-400 leading-relaxed">
                Современные визуальные решения для вашего бренда
              </p>
            </motion.div>

            {/* User Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800/50 hover:border-violet-600/50 transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-violet-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Play className="w-8 h-8 text-violet-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Анимация</h3>
              <div className="relative rounded-xl overflow-hidden mb-4 bg-slate-800/50 flex items-center justify-center h-64">
                <div className="text-slate-500 text-center p-8">
                  <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Lottie анимация</p>
                  <a 
                    href="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-lottie-2.lottie?" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 text-sm underline mt-2 inline-block"
                  >
                    Открыть анимацию
                  </a>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Динамичные анимации для привлечения внимания
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-white text-center mb-16">
            Наши <span className="text-violet-500">Преимущества</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800/50 hover:border-violet-600/50 transition-all transform hover:scale-105"
            >
              <div className="bg-violet-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-violet-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">HD Качество</h3>
              <p className="text-slate-400 leading-relaxed">
                Профессиональная съемка в высоком разрешении с использованием современного оборудования
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800/50 hover:border-violet-600/50 transition-all transform hover:scale-105"
            >
              <div className="bg-violet-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <ImageIcon className="w-8 h-8 text-violet-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Креатив</h3>
              <p className="text-slate-400 leading-relaxed">
                Уникальные визуальные решения и нестандартный подход к каждому проекту
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800/50 hover:border-violet-600/50 transition-all transform hover:scale-105"
            >
              <div className="bg-violet-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Play className="w-8 h-8 text-violet-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Быстрая Работа</h3>
              <p className="text-slate-400 leading-relaxed">
                Оперативное выполнение заказов без потери качества конечного продукта
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-white mb-6">
              Готовы к <span className="text-violet-500">Сотрудничеству?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-violet-600/50 flex items-center justify-center gap-2 mx-auto">
              Связаться с нами
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Video className="w-6 h-6 text-violet-500" />
              <span className="text-xl font-bold text-white">MediaHub</span>
            </div>
            <div className="text-slate-500 text-sm">
              © 2024 MediaHub. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App