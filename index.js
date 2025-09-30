const correctPassword = "friday i'm in love";
const loginBtn = document.getElementById("login-btn");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
const loginScreen = document.getElementById("login-screen");
const mainScreen = document.getElementById("main-screen");

function checkPassword() {
    const entered = passwordInput.value.trim().toLowerCase();
    if (entered === correctPassword.toLowerCase()) {
        loginScreen.classList.add("hidden");
        setTimeout(() => mainScreen.classList.remove("hidden"), 300);
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "❌ Nieprawidłowe hasło!";
    }
}

loginBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkPassword();
});

const nextBtn = document.getElementById("goNext");

nextBtn.addEventListener("click", () => {
    window.location.href = "main.html";
});
