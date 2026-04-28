// Generowanie kolorowych światełek
document.addEventListener('DOMContentLoaded', function () {
  const lightsContainer = document.querySelector('.lights');

  if (lightsContainer) {
    // Tworzenie 20 kolorowych światełek
    for (let i = 0; i < 20; i++) {
      const light = document.createElement('div');
      light.style.width = '0.75rem';
      light.style.height = '3rem';
      light.style.borderRadius = '9999px';
      light.style.backgroundColor = `hsl(${i * 18}, 70%, 50%)`;
      light.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
      light.style.animation = `pulse 2s ease-in-out infinite`;
      light.style.animationDelay = `${i * 0.1}s`;
      lightsContainer.appendChild(light);
    }
  }

  // Smooth scroll dla linków nawigacji
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Animacja pulsowania dla światełek (dodana przez CSS)
  const style = document.createElement('style');
  style.textContent = `
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.7;
            }
        }
    `;
  document.head.appendChild(style);

  // Obsługa formularza kontaktowego
  const contactForm = document.querySelector('.contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
      this.reset();
    });
  }

  // Obsługa przycisku "Zamów Online"
  const orderButtons = document.querySelectorAll('.order-btn, .cta-button');
  orderButtons.forEach((button) => {
    button.addEventListener('click', function () {
      alert('Funkcja zamawiania online będzie wkrótce dostępna!');
    });
  });
});
