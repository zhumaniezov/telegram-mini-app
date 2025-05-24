document.addEventListener("DOMContentLoaded", function() {
    // Элементы
    const Telegram = window.Telegram?.WebApp;
    const loginBtn = document.getElementById("loginBtn");
    const salaryBtn = document.getElementById("salaryBtn");
    const backBtn = document.getElementById("backBtn");
    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");
    const screen3 = document.getElementById("screen3");
    const userName = document.getElementById("userName");
    const userFullName = document.getElementById("userFullName");
    const greeting = document.getElementById("greeting");
    const yearSelect = document.getElementById("yearSelect");
    const monthSelect = document.getElementById("monthSelect");
    const selectedMonth = document.getElementById("selectedMonth");
    const selectedYear = document.getElementById("selectedYear");

    // 1. Установка имени пользователя
    function setUserName() {
        if (Telegram?.initDataUnsafe?.user) {
            const user = Telegram.initDataUnsafe.user;
            userName.textContent = user.first_name || "Сотрудник";
            userFullName.textContent = `${user.first_name || ""} ${user.last_name || ""}`.trim();
        }
    }

    // 2. Приветствие по времени суток
    function updateGreeting() {
        const hour = new Date().getHours();
        let greetingText;
        if (hour < 12) greetingText = "Доброе утро";
        else if (hour < 18) greetingText = "Добрый день";
        else greetingText = "Добрый вечер";
        greeting.textContent = `${greetingText}, ${userName.textContent}!`;
    }

    // 3. Генерация случайной суммы (30-50 млн сум)
    function generateRandomSum() {
        const min = 30000000;
        const max = 50000000;
        const amount = Math.floor(Math.random() * (max - min + 1)) + min;
        return amount.toLocaleString('uz-UZ') + ' сум';
    }

    // 4. Обновление расчетного листка
    function updatePayslip() {
        selectedYear.textContent = yearSelect.value;
        selectedMonth.textContent = monthSelect.options[monthSelect.selectedIndex].text;
        
        document.querySelectorAll('.amount').forEach(el => {
            el.textContent = generateRandomSum();
        });
    }

    // 5. Обработчики событий
    loginBtn.addEventListener("click", () => {
        setUserName();
        updateGreeting();
        screen1.classList.add("hidden");
        screen2.classList.remove("hidden");
        if (Telegram) Telegram.expand();
    });

    salaryBtn.addEventListener("click", () => {
        updatePayslip();
        screen2.classList.add("hidden");
        screen3.classList.remove("hidden");
    });

    backBtn.addEventListener("click", () => {
        screen3.classList.add("hidden");
        screen2.classList.remove("hidden");
    });

    yearSelect.addEventListener("change", updatePayslip);
    monthSelect.addEventListener("change", updatePayslip);

    // Инициализация
    if (Telegram) {
        Telegram.BackButton.hide();
    }
});
