const detailsElements = document.querySelectorAll('.subscription__details');
const subscriptionForm = document.querySelector('.subscription__form');
const modalThankYou = document.getElementById('modal-thank-you');

detailsElements.forEach((el) => {
  const summary = el.querySelector('.subscription__details-summary');

  summary.addEventListener('click', (e) => {
    e.preventDefault(); 

    detailsElements.forEach((otherEl) => {
      if (otherEl !== el && otherEl.hasAttribute('open')) {
        closeElement(otherEl);
      }
    });

    if (!el.hasAttribute('open')) {
      openElement(el);
    } else {
      closeElement(el);
    }
  });
});

function openElement(el) {
  const startHeight = el.offsetHeight;
  el.setAttribute('open', '');
  const endHeight = el.scrollHeight;

  el.animate([
    { height: `${startHeight}px` },
    { height: `${endHeight}px` }
  ], {
    duration: 500,
    easing: 'ease-out'
  }).onfinish = () => {
    el.style.height = 'auto'; 
  };
}

function closeElement(el) {
  const startHeight = el.offsetHeight;
  const endHeight = el.querySelector('.subscription__details-summary').offsetHeight;

  el.animate([
    { height: `${startHeight}px` },
    { height: `${endHeight}px` }
  ], {
    duration: 500, 
    easing: 'ease-out'
  }).onfinish = () => {
    el.removeAttribute('open'); 
    el.style.height = 'auto';
  };
}

if (subscriptionForm) {
  subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    if (modalThankYou) {
      modalThankYou.style.display = 'flex'; 
      document.body.style.overflow = 'hidden'; 
    }
    
    subscriptionForm.reset(); 
  });
}

if (modalThankYou) {
  modalThankYou.addEventListener('click', (e) => {
    const isCloseBtn = e.target.closest('.modal-thank-you__close');
    const isOkBtn = e.target.closest('.modal-thank-you__button');
    const isOverlay = e.target === modalThankYou;

    if (isCloseBtn || isOkBtn || isOverlay) {
      modalThankYou.style.display = 'none';
      document.body.style.overflow = 'auto'; 
    }
  });
}