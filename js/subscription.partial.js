document.addEventListener("DOMContentLoaded", () => {
  const summaries = document.querySelectorAll('.subscription__details-summary');

  summaries.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const details = button.parentElement;
      const isOpen = details.classList.contains('active');

      document.querySelectorAll('.subscription__details').forEach(item => {
        item.classList.remove('active');
        item.removeAttribute('open');
      });

      if (!isOpen) {
        details.classList.add('active');
        details.setAttribute('open', '');
      }
    });
  });
});