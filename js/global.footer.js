function updateClock() {
  const clockElement = document.getElementById("footer-clock");
  if (clockElement) {
    const now = new Date();
    clockElement.innerText = now.toLocaleTimeString();
    updateGreeting(now.getHours());
  }
}

function updateGreeting(hours) {
  const greetingElement = document.getElementById("footer-greeting");
  if (!greetingElement) return;

  let greeting;
  if (hours >= 5 && hours < 12) {
    greeting = "Good morning! Start your day with our coffee.";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon! Time for a coffee break?";
  } else if (hours >= 18 && hours < 22) {
    greeting = "Good evening! Enjoy a cozy cup of coffee.";
  } else {
    greeting = "Good night! Dreaming of tomorrow's coffee?";
  }

  if (greetingElement.innerText !== greeting) {
    greetingElement.innerText = greeting;
  }
}

function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("footer__back-to-top--visible");
    } else {
      backToTopBtn.classList.remove("footer__back-to-top--visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

setInterval(updateClock, 1000);
updateClock();
initBackToTop();
