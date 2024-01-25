const x = [1,0,2,3,4,5,7]

function findMin(array){
    let min = array[0]
    array.forEach((num)=>{
        if(num <min) min = num
    })
    return min;
}
function findMax(array){
    let max = array[0]
    array.forEach((num)=>{
        if(num >max) max = num
    })
    return max;
}
console.log(findMin(x))
console.log(findMax(x))

// let min = x[0]
// x.forEach((num)=>{
//     if(num <min) min = num

// })
// console.log(min)