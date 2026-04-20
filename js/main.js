/* IPMAMI - main.js */
document.addEventListener('DOMContentLoaded', () => {

  // ===== LOADER =====
  const loader = document.getElementById('loader');
  const fill   = document.getElementById('lcFill');
  const sub    = document.getElementById('lcSub');
  const steps  = ['MEMUAT', 'MENYIAPKAN', 'HAMPIR SIAP', 'SELAMAT DATANG'];
  let prog = 0, step = 0;

  const iv = setInterval(() => {
    prog += Math.random() * 22 + 6;
    if (prog > 100) prog = 100;
    fill.style.width = prog + '%';

    if (prog > 30 && step === 0) { step = 1; sub.textContent = steps[1]; }
    if (prog > 65 && step === 1) { step = 2; sub.textContent = steps[2]; }
    if (prog >= 100) {
      step = 3; sub.textContent = steps[3];
      clearInterval(iv);
      setTimeout(() => loader.classList.add('hidden'), 400);
    }
  }, 100);

  // ===== NAV SCROLL =====
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ===== HAMBURGER =====
  const ham    = document.getElementById('navHam');
  const mob    = document.getElementById('mobMenu');
  const mmClose= document.getElementById('mmClose');
  const mmLinks= document.querySelectorAll('.mm-link');

  const openMob  = () => { ham.classList.add('open'); mob.classList.add('open'); document.body.style.overflow='hidden'; };
  const closeMob = () => { ham.classList.remove('open'); mob.classList.remove('open'); document.body.style.overflow=''; };

  ham.addEventListener('click', () => mob.classList.contains('open') ? closeMob() : openMob());
  mmClose.addEventListener('click', closeMob);
  mmLinks.forEach(l => l.addEventListener('click', closeMob));

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) {
        e.preventDefault();
        window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
      }
    });
  });

  // ===== REVEAL =====
  const reveals = document.querySelectorAll('.reveal');
  const ro = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => ro.observe(el));

  // ===== COUNTERS =====
  const counters = document.querySelectorAll('.hstat-n[data-target]');
  const co = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el  = en.target;
      const end = parseInt(el.dataset.target);
      let cur = 0;
      const inc = end / 60;
      const t = setInterval(() => {
        cur += inc;
        if (cur >= end) { cur = end; clearInterval(t); }
        el.textContent = Math.floor(cur);
      }, 24);
      co.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => co.observe(el));

  // ===== FORM =====
  const form = document.getElementById('kform');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.kf-btn');
      const orig = btn.textContent;
      btn.textContent = 'Terkirim! ✓';
      btn.style.background = '#1e8a3c';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  // ===== TILT on prog-items =====
  document.querySelectorAll('.prog-item').forEach(el => {
    el.addEventListener('mouseenter', () => el.style.transition = 'all .28s cubic-bezier(.25,.46,.45,.94)');
  });

  // ===== ACTIVE NAV =====
  const secs = document.querySelectorAll('section[id]');
  const nls  = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let curr = '';
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 100) curr = s.id; });
    nls.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + curr ? 'var(--blue)' : '';
    });
  }, { passive: true });

});
