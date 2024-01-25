// let palin = "radar"

// function strtoarr(x){
//     let arrayPalin = x.split('').join('')
//     let reversedArray = x.split('').reverse().join('')
//     console.log(reversedArray)
//     console.log(arrayPalin)
//     return Boolean(arrayPalin === reversedArray)
// }
    
// console.log(strtoarr(palin))

let palin = "radar"

function strtoarr(x){
    let arrayPalin = x.split('').toString()
    let reversedArray = x.split('').reverse().toString()
    console.log(reversedArray)
    console.log(arrayPalin)
    return Boolean(arrayPalin === reversedArray)
}
    
console.log(strtoarr(palin))
----------------------------------------------------------------
function isPalindrom(word) {
  const chars = [...word] //string to array with spread [...]
  console.log(chars)
  for (let i = 0, j = chars.length - 1; j >= i; i++, j--) {
    if (chars[i] !== chars[j]) return false
  }
  return true
}
console.log(isPalindrom('apple'))
