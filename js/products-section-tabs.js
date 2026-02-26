(() => {
  const q = s => document.querySelector(s);
  const qa = s => Array.from(document.querySelectorAll(s));
  const wrap = q('.products-selection__tabs');
  const tabs = qa('.products-selection__tab');
  const panels = qa('.products__panel');
  const sort = q('#products-sort');
  if (!wrap || !tabs.length || tabs.length !== panels.length) return;

  const TRANS = (() => {
    const v = (getComputedStyle(document.documentElement).getPropertyValue('--products-tab-trans') || '').trim();
    if (!v) return 320;
    return v.endsWith('ms') ? parseFloat(v) : v.endsWith('s') ? parseFloat(v) * 1000 : parseFloat(v) || 320;
  })();

  const reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  tabs.forEach((t, i) => (t.dataset.i = i));

  panels.forEach(panel => {
    const list = panel.querySelector('.products__list');
    if (!list) return;
    Array.from(list.children).forEach((li, idx) => li.matches && li.matches('.products__item') && (li.dataset.orig = idx));
  });

  const price = el => Number((el.querySelector('.product-card__price')?.textContent || '').replace(',', '.').replace(/[^\d.]/g, '')) || 0;
  const name = el => (el.querySelector('.product-card__title-link')?.textContent || '').trim().toLowerCase();

  const animate = panel => {
    if (reduced) return;
    const items = Array.from(panel.querySelectorAll('.products__item'));
    items.forEach((el, i) => {
      el.style.transition = `opacity 260ms ease ${i * 70}ms, transform 260ms ease ${i * 70}ms`;
      el.style.opacity = '0'; el.style.transform = 'translateY(10px)';
    });
    requestAnimationFrame(() => items.forEach(el => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }));
  };

  const sortPanel = idx => {
    const list = panels[idx]?.querySelector('.products__list');
    if (!list) return;
    const items = Array.from(list.children).filter(n => n.matches && n.matches('.products__item'));
    const mode = (sort?.value) || localStorage.getItem('productsSort') || 'default';
    if (mode === 'default') { items.sort((a, b) => (a.dataset.orig || 0) - (b.dataset.orig || 0)).forEach(n => list.appendChild(n)); return animate(panels[idx]); }
    const key = mode.startsWith('price') ? price : name;
    const dir = mode.endsWith('desc') ? -1 : 1;
    items.sort((a, b) => { const A = key(a), B = key(b); return A === B ? 0 : ((A > B ? 1 : -1) * dir); }).forEach(n => list.appendChild(n));
    animate(panels[idx]);
  };

  const activate = i => {
    tabs.forEach((t, idx) => {
      const on = idx === i;
      t.classList.toggle('products-selection__tab--active', on);
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const p = panels[idx];
      if (on) { p.hidden = false; p.classList.add('products__panel--active'); }
      else { p.classList.remove('products__panel--active'); setTimeout(() => p.hidden = true, reduced ? 0 : TRANS + 20); }
    });
    localStorage.setItem('productsActiveTab', String(i));
    sortPanel(i);
  };

  wrap.addEventListener('click', e => { const t = e.target.closest('.products-selection__tab'); if (t) activate(Number(t.dataset.i)); });

  wrap.addEventListener('keydown', e => {
    const t = e.target.closest('.products-selection__tab'); if (!t) return; const i = Number(t.dataset.i);
    switch (e.key) {
      case 'ArrowRight': e.preventDefault(); { const n = (i + 1) % tabs.length; tabs[n].focus(); activate(n); } break;
      case 'ArrowLeft': e.preventDefault(); { const n = (i - 1 + tabs.length) % tabs.length; tabs[n].focus(); activate(n); } break;
      case 'Home': e.preventDefault(); tabs[0].focus(); activate(0); break;
      case 'End': e.preventDefault(); tabs[tabs.length - 1].focus(); activate(tabs.length - 1); break;
      case ' ': case 'Enter': e.preventDefault(); activate(i); break;
    }
  });

  if (sort) {
    sort.value = localStorage.getItem('productsSort') || sort.value || 'default';
    sort.addEventListener('change', () => { localStorage.setItem('productsSort', sort.value); const ai = tabs.findIndex(t => t.classList.contains('products-selection__tab--active')); sortPanel(ai >= 0 ? ai : 0); });
  }

  const stored = Number(localStorage.getItem('productsActiveTab'));
  const initial = Number.isFinite(stored) && stored >= 0 && stored < tabs.length ? stored : Math.max(0, tabs.findIndex(t => t.classList.contains('products-selection__tab--active')));
  activate(initial >= 0 ? initial : 0);
})();
