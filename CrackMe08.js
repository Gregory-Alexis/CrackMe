let password = '2603423'

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('')
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)
console.log('Grégory'.split('').slice(-3, -1).join('')) // comprendre ce que font les méthodes