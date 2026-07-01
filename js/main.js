/* ============================================
   WILDMAN HUNTING & OUTDOOR ROBERTSON
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Loading Screen ---- */
  const loader = document.querySelector('.loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('done');
      setTimeout(() => loader.remove(), 600);
    }, 1100);
  }

  /* ---- Hamburger / Mobile Menu ---- */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('#hamburger');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    btn.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest('.mobile-menu a')) {
      const btn = document.getElementById('hamburger');
      const menu = document.getElementById('mobileMenu');
      if (btn) btn.classList.remove('open');
      if (menu) menu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* ---- Sticky Nav Shadow ---- */
  const nav = document.querySelector('.navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  /* ---- Scroll Reveal ---- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ---- Product Filters ---- */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const row = this.closest('.filter-row');
      row.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      document.querySelectorAll('[data-cat]').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
      });
    });
  });

  /* ---- Contact Form ---- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('.form-submit');
      const origText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      // mailto fallback (replace with backend / Netlify Forms / Formspree)
      const name = form.querySelector('[name="name"]').value;
      const email = form.querySelector('[name="email"]').value;
      const subject = form.querySelector('[name="subject"]') ? form.querySelector('[name="subject"]').value : 'Website Enquiry';
      const message = form.querySelector('[name="message"]').value;
      const mailto = `mailto:Info@wildmanrob.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

      setTimeout(() => {
        window.location.href = mailto;
        btn.innerHTML = '<i class="fas fa-check"></i> Message Ready!';
        setTimeout(() => {
          btn.innerHTML = origText;
          btn.disabled = false;
          form.reset();
        }, 3000);
      }, 1000);
    });
  }

  /* ---- Animate numbers on scroll ---- */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let n = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          n += step;
          if (n >= target) { el.textContent = target + suffix; clearInterval(timer); }
          else el.textContent = Math.floor(n) + suffix;
        }, 20);
        observer.unobserve(el);
      }
    });
    observer.observe(el);
  });

  /* ---- Enquire Now buttons (WhatsApp pre-fill) ---- */
  document.querySelectorAll('[data-enquire]').forEach(btn => {
    btn.addEventListener('click', function () {
      const product = this.dataset.enquire;
      const msg = encodeURIComponent(`Hi Wildman Robertson! I'm interested in: ${product}. Please can you give me more info?`);
      window.open(`https://wa.me/27639370985?text=${msg}`, '_blank', 'noopener');
    });
  });

});
