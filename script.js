"use strict";
let color = "black";
let click = false;
let size;
const remove = document.querySelector(".remove");
let bodyBorder = document.querySelector(".board");
let message = function () {
  document.querySelector(".message").textContent = "enter value again";
};

document.addEventListener("DOMContentLoaded", function () {
  //   createBoard(16);
  document.querySelector("body").addEventListener("click", function (e) {
    size = Number(document.querySelector(".form-control").value);
    if (size < 100) {
      {
        let draw = document.querySelector("#draw");
        draw.innerHTML = "Now you can draw";
      }
    } else {
      bodyBorder.style.color = "black solid";
      draw.innerHTML = "You are not allowed to draw";
    }
  });
  let btn_popup = document.getElementById("popup");

  btn_popup.addEventListener("click", function () {
    let size = Number(document.querySelector(".form-control").value);
    console.log(size);
    if (size <= 100) {
      createBoard(size);
    } else {
      resetBoard();
    }
  });
});
function createBoard(size) {
  if (size >= 1 || size <= 100) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numberOfDiv = size * size;

    for (let i = 0; i < numberOfDiv; i++) {
      let div = document.createElement("div");
      div.addEventListener("mouseover", colorDiv);

      board.insertAdjacentElement("beforeend", div);
    }
  } else {
    message();
    // resetBoard();
  }
}
// function getSize() {
//   //   let input = prompt("What will be the size of the board");

//   if (input >= 1 || input <= 100) {
//     input.addEventListener("click", function () {

//     });
//   }

//   if (input == "") {
//     message.innerHTML = "Please provide a number";
//   } else if (input < 0 || input > 100) {

//   } else {
//     message.inner = "now play";
//     return input;
//   }
// }
function generateRandomColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
  //random color will be freshly served
}

function colorDiv() {
  if (click == true) {
    if (color == "random") {
      this.style.backgroundColor = generateRandomColor();
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
