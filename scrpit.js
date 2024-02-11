const USER_REGISTER = document.querySelector('.register')
const USER_OPERATION = document.querySelector('.operation')
const BUTTONS = document.querySelectorAll('.grid button')

const operation = []

BUTTONS.forEach((button) => button.addEventListener('click', ManageOperations))

function ManageOperations(e) {
  const button = e.target
  if (button.classList.contains('number')) {
    populateVisorOperation(button)
  } else if (button.classList.contains('operator')) {
    populateVisorRegister(button)
  } else if (button.classList.contains('clear')) {
    clearNumbers()
  } else if (button.classList.contains('equals')) {
    ShowResult()
  }
}

function populateVisorOperation(button) {
  if (USER_OPERATION.textContent.length < 10) {
    USER_OPERATION.textContent += button.value
  }
}

function populateVisorRegister(button) {
  const hasOperator = CURRENT_REGISTER.some((item) => item.includes(/[+-/*]/))

  if (CURRENT_OPERATION.length > 0 && !hasOperator) {
    CURRENT_REGISTER.push(CURRENT_OPERATION.join(''), button.value)
    VISOR_REGISTER.textContent = CURRENT_REGISTER.join(' ')

    VISOR_OPERATION.textContent = ''
    CURRENT_OPERATION.splice(0)
  }
}

function clearNumbers() {
  if (USER_OPERATION.textContent.length > 0 ||
      USER_REGISTER.textContent.length > 0) {
    USER_OPERATION.textContent = ''
    USER_REGISTER.textContent = ''
  }
}


// function ShowResult() {
//   if (CURRENT_REGISTER.length === 2 && CURRENT_OPERATION.length >= 1) {
//     const result = operate(...CURRENT_REGISTER, ...CURRENT_OPERATION)
//     VISOR_REGISTER.textContent = CURRENT_REGISTER.join(' ') + ' ='
//   }
// }

// function operate(n1, operator, n2) {

//   if (operator === '+') add(n1, n2)
//   else if (operator === '-') subtract(n1, n2) 
//   else if (operator === '*') multiply(n1, n2)
//   else if (operator === '/') divide(n1, n2)
// }

// function add(n1, n2) {
//   return n1 + n2
// }
// function subtract(n1, n2) {
//   return n1 - n2
// }
// function multiply(n1, n2) {
//   return n1 * n2
// }
// function divide(n1, n2) {
//   return n1 / n2
// }