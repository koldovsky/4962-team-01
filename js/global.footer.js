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
  const factElement = document.getElementById("footer-fact");
  const factContainer = document.getElementById("footer-fact-container");
  if (!greetingElement || !factElement || !factContainer) return;

  const timeGreetings = {
    morning: "Good morning! Start your day with our coffee.",
    afternoon: "Good afternoon! Time for a coffee break?",
    evening: "Good evening! Enjoy a cozy cup of coffee.",
    night: "Good night! Dreaming of tomorrow's coffee?"
  };

  const facts = [
    "Coffee is actually a fruit.",
    "Beethoven was a coffee lover.",
    "Coffee can help you live longer.",
    "Brazil grows the most coffee in the world.",
    "The most expensive coffee is made from cat poop."
  ];

  let currentGreeting;
  if (hours >= 5 && hours < 12) {
    currentGreeting = timeGreetings.morning;
  } else if (hours >= 12 && hours < 18) {
    currentGreeting = timeGreetings.afternoon;
  } else if (hours >= 18 && hours < 22) {
    currentGreeting = timeGreetings.evening;
  } else {
    currentGreeting = timeGreetings.night;
  }

  if (greetingElement.innerText !== currentGreeting) {
    greetingElement.innerText = currentGreeting;
  }

  const minute = new Date().getMinutes();
  const factIndex = minute % facts.length;
  const currentFact = facts[factIndex];
  const factPrefix = "Did you know? ";

  if (factElement.innerText !== factPrefix + currentFact) {
    factContainer.style.opacity = 0;
    setTimeout(() => {
      factElement.innerText = factPrefix + currentFact;
      factContainer.style.opacity = 1;
    }, 400);
  }
}

function initCopyEmail() {
  const copyBtn = document.getElementById("copy-email-btn");
  const emailText = document.getElementById("footer-email")?.innerText;
  const tooltip = copyBtn?.querySelector(".footer__tooltip");

  if (!copyBtn || !emailText || !tooltip) return;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText).then(() => {
      tooltip.classList.add("footer__tooltip--visible");
      setTimeout(() => {
        tooltip.classList.remove("footer__tooltip--visible");
      }, 2000);
    });
  });
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
initCopyEmail();
