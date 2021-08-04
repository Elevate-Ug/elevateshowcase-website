const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const prompt = document.getElementById("prompt");
const cursor = document.getElementById("cursor");
const body = document.getElementsByTagName("body");
form.onsubmit = (e) => {
  e.preventDefault();
  if (emailInput.value !== "") {
    prompt.classList.add("show");
    emailInput.value = "";
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
  const tl = gsap.timeline();
  tl.to(".main__text", { y: 0, opacity: 1, duration: 1 })
    .to(".color-yellow", { color: "#eeaa15", duration: 0.2 })
    .to(".main__text-stroked", { color: "#000000", duration: 0.2 })
    .to(".main__form", {
      y: 0,
      opacity: 1,
      duration: 0.5,
    })
    .to("footer", { opacity: 1, duration: 0.2 });
};
