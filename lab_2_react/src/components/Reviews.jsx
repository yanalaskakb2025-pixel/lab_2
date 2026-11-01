import React, { useState, useEffect } from 'react';

const VARIANT_ID = 15;

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const ukrainianContent = [
    {
      name: "SoftServe Academy — Тімлід розробки",
      body: "Яна проявила себе як надзвичайно мотивований фахівець. Чудово володіє Python та C#, має високий рівень знань у сфері кібербезпеки."
    },
    {
      name: "AWS Cloud Security Team",
      body: "Відмінний рівень фундаментальних знань з хмарної безпеки та аналізу систем. Демонструє високу відповідальність у кожному проєкті."
    },
    {
      name: "Кафедра кібербезпеки НУ «ЛП»",
      body: "Один із найактивніших студентів курсу. Чудово поєднує аналітичний склад розуму, спортивну дисципліну та самоорганізацію."
    },
    {
      name: "CyberSec Solutions — Senior Auditor",
      body: "Швидко орієнтується в оцінці вразливостей та тестуванні на проникнення. Рекомендую до співпраці як перспективного фахівця."
    },
    {
      name: "Project Manager — Tech Lab",
      body: "Дуже відповідальна, завжди дотримується дедлайнів. Прекрасні навички командної роботи та вирішення складних технічних завдань."
    }
  ];

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_ID}/comments`)
      .then((res) => res.json())
      .then((data) => {
        const translatedComments = data.map((item, index) => ({
          ...item,
          name: ukrainianContent[index % ukrainianContent.length].name,
          body: ukrainianContent[index % ukrainianContent.length].body
        }));
        
        setComments(translatedComments);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Помилка при отриманні коментарів:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4 text-slate-400">Завантаження відгуків...</p>;

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Відгуки попередніх роботодавців</h2>
      <div className="flex flex-col gap-4">
        {/* 3. Відрендерено коментарі за допомогою методу .map() */}
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm shadow-md"
          >
            <h4 className="font-semibold text-purple-400">
              {comment.name} <span className="text-xs text-slate-400 font-normal">({comment.email})</span>
            </h4>
            <p className="mt-2 text-sm opacity-90 leading-relaxed">{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;