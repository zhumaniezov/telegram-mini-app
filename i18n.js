const translations = {
  ru: {
    greeting: 'Добрый день',
    salary: '💰 Зарплата',
    vacation: '🏖️ Отпуск',
    lunch: '🍕 Обед',
    chat: '💬 Чат',
    enterAs: 'Войти как',
    payslipTitle: '💰 Расчетный листок',
    selectYear: 'Выберите год',
    selectMonth: 'Выберите месяц',
    show: 'Показать',
    downloadPdf: 'Скачать PDF',
    sendEmail: 'Отправить на email',
    confirmLunch: 'Подтвердить обед',
    back: '← Назад',
    vacationTitle: '🏖️ Ваш отпуск',
    planVacation: 'Запланировать отпуск',
    sendRequest: 'Отправить запрос',
    upcomingVacation: 'Ближайший отпуск',
    lunchMenu: '🍽️ Обеденное меню',
    yourChoice: 'Ваш выбор:',
  },
  uz: {
    greeting: 'Xayrli kun',
    salary: '💰 Maosh',
    vacation: '🏖️ Ta\'til',
    lunch: '🍕 Tushlik',
    chat: '💬 Chat',
    enterAs: 'Kirish',
    payslipTitle: '💰 Hisob varaqasi',
    selectYear: 'Yilni tanlang',
    selectMonth: 'Oyni tanlang',
    show: 'Ko‘rsatish',
    downloadPdf: 'PDF yuklab olish',
    sendEmail: 'Emailga yuborish',
    confirmLunch: 'Tushlikni tasdiqlash',
    back: '← Orqaga',
    vacationTitle: '🏖️ Sizning ta\'tilingiz',
    planVacation: 'Ta\'tilni rejalashtiring',
    sendRequest: 'So‘rov yuborish',
    upcomingVacation: 'Yaqqin ta\'til',
    lunchMenu: '🍽️ Tushlik menyusi',
    yourChoice: 'Sizning tanlovingiz:',
  }
};

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Обновление текста на кнопке входа (особый случай)
  const startBtn = document.getElementById('startBtn');
  const userNameEl = document.getElementById('userName');
  if (startBtn && userNameEl) {
    startBtn.innerHTML = `${translations[lang].enterAs} <span id="userName">${userNameEl.textContent}</span>`;
  }
}

// Автоматически применяем язык при загрузке
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'ru';
  applyTranslations(lang);
});
