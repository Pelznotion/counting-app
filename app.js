let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let cancelEl = document.getElementById("cancel-btn");
let totalEl = document.getElementById("total-btn");

let count = 0;
function incrementBtn() {
  count += 1;
  countEl.textContent = count;
}
function decrementBtn() {
  count -= 1;
  countEl.textContent = count;
}
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
function cancel() {
  countEl.textContent = 0;
  count = 0;
  saveEl.textContent = "Previous Enteries: ";
}
