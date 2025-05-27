const tg = window.Telegram.WebApp;
tg.expand();

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return currentLang === 'uz' ? 'Xayrli tong' : 'Доброе утро';
  if (hour < 18) return currentLang === 'uz' ? 'Hayrli kun' : 'Добрый день';
  return currentLang === 'uz' ? 'Hayrli kech' : 'Добрый вечер';
}

function initUser() {
  if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    const userName = user.first_name || user.username || 'Гость';
    document.querySelectorAll('#userName').forEach(el => el.textContent = userName);
    if (document.getElementById('greeting')) {
      document.getElementById('greeting').textContent = `${getTimeOfDay()}, ${userName}!`;
    }
  }
}

function initStartButton() {
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      window.location.href = 'main.html';
    });
  }
}

function initMenuButtons() {
  const buttons = document.querySelectorAll('.menu-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const text = this.dataset.i18n;
      if (text === 'salaryTitle') {
        window.location.href = 'salary.html';
      } else if (text === 'vacationTitle') {
        window.location.href = 'vacation.html';
      } else if (text === 'lunchTitle') {
        window.location.href = 'lunch.html';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initUser();
  initStartButton();
  initMenuButtons();
  if (typeof translatePage === 'function') translatePage();
});
