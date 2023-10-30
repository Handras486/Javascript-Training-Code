const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  const rndnumber = getRandomNumber();
  document.body.style.backgroundColor = colors[rndnumber];
  color.textContent = colors[rndnumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
