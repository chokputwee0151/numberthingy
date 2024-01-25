let book1 = {isbn:"1-23-4", title:"js", author:"us", pages:"300"}
let book2 = {isbn:'5-67-8',title:'java'}

function merge(b1,b2){
    let newbook ={...b1,...b2}
    return newbook
}

console.log(merge(book1, book2))