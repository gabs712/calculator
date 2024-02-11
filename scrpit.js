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
    addOperator(button)
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

function addOperator(button) {
  if (USER_OPERATION.textContent.length >= 1) {

    // if the operations is not chained the lenght will be 0
    if (operation.length === 0) {
      operation.push(USER_OPERATION.textContent, button.value)
      
      // if the operation is chained the lenght will be 1
    } else if (operation.length === 1) {
      operation.push(button.value)
    }
    USER_REGISTER.textContent = operation.join(' ')
    USER_OPERATION.textContent = ''
  }
}

function clearNumbers() {
  USER_OPERATION.textContent = ''
  USER_REGISTER.textContent = ''
  operation.splice(0)
}

function ShowResult() {
  /* The lenght of the operation is 2 when its ready to be executed because the
  last value is evalueted only when there is text and the button '=' is 
  clicked */
  if (operation.length === 2) {
    operation.push(USER_OPERATION.textContent)
    USER_REGISTER.textContent = operation.join(' ') +  ' ='
    const result = operate()
    USER_OPERATION.textContent = result
    
    if (result === 'BOOM') {
      setTimeout(function() {
        clearNumbers()
      }, 1000)
    } else {
      // The result is set as the first operator, thus setting the lenght to be
      // 1 and recogning values as a chained operation
      operation.splice(0, 3, result)
    }
  }
}

function operate() {
  const [n1, operator, n2] = operation.map((value) => 
    isNaN(+value) ? value : +value
  )

  if (operator === '+') return add(n1, n2)
  else if (operator === '-') return subtract(n1, n2) 
  else if (operator === '*') return multiply(n1, n2)
  else if (operator === '/') return divide(n1, n2)
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
  if (n1 / n2 === Infinity) {
    return 'BOOM'
  }
  return n1 / n2
}
