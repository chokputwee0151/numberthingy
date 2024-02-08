// document.getElementById - Single Node
// document.getElementsByClassName - HTMLCollection
// document.getElementsByTagName - HTMLCollection
// document.querySelector - First match Single Node
// document.querySelectorAll -All match (NodeList Collection)
//children - get child element node types (HTMLCollection)
// childNodes - get child node (every node type) (NodeList)

//Array Like - NodeList implement forEach
//Array Like - HTMLCollection does not implement forEach, using Array.from(HTMLColloction) when use forEach

// 1.query <div><p>...</p></div>
const divElementV1 = document.getElementsByTagName('div')
console.log(divElementV1)
console.log(divElementV1[1])

//get <div>' s children-HTMLCollection
const divV1Children = divElementV1[1].children
console.log(divV1Children)
Array.from(divV1Children).forEach((element) => {
  console.log(element)
})

const divElementV2 = document.querySelectorAll('div')
//NodeList
console.log(divElementV2)
//its children returns HTMLCollection

Array.from(divElementV2[1].children).forEach((element) => {
  console.log(element)
})

const divElementV3 = document.querySelector('div.faculty')
console.log(divElementV3)

const divElementV4 = document.querySelector('div#div-faculty')
console.log(divElementV4)

Array.from(divElementV4.children).forEach((element) => {
  console.log(element)
})

//2. query <p> under <div class="faculty" id="div-faculty">

const pElements = document.querySelectorAll('div.faculty>p')
console.log(pElements)
pElements.forEach((element) => {
  console.log(element)
})

const getTheCourse = document.getElementById('courses')
console.log(getTheCourse)

const lecturerElement = document.getElementsByClassName('lecturer')
console.log(lecturerElement)

const getAllButtons = document.getElementsByTagName('button')
console.log(getAllButtons)

const getLiUnderCourses = getTheCourse.children
console.log(getLiUnderCourses)

const get1stLiUnderCourses = getTheCourse.children[0]
console.log(get1stLiUnderCourses)