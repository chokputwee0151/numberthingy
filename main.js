let a = [1,2,3,4,5,6,7]

function sumAll(x){
    sumElements = 0
 for(let i=0; i< x.length; i++){
   sumElements += x[i]
 }
return sumElements
}

function averageArray(x){
  averageElements = 0
  sumElements = 0
 for(let i=0; i< x.length; i++){
   sumElements += x[i]
 }
 averageElements = sumElements/x.length
return averageElements
}

function findBig(x){
    bigger = x[0]
    for(let i = 0; i < a.length; i++){
        if(x[i]>bigger){
            bigger=x[i]
        }
        
}
return bigger
}

function findSmall(x){
    smaller = x[0]
    for(let i = 0; i < a.length; i++){
        if(x[i]<smaller){
            smaller=x[i]
        }
        
}
return smaller
}

console.log(sumAll(a))
console.log(averageArray(a))
console.log(findBig(a))
console.log(findSmall(a))
