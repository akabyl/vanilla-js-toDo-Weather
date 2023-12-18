const todoForm = document.querySelector('.js-todoForm')
const todoInput = document.querySelector('.input')
const todoList = document.querySelector('.js-todoList')
const TODOS_LS = 'todos'
let toDos = []

function loadTodos() {
  const loadTodos = localStorage.getItem(TODOS_LS)
  if (loadTodos !== null) {
    const parsedTodos = JSON.parse(loadTodos)
    parsedTodos.forEach((toDo) => showTodos(toDo.name))
  }
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}
function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode
  todoList.removeChild(li)
  const cleanTodos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  toDos = cleanTodos
  saveTodos()
}

function showTodos(text) {
  const li = document.createElement('li')
  const delBtn = document.createElement('button')
  const span = document.createElement('span')
  const newId = toDos.length + 1
  delBtn.innerHTML = '❌'
  delBtn.addEventListener('click', deleteTodo)
  span.innerText = text
  li.appendChild(delBtn)
  li.appendChild(span)
  li.id = newId
  todoList.appendChild(li)
  const toDoObject = {
    name: text,
    id: newId
  }
  toDos.push(toDoObject)
  saveTodos()
}

function submitHandler(event) {
  event.preventDefault()
  const currentValue = todoInput.value;
  showTodos(currentValue)
  todoInput.value = ''
}

function init() { 
  loadTodos()
  todoForm.addEventListener('submit', submitHandler)
}

init()















