const VISOR_REGISTER = document.querySelector('.register')
const VISOR_OPERATION = document.querySelector('.operation')
const BUTTONS = document.querySelectorAll('.grid button')

const CURRENT_OPERATION = []

BUTTONS.forEach((button) => button.addEventListener('click', ManageOperations))

function ManageOperations(e) {
  const button = e.target
  if (button.classList.contains('number')) {
    populateVisorOperation(button)
  } else if (button.classList.contains('clear')) {
    clearNumbers()
  } else if (button.classList.contains('operator')) {

  }
}

function populateVisorOperation(button) {
  if (CURRENT_OPERATION.length < 9) {
    CURRENT_OPERATION.push(button.value)
    VISOR_OPERATION.textContent = CURRENT_OPERATION.join('')
  }
}

function clearNumbers() {
  if (CURRENT_OPERATION.length > 0) {
    CURRENT_OPERATION.splice(0)
    VISOR_OPERATION.textContent = ''
    VISOR_REGISTER.textContent = ''
  }
}

function operate(n1, operator, n2) {
  if (operator === '+') add(n1, n2)
  else if (operator === '-') subtract(n1, n2) 
  else if (operator === '*') multiply(n1, n2)
  else if (operator === '/') divide(n1, n2)
}

function add(n1, n2) {
  return n1 + n2
}
function subtract(n1, n2) {
  return n1 - n2
}
function multiply(n1, n2) {
  return n1 * n2
}
function divide(n1, n2) {
  return n1 / n2
}