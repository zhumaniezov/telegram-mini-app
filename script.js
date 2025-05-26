// Проверка среды выполнения
if (!window.Telegram?.WebApp) {
  document.body.innerHTML = `
    <div class="container error-container">
      <h1>Необходим Telegram</h1>
      <p>Пожалуйста, откройте это приложение в Telegram</p>
      <button onclick="window.location.href='https://t.me/' + window.location.hostname" class="btn">
        Открыть в Telegram
      </button>
    </div>
  `;
  throw new Error('Telegram WebApp not detected');
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', async () => {
  const tg = window.Telegram.WebApp;
  
  // Показать индикатор загрузки
  document.getElementById('loadingOverlay').style.display = 'flex';
  
  try {
    // Инициализация темы
    initTheme(tg);
    
    // Проверка аутентификации
    await verifyAuth(tg);
    
    // Настройка кнопки
    setupMainButton(tg);
    
  } catch (error) {
    console.error('Initialization error:', error);
    showError('Ошибка инициализации');
  } finally {
    // Скрыть индикатор загрузки
    document.getElementById('loadingOverlay').style.display = 'none';
  }
});

// Инициализация темы
function initTheme(tg) {
  // Применяем тему из Telegram
  const theme = tg.themeParams || {};
  applyTheme(theme);
  
  // Слушаем изменения темы
  tg.onEvent('themeChanged', () => {
    applyTheme(tg.themeParams);
  });
}

// Применение темы
function applyTheme(theme) {
  const isDark = theme.bg_color ? isColorDark(theme.bg_color) : true;
  document.body.className = isDark ? 'start-screen dark-theme' : 'start-screen light-theme';
  
  // Обновляем цвета в соответствии с темой
  const root = document.documentElement;
  if (theme.text_color) {
    root.style.setProperty('--text-primary', theme.text_color);
  }
  if (theme.bg_color) {
    root.style.setProperty('--bg-primary', theme.bg_color);
  }
}

// Проверка темного цвета
function isColorDark(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}

// Проверка аутентификации
async function verifyAuth(tg) {
  if (!tg.initDataUnsafe?.user) {
    console.warn('User not authenticated');
    return;
  }
  
  // В реальном приложении здесь должна быть проверка подписи
  // await verifyTelegramAuth(tg.initData);
  
  const user = tg.initDataUnsafe.user;
  const userName = user.first_name || 'Гость';
  document.getElementById('userName').textContent = userName;
}

// Настройка главной кнопки
function setupMainButton(tg) {
  const startBtn = document.getElementById('startBtn');
  const btnText = document.getElementById('btnText');
  const btnLoader = document.getElementById('btnLoader');
  
  startBtn.addEventListener('click', async () => {
    // Анимация нажатия
    startBtn.classList.add('btn-pressed');
    btnText.style.opacity = '0';
    btnLoader.style.display = 'block';
    
    try {
      // Имитация загрузки
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Переход на главный экран
      window.location.href = 'main.html';
      
    } catch (error) {
      console.error('Navigation error:', error);
      startBtn.classList.remove('btn-pressed');
      btnText.style.opacity = '1';
      btnLoader.style.display = 'none';
    }
  });
}

// Показать ошибку
function showError(message) {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <div class="error-message">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
      <h2>Ошибка</h2>
      <p>${message}</p>
      <button onclick="window.location.reload()" class="btn">Попробовать снова</button>
    </div>
  `;
}
