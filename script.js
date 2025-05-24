document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const salaryBtn = document.getElementById("salaryBtn");
    const backBtn = document.getElementById("backBtn");
    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");
    const screen3 = document.getElementById("screen3");
    const greeting = document.getElementById("greeting");
    const yearSelect = document.getElementById("yearSelect");
    const monthSelect = document.getElementById("monthSelect");
    const payslip = document.getElementById("payslip");
    const selectedMonth = document.getElementById("selectedMonth");
    const selectedYear = document.getElementById("selectedYear");

    // Установка приветствия в зависимости от времени
    function updateGreeting() {
        const hour = new Date().getHours();
        let greetingText;
        if (hour < 12) greetingText = "Доброе утро";
        else if (hour < 18) greetingText = "Добрый день";
        else greetingText = "Добрый вечер";
        greeting.textContent = `${greetingText}, Иван!`;
    }

    // Переход между экранами
    loginBtn.addEventListener("click", () => {
        screen1.classList.add("hidden");
        screen2.classList.remove("hidden");
        updateGreeting();
    });

    salaryBtn.addEventListener("click", () => {
        screen2.classList.add("hidden");
        screen3.classList.remove("hidden");
    });

    backBtn.addEventListener("click", () => {
        screen3.classList.add("hidden");
        screen2.classList.remove("hidden");
    });

    // Обновление расчетного листка
    yearSelect.addEventListener("change", updatePayslip);
    monthSelect.addEventListener("change", updatePayslip);

    function updatePayslip() {
        const year = yearSelect.value;
        const month = monthSelect.options[monthSelect.selectedIndex].text;
        selectedYear.textContent = year;
        selectedMonth.textContent = month;
        payslip.classList.remove("hidden");
    }
});
