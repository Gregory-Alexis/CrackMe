let password = '4321drowssap'

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') { // password à l'envers
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)