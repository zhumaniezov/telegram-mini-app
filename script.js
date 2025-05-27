// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();
tg.enableClosingConfirmation();

// Локализация
const translations = {
  ru: {
    // Общие
    'back': '← Назад',
    'guest': 'Гость',
    'loading': 'Загрузка...',
    'select': 'Выбрать',
    
    // index.html
    'login_as': 'Войти как',
    'russian': 'Русский',
    'uzbek': 'Узбекский',
    
    // main.html
    'main_title': 'Главное меню',
    'good_morning': 'Доброе утро',
    'good_afternoon': 'Добрый день',
    'good_evening': 'Добрый вечер',
    'salary': '💰 Зарплата',
    'vacation': '🏖️ Отпуск',
    'lunch': '🍕 Обед',
    'chat': '💬 Чат',
    
    // salary.html
    'payslip': '💰 Расчетный листок',
    'select_year': 'Выберите год',
    'select_month': 'Выберите месяц',
    'show': 'Показать',
    'position': 'Должность',
    'employee_id': 'Табельный номер',
    'accruals': 'Начисления',
    'base_salary': 'Оклад',
    'bonus': 'Премия',
    'overtime': 'Переработки',
    'total_accrued': 'Итого начислено',
    'deductions': 'Удержания',
    'income_tax': 'НДФЛ (12%)',
    'pension_tax': 'Пенсионный взнос (1%)',
    'union_tax': 'Профсоюзный взнос',
    'total_deductions': 'Итого удержано',
    'net_salary': 'К выплате',
    'download_pdf': 'Скачать PDF',
    'send_email': 'Отправить на email',
    
    // vacation.html
    'vacation_title': '🏖️ Ваш отпуск',
    'days_left': 'Осталось дней отпуска',
    'plan_vacation': 'Запланировать отпуск',
    'select_dates': 'Выберите даты',
    'submit_request': 'Отправить запрос',
    'next_vacation': 'Ближайший отпуск',
    
    // lunch.html
    'lunch_title': '🍽️ Обеденное меню',
    'dish_selected': 'Ваш выбор',
    'confirm_lunch': 'Подтвердить обед',
    'soup': 'Куриный суп',
    'soup_desc': 'С домашней лапшой и зеленью',
    'buckwheat': 'Гречка с грибами',
    'buckwheat_desc': 'С луковой поджаркой',
    'caesar': 'Салат Цезарь',
    'caesar_desc': 'С курицей и пармезаном',
    'tiramisu': 'Тирамису',
    'tiramisu_desc': 'Классический итальянский'
  },
  uz: {
    // Общие
    'back': '← Orqaga',
    'guest': 'Mehmon',
    'loading': 'Yuklanmoqda...',
    'select': 'Tanlang',
    
    // index.html
    'login_as': 'Kirish',
    'russian': 'Ruscha',
    'uzbek': 'Oʻzbekcha',
    
    // main.html
    'main_title': 'Asosiy menyu',
    'good_morning': 'Xayrli tong',
    'good_afternoon': 'Xayrli kun',
    'good_evening': 'Xayrli kech',
    'salary': '💰 Maosh',
    'vacation': '🏖️ Taʼtil',
    'lunch': '🍕 Tushlik',
    'chat': '💬 Chat',
    
    // salary.html
    'payslip': '💰 Hisob varagʻi',
    'select_year': 'Yilni tanlang',
    'select_month': 'Oyni tanlang',
    'show': 'Koʻrsatish',
    'position': 'Lavozim',
    'employee_id': 'Ishchi raqami',
    'accruals': 'Hisob-kitoblar',
    'base_salary': 'Asosiy ish haqi',
    'bonus': 'Bonus',
    'overtime': 'Qoʻshimcha ish',
    'total_accrued': 'Jami hisoblangan',
    'deductions': 'Ushtirmalar',
    'income_tax': 'Daromad soligʻi (12%)',
    'pension_tax': 'Pensiya badali (1%)',
    'union_tax': 'Kasaba uyushmasi badali',
    'total_deductions': 'Jami ushlangan',
    'net_salary': 'Toʻlov uchun',
    'download_pdf': 'PDF yuklab olish',
    'send_email': 'Emailga yuborish',
    
    // vacation.html
    'vacation_title': '🏖️ Taʼtilingiz',
    'days_left': 'Qolgan taʼtil kunlari',
    'plan_vacation': 'Taʼtilni rejalashtirish',
    'select_dates': 'Sanalarni tanlang',
    'submit_request': 'Soʻrov yuborish',
    'next_vacation': 'Keyingi taʼtil',
    
    // lunch.html
    'lunch_title': '🍽️ Tushlik menyusi',
    'dish_selected': 'Sizning tanlovingiz',
    'confirm_lunch': 'Tushlikni tasdiqlash',
    'soup': 'Tovuq shoʻrva',
    'soup_desc': 'Uy lagʻmoni va koʻkatlar bilan',
    'buckwheat': 'Qoʻziqorinli grechka',
    'buckwheat_desc': 'Piyoz qovurilgan bilan',
    'caesar': 'Sezar salati',
    'caesar_desc': 'Tovuq va parmezan bilan',
    'tiramisu': 'Tiramisu',
    'tiramisu_desc': 'Klassik italyan deserti'
  }
};

let currentLanguage = localStorage.getItem('appLanguage') || 'ru';
document.documentElement.lang = currentLanguage;

// Функция для определения времени суток
function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return translations[currentLanguage]['good_morning'];
  if (hour < 18) return translations[currentLanguage]['good_afternoon'];
  return translations[currentLanguage]['good_evening'];
}

// Функция перевода страницы с анимацией
async function translatePage() {
  // Анимация исчезновения
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Применяем переводы
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      el.textContent = translations[currentLanguage][key];
    }
  });
  
  // Обновляем placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLanguage][key]) {
      el.placeholder = translations[currentLanguage][key];
    }
  });
  
  // Обновляем кнопку языка
  if (document.getElementById('currentLanguage')) {
    document.getElementById('currentLanguage').textContent = 
      currentLanguage === 'ru' ? 'Русский' : 'Oʻzbekcha';
  }
  
  // Обновляем приветствие
  if (document.getElementById('timeGreeting')) {
    document.getElementById('timeGreeting').textContent = getTimeOfDay();
  }
  
  // Обновляем динамические данные
  updateDynamicContent();
  
  // Анимация появления
  document.body.style.opacity = '1';
}

// Обновление динамического контента
function updateDynamicContent() {
  // Для страницы salary.html
  if (document.getElementById('employee-position')) {
    const position = document.getElementById('employee-position').querySelector('span').textContent;
    document.getElementById('employee-position').innerHTML = 
      `${translations[currentLanguage]['position']}: <span>${position}</span>`;
  }
  
  // Для страницы lunch.html
  if (document.getElementById('current-date')) {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      locale: currentLanguage === 'ru' ? 'ru-RU' : 'uz-UZ'
    };
    document.getElementById('current-date').textContent = 
      new Date().toLocaleDateString(currentLanguage === 'ru' ? 'ru-RU' : 'uz-UZ', options);
  }
  
  // Для страницы vacation.html
  if (document.getElementById('dateRange')) {
    flatpickr.localize(flatpickr.l10ns[currentLanguage === 'ru' ? 'ru' : 'default']);
  }
}

// Получаем данные пользователя
function initUser() {
  if (tg.initDataUnsafe?.user) {
    const user = tg.initDataUnsafe.user;
    const userName = user.first_name || user.username || translations[currentLanguage]['guest'];
    
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
  
  // Обработчик кнопки языка
  const languageBtn = document.getElementById('languageBtn');
  if (languageBtn) {
    languageBtn.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'ru' ? 'uz' : 'ru';
      localStorage.setItem('appLanguage', currentLanguage);
      document.documentElement.lang = currentLanguage;
      translatePage();
    });
  }
}

// Обработка кнопок меню
function initMenuButtons() {
  const buttons = document.querySelectorAll('.menu-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      const text = this.getAttribute('data-i18n');
      
      if (text === 'salary') {
        window.location.href = 'salary.html';
      } else if (text === 'vacation') {
        window.location.href = 'vacation.html';
      } else if (text === 'lunch') {
        window.location.href = 'lunch.html';
      }
    });
  });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  initUser();
  initStartButton();
  initMenuButtons();
  translatePage();
  
  // Инициализация flatpickr для vacation.html
  if (document.getElementById('dateRange')) {
    flatpickr("#dateRange", {
      mode: "range",
      dateFormat: "d.m.Y",
      locale: currentLanguage === 'ru' ? 'ru' : 'default',
      minDate: "today",
      maxDate: new Date().fp_incr(365),
      onChange: function(selectedDates) {
        if(selectedDates.length === 2) {
          const diff = (selectedDates[1] - selectedDates[0]) / (1000 * 60 * 60 * 24) + 1;
          document.getElementById('days-left').textContent = 14 - diff;
        }
      }
    });
  }
  
  // Инициализация salary.html
  if (document.getElementById('year-select')) {
    const yearSelect = document.getElementById('year-select');
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 5; year--) {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    }
    
    yearSelect.addEventListener('change', function() {
      const monthSelect = document.getElementById('month-select');
      monthSelect.innerHTML = `<option value="">${translations[currentLanguage]['select_month']}</option>`;
      monthSelect.disabled = false;
      
      const months = currentLanguage === 'ru' ? 
        ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
         'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] :
        ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
         'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
      
      months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = month;
        monthSelect.appendChild(option);
      });
    });
    
    document.getElementById('month-select').addEventListener('change', function() {
      document.getElementById('show-payslip').disabled = !this.value;
    });
  }
});
