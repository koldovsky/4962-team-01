function updateClock() {
  const clockElement = document.getElementById("footer-clock")

  if (clockElement !== null) {
    const now = new Date()
    clockElement.innerText = now.toLocaleTimeString()
  }
}

setInterval(updateClock, 1000)

updateClock()
