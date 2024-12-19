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
function searchText(input, data) {
    const query = input.toLowerCase();
    return data.filter(item => item.toLowerCase().includes(query));
}

// Example usage
const data = ["Basketball Stars", "Baseball Stars", "Soccer Legends", "Tennis Champions"];
const input = "bas";

const results = searchText(input, data);
console.log(results); 
