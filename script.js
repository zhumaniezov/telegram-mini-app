document.addEventListener("DOMContentLoaded", function() {
    // Элементы интерфейса
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

    // ===== 1. Генерация случайных сумм в сумах =====
    function generateRandomAmount() {
        const min = 30000000;
        const max = 50000000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function formatUZS(amount) {
        return new Intl.NumberFormat('uz-UZ').format(amount) + ' сум';
    }

    // ===== 2. Обновление данных пользователя =====
    function updateUserData(user) {
        const name = user?.first_name || "Сотрудник";
        userName.textContent = name;
        userFullName.textContent = `${name} ${user?.last_name || ''}`.trim();
    }

    // ===== 3. Инициализация выбора года =====
    function initYearSelect() {
        const currentYear = new Date().getFullYear();
        yearSelect.innerHTML = '';
        
        for (let year = currentYear; year >= 2020; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            if (year === currentYear) option.selected = true;
            yearSelect.appendChild(option);
        }
    }

    // ===== 4. Обновление расчетного листка =====
    function updatePayslip() {
        const year = yearSelect.value;
        const month = monthSelect.options[monthSelect.selectedIndex].text;
        
        selectedYear.textContent = year;
        selectedMonth.textContent = month;
        
        // Обновляем все суммы
        document.querySelectorAll('.amount').forEach(el => {
            el.textContent = formatUZS(generateRandomAmount());
        });
    }

    // ===== 5. Приветствие по времени суток =====
    function updateGreeting() {
        const hour = new Date().getHours();
        let greetingText;
        if (hour < 12) greetingText = "Доброе утро";
        else if (hour < 18) greetingText = "Добрый день";
        else greetingText = "Добрый вечер";
        greeting.textContent = `${greetingText}, ${userName.textContent}!`;
    }

    // ===== 6. Обработчики событий =====
    loginBtn.addEventListener("click", () => {
        if (Telegram) {
            const user = Telegram.initDataUnsafe?.user;
            if (user) {
                updateUserData(user);
                initYearSelect();
                updatePayslip();
                screen1.classList.add("hidden");
                screen2.classList.remove("hidden");
                updateGreeting();
            }
        } else {
            // Режим демо (если открыто не в Telegram)
            updateUserData({ first_name: "Сотрудник" });
            initYearSelect();
            updatePayslip();
            screen1.classList.add("hidden");
            screen2.classList.remove("hidden");
            updateGreeting();
        }
    });

    salaryBtn.addEventListener("click", () => {
        screen2.classList.add("hidden");
        screen3.classList.remove("hidden");
    });

    backBtn.addEventListener("click", () => {
        screen3.classList.add("hidden");
        screen2.classList.remove("hidden");
    });

    yearSelect.addEventListener("change", updatePayslip);
    monthSelect.addEventListener("change", updatePayslip);

    // Инициализация при загрузке
    if (Telegram) {
        Telegram.expand();
        Telegram.BackButton.hide();
    }
});
