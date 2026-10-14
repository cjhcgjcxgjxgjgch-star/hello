const button = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
button.addEventListener("click", () => {
  surprise.classList.toggle("hidden");
  button.textContent = surprise.classList.contains("hidden") ? "one last thing… tap me ✨" : "okay that's enough emotions 🥹💗";
});
