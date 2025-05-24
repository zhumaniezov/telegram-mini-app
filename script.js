document.addEventListener("DOMContentLoaded", function() {
    const Telegram = window.Telegram?.WebApp;
    const loginBtn = document.getElementById("loginBtn");
    const salaryBtn = document.getElementById("salaryBtn");
    const backBtn = document.getElementById("backBtn");
    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");
    const screen3 = document.getElementById("screen3");
    const greeting = document.getElementById("greeting");
    const userName = document.getElementById("userName");
    const userFullName = document.getElementById("userFullName");
    const yearSelect = document.getElementById("yearSelect");
    const monthSelect = document.getElementById("monthSelect");
    const selectedMonth = document.getElementById("selectedMonth");
    const selectedYear = document.getElementById("selectedYear");

    // Инициализация Telegram WebApp
    if (Telegram) {
        Telegram.expand(); // Раскрываем на весь экран
        Telegram.BackButton.hide(); // Скрываем кнопку "Назад" (пока не нужна)
    }

    // Авторизация через Telegram
    loginBtn.addEventListener("click", () => {
        if (Telegram) {
            const user = Telegram.initDataUnsafe?.user;
            if (user) {
                const name = user.first_name || "Сотрудник";
                userName.textContent = name;
                userFullName.textContent = `${name} ${user.last_name || ""}`.trim();
                screen1.classList.add("hidden");
                screen2.classList.remove("hidden");
                updateGreeting();
            } else {
                alert("Ошибка: данные пользователя не получены.");
            }
        } else {
            // Для теста вне Telegram
            userName.textContent = "Иван";
            userFullName.textContent = "Иван Иванов";
            screen1.classList.add("hidden");
            screen2.classList.remove("hidden");
            updateGreeting();
        }
    });

    // Обновление приветствия по времени
    function updateGreeting() {
        const hour = new Date().getHours();
        let greetingText;
        if (hour < 12) greetingText = "Доброе утро";
        else if (hour < 18) greetingText = "Добрый день";
        else greetingText = "Добрый вечер";
        greeting.textContent = `${greetingText}, ${userName.textContent}!`;
    }

    // Переходы между экранами
    salaryBtn.addEventListener("click", () => {
        screen2.classList.add("hidden");
        screen3.classList.remove("hidden");
        updatePayslip();
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
    }

    // Инициализация при загрузке (для теста)
    if (!Telegram) {
        console.log("Режим теста: Telegram WebApp не обнаружен.");
    }
});
