const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkElements = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -40% 0px',
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (entry.isIntersecting) {
      link?.classList.add('active');
    } else {
      link?.classList.remove('active');
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

navLinkElements.forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const yearEl = document.getElementById('current-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const avatarAnimation = document.getElementById('avatar-animation');
if (avatarAnimation && window.lottie) {
  window.lottie.loadAnimation({
    container: avatarAnimation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'avatar.json',
    rendererSettings: {
      progressiveLoad: true,
      preserveAspectRatio: 'xMidYMid meet',
    },
  });
}

const avatar = document.getElementById('avatar');
const speech = document.getElementById('speech');
if (avatar && speech) {
  let messageTimer;

  avatar.addEventListener('mouseenter', () => {
    speech.textContent = "Hello, I'm Anshula";
    speech.classList.add('show');
    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => {
      speech.textContent = 'Click to open resume';
    }, 1200);
  });

  avatar.addEventListener('mouseleave', () => {
    clearTimeout(messageTimer);
    speech.classList.remove('show');
  });

  avatar.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'AnshulaAndal_InternshalaResume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  });
}
