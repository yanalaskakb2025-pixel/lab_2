import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-all text-sm font-medium"
      >
        💬 Зворотний зв'язок
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-slate-900 text-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-purple-500/30 relative animate-in fade-in zoom-in duration-300">
        
        {/* Хрестик для закриття у кутку */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-4 text-purple-400">Форма зворотного зв'язку</h3>
        <p className="text-xs text-slate-400 mb-6">
          Будь ласка, заповніть форму. Дані будуть надіслані через Formspree.
        </p>

        {/* Реалізація форми: тег <form> з action та method="POST" */}
        <form
          action="https://formspree.io/f/mvkkaydy"
          method="POST"
          className="flex flex-col gap-4"
        >
          {/* Поле 1: Ім'я */}
          <div>
            <label className="block text-xs text-slate-300 mb-1">Ім'я:</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ваше ім'я"
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 text-sm text-white"
            />
          </div>

          {/* Поле 2: Email */}
          <div>
            <label className="block text-xs text-slate-300 mb-1">Email:</label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 text-sm text-white"
            />
          </div>

          {/* Поле 3: Телефон */}
          <div>
            <label className="block text-xs text-slate-300 mb-1">Телефон:</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+380..."
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 text-sm text-white"
            />
          </div>

          {/* Поле 4: Повідомлення */}
          <div>
            <label className="block text-xs text-slate-300 mb-1">Повідомлення:</label>
            <textarea
              name="message"
              rows="3"
              required
              placeholder="Введіть ваш текст..."
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-purple-500 text-sm text-white resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            {/* 3. Кнопка "Закрити" в модальному вікні, щоб встановити isOpen назад в false */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-sm rounded-lg transition-colors"
            >
              Закрити
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-sm font-semibold rounded-lg transition-colors shadow-lg"
            >
              Надіслати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;