function scrollToHashTarget(retries = 10) {
  if (!window.location.hash) {
    return;
  }

  const targetId = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(targetId);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (retries > 0) {
    setTimeout(() => scrollToHashTarget(retries - 1), 80);
  }
}

scrollToHashTarget();
