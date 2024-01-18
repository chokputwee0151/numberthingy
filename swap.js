a = 10
b = 20

function swap(x,y){
[x,y] = [y,x]
return ['first value = '+x,'second value = '+y]
}
console.log(swap(a,b))