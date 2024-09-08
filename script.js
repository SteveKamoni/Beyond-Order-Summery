window.addEventListener("scroll", () => {
  const fade = document.querySelectorAll(".fade-in");

  fade.forEach((fade) => {
    const position = fade.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if (position < screenPosition) {
      fade.classList.add("scrolled");
    }
  });
});
