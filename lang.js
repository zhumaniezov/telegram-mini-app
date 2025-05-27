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
    upcomingVacation: "Ближайший отпуск"
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
    upcomingVacation: "Yaqinlashayotgan ta'til"
  }
};

let currentLang = localStorage.getItem("lang") || "ru";

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const translation = translations[currentLang]?.[key];
    if (translation) el.textContent = translation;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("language-switcher");
  if (switcher) {
    switcher.value = currentLang;
    switcher.addEventListener("change", () => {
      currentLang = switcher.value;
      localStorage.setItem("lang", currentLang);
      translatePage();
    });
  }
  translatePage();
});

window.translatePage = translatePage;
window.currentLang = currentLang;
