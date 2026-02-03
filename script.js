
document.addEventListener("DOMContentLoaded", () => {
  alert("¡Bienvenido a mi portafolio! 👋");

  const btnChangeText = document.getElementById("btn-change-text");
  const introText = document.getElementById("intro-text");

  const btnToggleAbout = document.getElementById("btn-toggle-about");
  const aboutSection = document.getElementById("about");

  if (btnChangeText && introText) {
    btnChangeText.addEventListener("click", () => {
      introText.textContent =
        "Actualmente estoy mejorando mi portafolio";
    });
  }

  if (btnToggleAbout && aboutSection) {
    btnToggleAbout.addEventListener("click", () => {
      const isHidden = aboutSection.classList.toggle("is-hidden");

      btnToggleAbout.textContent = isHidden
        ? "Mostrar “Sobre mí”"
        : "Ocultar “Sobre mí”";
    });
  }
});
