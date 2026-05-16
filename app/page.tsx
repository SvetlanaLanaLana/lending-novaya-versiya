"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Определение типа фигуры",
      text: "Помогу понять, какие силуэты, длины и пропорции подходят именно вам.",
    },
    {
      title: "Определение цветотипа",
      text: "Подбор оттенков, которые делают внешность более гармоничной и выразительной.",
    },
    {
      title: "Определение типа лица",
      text: "Рекомендации по формам аксессуаров, прическам и визуальному балансу.",
    },
    {
      title: "Базовый гардероб",
      text: "Помощь в создании современного гардероба под ваш образ жизни.",
    },
  ];

  const steps = [
    "Знакомство и обсуждение запроса",
    "Анализ внешности и особенностей",
    "Определение подходящих решений",
    "Персональные рекомендации",
    "Практические советы для гардероба",
  ];

  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#0D0D0D] text-[#F5F1EB] overflow-hidden">
      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-16 border-b border-[#1A1A1A]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center w-full"
        >
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-[#8E7C6E] mb-8">
              Консультант по стилю
            </p>

            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] font-light mb-10">
              Стиль,
              <br />
              в котором
              <br />
              комфортно
              <br />
              быть собой
            </h1>

            <p className="text-[#B7B1A9] text-lg md:text-xl leading-relaxed max-w-xl mb-12">
              Персональные консультации по стилю для женщин, которые хотят
              выглядеть современно, гармонично и уверенно без сложных трендов и
              хаоса в гардеробе.
            </p>

            <button
              type="button"
              onClick={scrollToConsultation}
              className="border border-[#F5F1EB] px-8 py-5 rounded-full hover:bg-[#F5F1EB] hover:text-black transition-all duration-500"
            >
              Записаться на консультацию
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="relative h-[500px] md:h-[700px] rounded-[40px] overflow-hidden border border-[#1F1F1F] bg-[#111111]"
            >
              <Image
                src="/Sveta.jpg"
                alt="Светлана — консультант по стилю"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6 md:px-16 border-b border-[#1A1A1A]">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm text-[#8E7C6E] mb-8">
            О подходе
          </p>

          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-12">
            Спокойный современный
            <br />
            подход к стилю
          </h2>

          <p className="text-2xl text-[#B7B1A9] leading-relaxed max-w-4xl">
            Я помогаю женщинам лучше понимать особенности своей внешности,
            цветовые сочетания, формы и принципы гардероба, который действительно
            подходит именно им.
          </p>

          <p className="text-lg text-[#7D7D7D] leading-relaxed max-w-2xl mt-10">
            Для меня стиль — это не погоня за трендами, а способ чувствовать себя
            спокойнее, увереннее и гармоничнее в повседневной жизни.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6 md:px-16 border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm text-[#8E7C6E] mb-8">
            Услуги
          </p>

          <h2 className="font-display text-4xl md:text-6xl mb-20">
            Персональные консультации
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="border border-[#1F1F1F] rounded-[32px] p-10 bg-[#111111]"
              >
                <h3 className="text-3xl mb-6">{service.title}</h3>

                <p className="text-[#B7B1A9] leading-relaxed text-lg">
                  {service.text}
                </p>

                <div className="mt-10 text-[#8E7C6E] text-lg">от 3 000 ₽</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 px-6 md:px-16 border-b border-[#1A1A1A]">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm text-[#8E7C6E] mb-8">
            Как проходит работа
          </p>

          <h2 className="font-display text-4xl md:text-6xl mb-20">
            Понятный и спокойный процесс
          </h2>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-8 border-b border-[#1F1F1F] pb-8"
              >
                <span className="text-[#8E7C6E] text-xl min-w-[40px]">
                  0{index + 1}
                </span>

                <p className="text-2xl leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="consultation"
        className="py-40 px-6 md:px-16 scroll-mt-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[#8E7C6E] mb-8">
            Консультация
          </p>

          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-10">
            Стиль начинается
            <br />
            с понимания себя
          </h2>

          <p className="text-[#B7B1A9] text-xl leading-relaxed max-w-2xl mx-auto mb-16">
            Запишитесь на персональную консультацию и получите рекомендации,
            которые подойдут именно вам.
          </p>

          <form
            className="max-w-xl mx-auto space-y-6 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Спасибо! Заявка отправлена. Свяжусь с вами в ближайшее время.");
            }}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Ваше имя"
              className="w-full bg-[#111111] border border-[#1F1F1F] p-5 rounded-2xl outline-none focus:border-[#8E7C6E] transition-all text-[#F5F1EB] placeholder:text-[#6F6F6F]"
            />

            <input
              type="tel"
              name="contact"
              required
              placeholder="Телефон или Telegram"
              className="w-full bg-[#111111] border border-[#1F1F1F] p-5 rounded-2xl outline-none focus:border-[#8E7C6E] transition-all text-[#F5F1EB] placeholder:text-[#6F6F6F]"
            />

            <textarea
              name="message"
              placeholder="Ваш запрос"
              rows={4}
              className="w-full bg-[#111111] border border-[#1F1F1F] p-5 rounded-2xl outline-none focus:border-[#8E7C6E] transition-all resize-none text-[#F5F1EB] placeholder:text-[#6F6F6F]"
            />

            <button
              type="submit"
              className="w-full bg-[#F5F1EB] text-black py-5 rounded-2xl hover:bg-[#D7D0C7] transition-all duration-500 text-lg"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1A1A1A] py-10 px-6 md:px-16">
        <motion.div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-[#6F6F6F]">
          <p>© Светлана</p>

          <p>Консультант по стилю • Онлайн и офлайн</p>
        </motion.div>
      </footer>
    </main>
  );
}
