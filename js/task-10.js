const input = document.querySelector('input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')

const boxes = document.querySelector('#boxes')

btnCreate.addEventListener('click', () => {
  createBoxes(input.value)
})

btnDestroy.addEventListener('click', destroyBoxes)


function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];

  boxes.innerHTML = ''
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div')
    box.style.width = size + 'px'
    box.style.height = size + 'px'
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxesArr.push(box);
  }
  boxes.append(...boxesArr);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroyBoxes() {
  boxes.innerHTML = ''
}