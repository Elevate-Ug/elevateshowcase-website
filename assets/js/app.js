const form = document.getElementById("form");
const email = document.getElementById("email");
const prompt = document.getElementById("prompt");
const cursor = document.getElementById("cursor");
const body = document.getElementsByTagName("body");
form.onsubmit = (e) => {
  e.preventDefault();
  if (email.value !== "") {
    prompt.classList.add("show"),
      setTimeout(() => {
        prompt.classList.remove("show");
      }, 3000);
  }
};
window.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px ,${e.clientY}px)`;
});
window.addEventListener("mouseover", () => {
  cursor.style.opacity = 1;
});
window.addEventListener("mouseout", () => {
  cursor.style.opacity = 0;
});
window.onload = () => {
  // gsap.to(".main", { scale: 1, opacity: 1, duration: 1 });
};
