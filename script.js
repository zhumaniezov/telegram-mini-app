// Получаем данные пользователя из Telegram WebApp
const tg = window.Telegram.WebApp;

// Если пользователь авторизован, показываем его имя
if (tg.initDataUnsafe?.user) {
  const user = tg.initDataUnsafe.user;
  document.getElementById('userName').textContent = user.first_name || 'Гость';
}

// Обработка кнопки входа
document.getElementById('startBtn')?.addEventListener('click', () => {
  window.location.href = 'main.html';
});

// Динамическое приветствие (утро/день/вечер)
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = 'Добрый день';
  if (hour < 12) greeting = 'Доброе утро';
  else if (hour >= 18) greeting = 'Добрый вечер';
  
  const userName = tg.initDataUnsafe?.user?.first_name || 'Гость';
  document.getElementById('greeting').textContent = `${greeting}, ${userName}!`;
}

// Если мы на главном экране, обновляем приветствие
if (document.getElementById('greeting')) {
  updateGreeting();
}
