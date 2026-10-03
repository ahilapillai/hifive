// Early-access signup: client-side validation + confirmation.
// Replace the TODO with a real API call (e.g. your waitlist provider) when ready.
(function () {
  const form = document.getElementById('signup');
  const input = document.getElementById('email');
  const msg = document.getElementById('signup-msg');
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();

    if (!EMAIL_RE.test(email)) {
      input.setAttribute('aria-invalid', 'true');
      msg.textContent = 'Please enter a valid email address.';
      input.focus();
      return;
    }

    input.removeAttribute('aria-invalid');
    // TODO: POST `email` to your waitlist endpoint here.
    msg.textContent = "You're on the list! We'll be in touch soon.";
    form.reset();
  });

  input.addEventListener('input', () => {
    if (input.hasAttribute('aria-invalid')) {
      input.removeAttribute('aria-invalid');
      msg.textContent = '';
    }
  });

  // "Book a consultation" scrolls up and focuses the email field.
  document.querySelectorAll('[data-focus-signup]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => input.focus({ preventScroll: true }), 450);
    });
  });
})();
