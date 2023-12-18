const body = document.querySelector('body');
const IMG_NUMBER = 5

function showImg(number) {
  const img = new Image();
  img.src = `./images/${number + 1}.jpg`
  img.classList.add('bg_img')
  body.prepend(img)
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER)
  return number
}

function init() {
  const randomNumber = getRandom()
  showImg(randomNumber)
}

init()