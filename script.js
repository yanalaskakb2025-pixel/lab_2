document.addEventListener('DOMContentLoaded', () => {
  const VARIANT_ID = 15; 

  function initSystemInfo() {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`
    };

    localStorage.setItem('vanilla_system_info', JSON.stringify(info));

    const savedInfo = JSON.parse(localStorage.getItem('vanilla_system_info'));

    const infoBox = document.getElementById('system-info-box');
    if (infoBox && savedInfo) {
      infoBox.innerHTML = `
        <p><strong>Системна інформація користувача (з localStorage):</strong></p>
        <p><strong>User Agent:</strong> ${savedInfo.userAgent}</p>
        <p><strong>Платформа:</strong> ${savedInfo.platform} | <strong>Мова:</strong> ${savedInfo.language} | <strong>Роздільна здатність:</strong> ${savedInfo.screenResolution}</p>
      `;
    }
  }

  function loadReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    const ukrainianTexts = [
      { title: "Чудовий фахівець!", body: "Виявила високий рівень знань у кібербезпеці та відповідальний підхід до завдань." },
      { title: "Рекомендую до співпраці", body: "Чудово працює в команді, швидко засвоює нові технології та вирішує складні задачі." },
      { title: "Відмінна робота!", body: "Проявила себе як ініціативний розробник з чудовими аналітичними навичками." },
      { title: "Професійний підхід", body: "Якісно виконані завдання з тестування та захисту даних. Дуже задоволені співпрацею." },
      { title: "Висока відповідальність", body: "Завжди дотримується дедлайнів та демонструє високий рівень самодисципліни." }
    ];

    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_ID}/comments`)
      .then(response => {
        if (!response.ok) throw new Error('Помилка завантаження даних');
        return response.json();
      })
      .then(comments => {
        if (!reviewsContainer) return;
        reviewsContainer.innerHTML = '';
        comments.forEach((comment, index) => {
          const textItem = ukrainianTexts[index % ukrainianTexts.length];
          const card = document.createElement('div');
          card.className = 'review-card';
          card.style.cssText = 'padding: 12px; margin-bottom: 12px; border: 1px solid #475569; border-radius: 8px; background: rgba(30, 41, 59, 0.5);';
          card.innerHTML = `
            <h4 style="margin: 0 0 6px 0; color: #c084fc;">
              ${textItem.title} <span style="font-size: 12px; color: #94a3b8; font-weight: normal;">(${comment.email})</span>
            </h4>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">${textItem.body}</p>
          `;
          reviewsContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Помилка при отриманні коментарів:', error);
        if (reviewsContainer) {
          reviewsContainer.innerHTML = '<p>Не вдалося завантажити відгуки.</p>';
        }
      });
  }
  function initModal() {
    const modal = document.getElementById('contact-modal');
    const openBtn = document.getElementById('open-modal-btn');
    const closeBtn = document.getElementById('close-modal-btn');
    const cancelBtn = document.getElementById('cancel-btn');

    if (!modal) return;

    const openModal = () => { modal.style.display = 'flex'; };
    const closeModal = () => { modal.style.display = 'none'; };

    // Таймер відкриття через 1 хвилину (60000 мс)
    setTimeout(openModal, 60000);

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
  }

  function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const currentHour = new Date().getHours();

    let isDark = currentHour < 7 || currentHour >= 21;

    function applyTheme() {
      if (isDark) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        if (themeBtn) themeBtn.textContent = '☀️ Денна тема';
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        if (themeBtn) themeBtn.textContent = '🌙 Нічна тема';
      }
    }

    applyTheme();

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        isDark = !isDark;
        applyTheme();
      });
    }
  }

  initSystemInfo();
  loadReviews();
  initModal();
  initThemeToggle();
});