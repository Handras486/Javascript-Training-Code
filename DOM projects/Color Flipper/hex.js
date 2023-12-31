const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  let hexcolor = "#";
  for (let index = 0; index < 6; index++) {
    hexcolor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexcolor;
  color.textContent = hexcolor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
