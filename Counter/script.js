const counter = document.querySelector('.counter');
const incrementButton = document.querySelector('.increment-button');
const decrementButton = document.querySelector('.decrement-button');
const resetButton = document.querySelector('.reset-button');

let count = 0;

incrementButton.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

decrementButton.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});
