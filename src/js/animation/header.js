/* =========================
 Header animation js 
=========================== */

const headerAnimation = {
  headerOne() {
    const header = document.querySelector('.header-one');

    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.style.transition = 'all 0.5s ease-in-out';
          header.classList.add('scroll-header');
        } else {
          header.classList.remove('scroll-header');
        }
      });
    }
  },
  headerTwo() {
    const header = document.querySelector('.header-two');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
          header.style.transition = 'all 0.5s ease-in-out';
          header.style.top = '20px';
          header.classList.add('header-two-scroll');
        } else {
          header.classList.remove('header-two-scroll');

          header.style.top = '50px';
        }
      });
    }
  },
  headerThree() {
    const header = document.querySelector('.header-three');

    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.style.transition = 'all 0.5s ease-in-out';
          header.classList.add('header-three-scroll');
        } else {
          header.classList.remove('header-three-scroll');
        }
      });
    }
  },
  headerFour() {
    const header = document.querySelector('.header-four');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.style.transition = 'all 0.5s ease-in-out';
          header.classList.add('header-four-scroll');
        } else {
          header.classList.remove('header-four-scroll');
        }
      });
    }
  },
  headerFive() {
    const header = document.querySelector('.header-five');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 25) {
          header.style.transition = 'all 0.5s ease-in-out';
          header.classList.add('header-five-scroll');
        } else {
          header.classList.remove('header-five-scroll');
        }
      });
    }
  },
  headerSix() {
    const header = document.querySelector('.header-six');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.style.transition = 'all 0.5s ease-in-out';
          header.classList.add('header-six-scroll');
        } else {
          header.classList.remove('header-six-scroll');
        }
      });
    }
  },

  aiVoiceHeader() {
    const header = document.querySelector('.ai-voice-header');

    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.style.transition = 'all 0.5s ease-in-out';
          header.classList.add('scroll-ai-voice-header');
        } else {
          header.classList.remove('scroll-ai-voice-header');
        }
      });
    }
  },

  financialManagementPlatformHeader() {
    const header = document.querySelector('.financial-management-platform-header');

    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.style.transition = 'all 0.5s ease-in-out';
          header.classList.add('financial-management-platform-header-scroll');
        } else {
          header.classList.remove('financial-management-platform-header-scroll');
        }
      });
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('typewriter-text');
  const cursorElement = document.getElementById('cursor');
  
  // The phrases you want to loop through
  const phrases = [
    "Precision Strategy", 
    "Rapid Execution", 
    "Measurable Impact"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100; // Base typing speed (ms)

  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      // Remove a character
      textElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50; // Deleting is faster
    } else {
      // Add a character
      textElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100; // Typing speed
    }

    // Determine when to switch states
    if (!isDeleting && charIndex === currentPhrase.length) {
      // Finished typing the word, pause before deleting
      isDeleting = true;
      typeSpeed = 2000; // Wait 2 seconds before deleting
      cursorElement.style.animation = 'blink 1s step-end infinite'; // Ensure blinking while waiting
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next word
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Loop back to start
      typeSpeed = 500; // Small pause before typing next word
    } else {
      // Stop blinking while typing/deleting for realism (optional)
      cursorElement.style.animation = 'none';
      cursorElement.style.opacity = '1'; 
    }

    setTimeout(type, typeSpeed);
  }

  // Start the effect
  type();
});

if (typeof window !== 'undefined') {
  headerAnimation.headerOne();
  headerAnimation.headerTwo();
  headerAnimation.headerThree();
  headerAnimation.headerFour();
  headerAnimation.headerFive();
  headerAnimation.headerSix();
  headerAnimation.aiVoiceHeader();
  headerAnimation.financialManagementPlatformHeader();
}
