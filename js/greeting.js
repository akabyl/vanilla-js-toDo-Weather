const form = document.querySelector('.form')
const input = document.querySelector('input')
const greetings = document.querySelector('.js-greetings')
const h1 = document.querySelector('h1')
const USER_LS = 'currentUsername'
const SHOWING_CN = 'showing'


function saveUsernameToLocalStorage(text) {
  localStorage.setItem(USER_LS, text)
}

function showGreetings(text) {
  greetings.innerText = `Привет, ${text}`
  greetings.classList.add(SHOWING_CN)
  form.classList.remove(SHOWING_CN)
}

function submitHandler(event) {
  event.preventDefault()
  const inputValue = input.value
  showGreetings(inputValue)
  saveUsernameToLocalStorage(inputValue)
}

function askForUsername() {
  form.classList.add(SHOWING_CN)
  form.addEventListener('submit', submitHandler)
}

function loadUserName() {
  const userName = localStorage.getItem(USER_LS)
  if (userName === null) {
    askForUsername()
  } else {
    showGreetings(userName)
  }
}


function init() {
  loadUserName()
  
}

init()