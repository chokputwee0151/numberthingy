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
