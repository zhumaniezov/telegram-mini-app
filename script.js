function goToMain() {
  window.location.href = "main.html";
}

function showGreeting() {
  const hour = new Date().getHours();
  let greeting = 'Добрый вечер';
  if (hour < 12) greeting = 'Доброе утро';
  else if (hour < 18) greeting = 'Добрый день';
  document.getElementById('greeting').textContent = `${greeting}, Иван!`;
}
