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
    payslipTitle: "💰 Расчетный листок",
    chooseYear: "Выберите год",
    chooseMonth: "Выберите месяц",
    showPayslip: "Показать",
    downloadPDF: "Скачать PDF",
    sendEmail: "Отправить на email",
    vacationTitlePage: "🏖️ Ваш отпуск",
    daysLeft: "Осталось дней отпуска:",
    planVacation: "Запланировать отпуск",
    submitRequest: "Отправить запрос",
    upcomingVacation: "Ближайший отпуск",
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
             "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
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
    caloriesTemplate: "~{calories} ккал"
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
    payslipTitle: "💰 Hisob varaqasi",
    chooseYear: "Yilni tanlang",
    chooseMonth: "Oyni tanlang",
    showPayslip: "Ko‘rsatish",
    downloadPDF: "PDF yuklab olish",
    sendEmail: "Emailga yuborish",
    vacationTitlePage: "🏖️ Ta'tilingiz",
    daysLeft: "Qolgan ta'til kunlari:",
    planVacation: "Ta'tilni rejalashtiring",
    submitRequest: "So‘rov yuborish",
    upcomingVacation: "Yaqinlashayotgan ta'til",
    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
             "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
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
    caloriesTemplate: "~{calories} kkal"
  }
};

let currentLang = localStorage.getItem("lang") || "ru";

function translatePage() {
  // Статические элементы
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const translation = translations[currentLang]?.[key];
    if (translation) el.textContent = translation;
  });

  // Динамические элементы
  if (typeof updateDishes === 'function') updateDishes();
  if (typeof updateMonths === 'function') updateMonths();
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  translatePage();
}

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("language-switcher");
  if (switcher) {
    switcher.value = currentLang;
    switcher.addEventListener("change", () => switchLanguage(switcher.value));
  }
  translatePage();
});

window.translatePage = translatePage;
window.currentLang = currentLang;
window.translations = translations;
