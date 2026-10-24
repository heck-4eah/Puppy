const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const words = document.getElementById("words");

const screen = {
  drawRect(x, y, width, height) {
    context.strokeRect(x, y, width, height);
  }
};

function say(message) {
  const line = document.createElement("p");
  line.textContent = message;
  words.appendChild(line);
  return message;
}

screen.drawRect(12, 14, 300, 100);

say("don't you want some cake? iz tasty");

const cake = say("awooooo!");
say(cake);
say("idk what I'm doing!");
