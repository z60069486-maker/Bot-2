// Получаем баланс из памяти
let balance = Number(localStorage.getItem("balance")) || 0;

// Показываем баланс
document.getElementById("balance").textContent = balance;


// Открытие игры
function openGame(game) {
    window.location.href = game;
}