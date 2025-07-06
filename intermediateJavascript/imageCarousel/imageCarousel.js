let previousButton = document.querySelector(".previous-button");
let nextButton = document.querySelector(".next-button");
let frame = document.querySelector(".frame");
let left = document.querySelector(".image-left");
let right = document.querySelector(".image-right");
let hidden = document.querySelector(".hidden");

nextButton.addEventListener("click", () => {
  let temp = right.innerHTML;
  let temp2 = left.innerHTML;
  right.innerHTML = hidden.innerHTML;
  left.innerHTML = frame.innerHTML;
  hidden.innerHTML = temp2;
  frame.innerHTML = temp;
});

previousButton.addEventListener("click", () => {
  let temp = left.innerHTML;
  let temp2 = right.innerHTML;
  left.innerHTML = hidden.innerHTML;
  right.innerHTML = frame.innerHTML;
  frame.innerHTML = temp;
  hidden.innerHTML = temp2;
});
