const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const words = document.getElementById("words");

const screen = {
  drawRect(x, y, width, height) {
    context.strokeRect(12, 13, 20, 10);
  }
};

function say(message) {
  const line = document.createElement("p");
  line.textContent = message;
  words.appendChild(line);
  return message;
}

screen.drawRect(12, 14, 300, 100);

say("don't you want some cake? it's tasty");

const cake = say("awooooo!");
say(cake);
say("welcome to Puppy! you will receive boxicus the rectangle dog!");
//this code is impossible to see for me. so if someone can see it, please let me know.
