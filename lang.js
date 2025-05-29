const translations = {
  ru: {
    greeting: "Добрый день,",
    startBtn: "Войти как",
    mainTitle: "Главное меню",
    salaryTitle: "💰 Зарплата",
    vacationTitle: "🏖️ Отпуск",
    lunchTitle: "🍕 Обед",
    chatTitle: "💬 Чат",
    lunchPageTitle: "🍽️ Обеденное меню",
    confirmLunch: "Подтвердить обед",
    yourChoice: "Ваш выбор:",
    choose: "Выбрать",
    back: "← Назад",
    baseSalary: "Оклад",
    bonus: "Премия",
    overtime: "Переработки",
    totalAccrued: "Итого начислено",
    incomeTax: "НДФЛ (12%)",
    pensionTax: "Пенсионный взнос (1%)",
    unionTax: "Профсоюзный взнос",
    totalDeductions: "Итого удержано",
    netSalary: "К выплате",
    accruals: "Начисления",
    deductions: "Удержания",
    position: "Должность",
    employeeId: "Табельный номер",
    downloadPDF: "Скачать PDF",
    sendEmail: "Отправить на email",
    payslipTitle: "💰 Расчетный листок",
    chooseYear: "Выберите год",
    chooseMonth: "Выберите месяц",
    showPayslip: "Показать",
    vacationTitlePage: "🏖️ Ваш отпуск",
    daysLeft: "Осталось дней отпуска:",
    planVacation: "Запланировать отпуск",
    submitRequest: "Отправить запрос",
    upcomingVacation: "Ближайший отпуск",
    workStats: {
      daysLabel: "Рабочих дней в месяце",
      hoursLabel: "Рабочих часов в месяце",
      workedLabel: "Отработано сотрудником",
      daysShort: "дней",
      hoursShort: "часов"
    },
    months: [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ],
    dishes: [
      {
        name: "Куриный суп",
        description: "С домашней лапшой и зеленью",
        calories: "250"
      },
      {
        name: "Гречка с грибами",
        description: "С луковой поджаркой",
        calories: "320"
      },
      {
        name: "Салат Цезарь",
        description: "С курицей и пармезаном",
        calories: "280"
      },
      {
        name: "Тирамису",
        description: "Классический итальянский",
        calories: "350"
      }
    ],
    caloriesTemplate: "~{calories} ккал",
    monthNorm: "Норма месяца (дни/часы):",
    employeeWorked: "Отработано сотрудником (дни/часы):"
  },
  uz: {
    greeting: "Hayrli kun,",
    startBtn: "Kirish",
    mainTitle: "Asosiy menyu",
    salaryTitle: "💰 Maosh",
    vacationTitle: "🏖️ Ta'til",
    lunchTitle: "🍕 Tushlik",
    chatTitle: "💬 Chat",
    lunchPageTitle: "🍽️ Tushlik menyusi",
    confirmLunch: "Tushlikni tasdiqlash",
    yourChoice: "Tanlovingiz:",
    choose: "Tanlash",
    back: "← Orqaga",
    baseSalary: "Asosiy maosh",
    bonus: "Bonus",
    overtime: "Qoʻshimcha ish",
    totalAccrued: "Jami hisoblangan",
    incomeTax: "Daromad soligʻi (12%)",
    pensionTax: "Pensiya badali (1%)",
    unionTax: "Kasaba uyushmasi badali",
    totalDeductions: "Jami ushlab qolingan",
    netSalary: "Toʻlanadigan summa",
    accruals: "Hisob-kitoblar",
    deductions: "Ushlab qolishlar",
    position: "Lavozim",
    employeeId: "Ishchi raqami",
    downloadPDF: "PDF yuklab olish",
    sendEmail: "Emailga yuborish",
    payslipTitle: "💰 Hisob varaqasi",
    chooseYear: "Yilni tanlang",
    chooseMonth: "Oyni tanlang",
    showPayslip: "Ko‘rsatish",
    vacationTitlePage: "🏖️ Ta'tilingiz",
    daysLeft: "Qolgan ta'til kunlari:",
    planVacation: "Ta'tilni rejalashtiring",
    submitRequest: "So‘rov yuborish",
    upcomingVacation: "Yaqinlashayotgan ta'til",
    workStats: {
      daysLabel: "Oydagi ish kunlari",
      hoursLabel: "Oydagi ish soatlari",
      workedLabel: "Xodim tomonidan ishlangan",
      daysShort: "kun",
      hoursShort: "soat"
    },
    months: [
      "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
      "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
    ],
    dishes: [
      {
        name: "Tovuq sho'rva",
        description: "Uy lag'moni va ko'katlar bilan",
        calories: "250"
      },
      {
        name: "Qo'ziqorinli grechka",
        description: "Piyoz qovurilgan",
        calories: "320"
      },
      {
        name: "Sezar salati",
        description: "Tovuq va parmezan bilan",
        calories: "280"
      },
      {
        name: "Tiramisu",
        description: "Klassik italyan deserti",
        calories: "350"
      }
    ],
    caloriesTemplate: "~{calories} kkal",
    monthNorm: "Oyni norma (kun/soat):",
    employeeWorked: "Xodim ishlagan (kun/soat):"
  }
};

let currentLang = localStorage.getItem("lang") || "ru";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  translatePage();
}

// Исправленная функция для поддержки вложенных data-i18n (например, workStats.daysLabel)
function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    let value = translations[currentLang];
    key.split('.').forEach(k => {
      if (value) value = value[k];
    });
    if (value) el.textContent = value;
  });

  // Обновляем динамические элементы, если есть такие функции
  if (typeof updateDishes === 'function') updateDishes();
  if (typeof updateMonths === 'function') updateMonths();
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  translatePage();
});

window.translatePage = translatePage;
window.currentLang = currentLang;
window.translations = translations;
window.setLanguage = setLanguage;
