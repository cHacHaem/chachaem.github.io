let funButton = document.querySelector(".fun");
let body = document.querySelector("body");
let caution = document.querySelector(".caution");
funButton.addEventListener('click', () => {
const jsConfetti = new JSConfetti();
 jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸', '😆', '😊', '🏵️', '🎃', '🍓', '🍉', '🍒'],
    })
});
caution.addEventListener("click", () => {
   body.style.background = "url('https://cdn.glitch.global/9e4c7eb7-23b2-40d4-a4e2-de43f02bf3a3/barney_jumpscare.png?v=1702662320151')";
  setTimeout(() => {
  body.style.background = "";
}, 5000);
});
