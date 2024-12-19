let funButton = document.querySelector(".fun");
let body = document.querySelector("body");
let caution = document.querySelector(".caution");
funButton.addEventListener('click', () => {
const jsConfetti = new JSConfetti();
 jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸', '😆', '😊', '🏵️', '🎃', '🍓', '🍉', '🍒'],
    })
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
