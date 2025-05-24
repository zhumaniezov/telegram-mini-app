// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// Функция для определения времени суток
function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Доброе утро';
  if (hour < 18) return 'Добрый день';
  return 'Добрый вечер';
}

// Получаем данные пользователя
function initUser() {
  if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    const userName = user.first_name || user.username || 'Гость';
    
    document.querySelectorAll('#userName').forEach(el => {
      el.textContent = userName;
    });
    
    if (document.getElementById('greeting')) {
      document.getElementById('greeting').textContent = 
        `${getTimeOfDay()}, ${userName}!`;
    }
  }
}

// Обработка кнопки входа
function initStartButton() {
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      window.location.href = 'main.html';
    });
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  initUser();
  initStartButton();
});
