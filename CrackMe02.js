let password = '*'

const crackme2 = (password) => {
  if (password.length === 1) { // N'importe quelle entrée tant qu'il n'y a pas plus de 1 chiffre, lettre ou caractère
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme2(password)