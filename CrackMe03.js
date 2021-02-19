let password = '@bc!123abc123M'

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {// Si la longueur du tableau est égale à '14' et que l'index 0 est '@' est que l'index 3 est égale à '!'
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)
