const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const form = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const message = document.querySelector("#form-message");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (form && email && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!email.validity.valid) {
      message.textContent = "ENTER A REAL INBOX. THE MICROWAVE IS ALREADY LYING.";
      email.focus();
      return;
    }

    message.textContent = "ARMED. BIG POPCORN REMAINS UNIMPRESSED.";
    form.reset();
  });
}
