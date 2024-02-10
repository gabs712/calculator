// limit to 9 characters


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