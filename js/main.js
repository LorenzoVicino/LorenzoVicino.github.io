(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuBackdrop = document.querySelector('.menu-backdrop');
  let focusBeforeMenu = null;

  const setMenu = (open) => {
    if (!menuButton || !mobileMenu) return;

    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.setAttribute('aria-hidden', String(!open));
    mobileMenu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);

    if (open) {
      focusBeforeMenu = document.activeElement;
      mobileMenu.querySelector('a')?.focus();
    } else if (focusBeforeMenu instanceof HTMLElement) {
      focusBeforeMenu.focus();
    }
  };

  menuButton?.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  menuBackdrop?.addEventListener('click', () => setMenu(false));
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
    }
  });

  const projectItems = [...document.querySelectorAll('[data-project]')];

  const setProjectOpen = (item, open) => {
    const summary = item.querySelector('.project-summary');
    const details = item.querySelector('.project-details');
    const desktopLabel = item.querySelector('.desktop-toggle');
    const mobileLabel = item.querySelector('.mobile-toggle');

    item.classList.toggle('is-open', open);
    summary?.setAttribute('aria-expanded', String(open));
    if (details) details.hidden = !open;
    if (desktopLabel) desktopLabel.textContent = open ? '— close' : '+ open';
    if (mobileLabel) mobileLabel.textContent = open ? '—' : '+';
  };

  projectItems.forEach((item) => {
    item.querySelector('.project-summary')?.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      projectItems.forEach((project) => setProjectOpen(project, false));
      if (willOpen) setProjectOpen(item, true);
    });
  });

  const filters = [...document.querySelectorAll('[data-filter]')];
  const countLong = document.querySelector('[data-count-long]');
  const countShort = document.querySelector('[data-count-short]');

  filters.forEach((filterButton) => {
    filterButton.addEventListener('click', () => {
      const selected = filterButton.dataset.filter;
      let visibleIndex = 0;

      filters.forEach((button) => {
        const active = button === filterButton;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      projectItems.forEach((item) => {
        const visible = selected === 'All' || item.dataset.tag === selected;
        item.hidden = !visible;

        if (visible) {
          visibleIndex += 1;
          const number = item.querySelector('.project-number');
          if (number) number.textContent = String(visibleIndex).padStart(2, '0');
        }
      });

      if (countLong) countLong.textContent = `${visibleIndex} of ${projectItems.length} shown`;
      if (countShort) countShort.textContent = `${visibleIndex}/${projectItems.length}`;
    });
  });

  const contactForm = document.querySelector('[data-contact-form]');
  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const from = String(data.get('from') || '').trim();
    const subject = String(data.get('subject') || '').trim() || 'Message from portfolio';
    const message = String(data.get('message') || '').trim();
    const body = `${message}\n\nFrom: ${from}`;
    window.location.href = `mailto:imlorenzovicino@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  const desktopQuery = window.matchMedia('(min-width: 701px)');
  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });
})();
