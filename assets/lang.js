const translations = {
  ru: {
    greeting: "Добрый день,",
    startBtn: "Войти как",
    salaryTitle: "💰 Зарплата",
    vacationTitle: "🏖️ Отпуск",
    lunchTitle: "🍕 Обед",
    chatTitle: "💬 Чат",
    lunchPageTitle: "🍽️ Обеденное меню",
    confirmLunch: "Подтвердить обед",
    yourChoice: "Ваш выбор:",
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
    selectDates: "Выберите даты",
    submitRequest: "Отправить запрос",
    upcomingVacation: "Ближайший отпуск"
  },
  uz: {
    greeting: "Hayrli kun,",
    startBtn: "Kirish",
    salaryTitle: "💰 Maosh",
    vacationTitle: "🏖️ Ta'til",
    lunchTitle: "🍕 Tushlik",
    chatTitle: "💬 Chat",
    lunchPageTitle: "🍽️ Tushlik menyusi",
    confirmLunch: "Tushlikni tasdiqlash",
    yourChoice: "Sizning tanlovingiz:",
    back: "← Orqaga",
    payslipTitle: "💰 Hisob varaqasi",
    chooseYear: "Yilni tanlang",
    chooseMonth: "Oyni tanlang",
    showPayslip: "Ko‘rsatish",
    downloadPDF: "PDF yuklab olish",
    sendEmail: "Emailga yuborish",
    vacationTitlePage: "🏖️ Ta'tilingiz",
    daysLeft: "Qolgan ta'til kunlari:",
    planVacation: "Ta'til rejalashtiring",
    selectDates: "Sanalarni tanlang",
    submitRequest: "So‘rov yuborish",
    upcomingVacation: "Yaqinlashayotgan ta'til"
  }
};

let currentLang = localStorage.getItem("lang") || "ru";

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const translation = translations[currentLang] && translations[currentLang][key];
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

// Возможность вызвать функцию из других файлов
window.translatePage = translatePage;
window.currentLang = currentLang;
