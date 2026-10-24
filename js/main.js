document.documentElement.classList.remove('no-js');

// ====== SCROLL REVEAL ======

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// ====== NAV BORDER ON SCROLL ======

const nav = document.querySelector('.nav');
const updateNav = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ====== COPY EMAIL ======

const emailButton = document.querySelector('.contact__email');
const emailHint = emailButton.querySelector('.contact__hint');

emailButton.addEventListener('click', async () => {
  const email = emailButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    emailHint.textContent = 'Copied!';
  } catch {
    window.location.href = `mailto:${email}`;
  }
  setTimeout(() => (emailHint.textContent = 'Click to copy'), 2000);
});

// ====== FOOTER YEAR ======

document.getElementById('year').textContent = new Date().getFullYear();
