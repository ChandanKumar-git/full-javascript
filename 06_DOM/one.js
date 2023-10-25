/**ALL the below code are tested on browser console */

// one.html:47 Live reload enabled.
// document.getElementById('title')
// <h1 id=​"title" class=​"heading">​DOM Learning on chai or code​</h1>​
// document.getElementById('title').id
// 'title'
// document.getElementById('title').class
// undefined
// document.getElementById('title').className
// 'heading'
// document.getElementById('title').getAttribute
// ƒ getAttribute() { [native code] }
// document.getElementById('title').get
// undefined
// document.getElementById('title').setAttribute('class','test')
// undefined
// const title= document.getElementById('title')
// undefined
// clear
// ƒ clear() { [native code] }
// title
// <h1 id=​"title" class=​"test">​DOM Learning on chai or code​</h1>​
// title.style.backgroundColor = 'yellow'
// 'yellow'
// title.text
// undefined
// title
// <h1 id=​"title" class=​"test" style=​"background-color:​ yellow;​">​DOM Learning on chai or code​</h1>​
// title
// <h1 id=​"title" class=​"test" style=​"background-color:​ yellow;​">​DOM Learning on chai or code​</h1>​
// title.text
// undefined
// document.getElementById('title').setAttribute('class', 'test heading')
// undefined
// document.getElementById('title')
// <h1 id=​"title" class=​"test heading" style=​"background-color:​ yellow;​">​DOM Learning on chai or code​</h1>​
// const title=document.getElementById('title')
// undefined
// title
// <h1 id=​"title" class=​"test heading" style=​"background-color:​ yellow;​">​DOM Learning on chai or code​</h1>​
// title.style.backgroundColor = 'green'
// 'green'
// title.style.padding = "15px"
// '15px'
// title.style
// CSSStyleDeclaration {0: 'background-color', 1: 'padding-top', 2: 'padding-right', 3: 'padding-bottom', 4: 'padding-left', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
// title.style.borderradi
// undefined
// title.style.borderRadious = "15px"
// '15px'
// title.style.borderRadius = "15px"
// '15px'
// title.textContent
// 'DOM Learning on chai or code'
// title.innerHTML
// 'DOM Learning on chai or code'
// title.innerText
// 'DOM Learning on chai or code'



// //*** innerText show the value which is display on screen it is not show the value which are hidden or none balue.

// /** innerContent is showing the value which is available in html but by some modification the value is hidden or non.

// //** innerHTML showing whole value even tag and all.


// ////////////////////////////////////////////

// document
// #document
// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit​</h2>​

// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('input[type="password"]')
// null

// document.querySelector('ul')
// <ul>​…​</ul>​<li>​…​</li>​::marker​"one"</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

// const myul = document.querySelector('ul')
// undefined

// myul.querySelector('li')
// <li>​…​</li>​::marker​"one"</li>​

// const trunGreen = myul.querySelector('li')
// undefined

// trunGreen.style.backgroundColor = "green"
// 'green'

// trunGreen.style.padding = "10px"
// '10px'

// trunGreen.innerText ="change one to five"
// 'change one to five'

// /////////////////querySelectorAll///////////



// ##NodeList and HTML Colection are not a pure array, because in array bydefault map are available.// check prototype of array in console.

// document.querySelectorAll
// ƒ querySelectorAll() { [native code] }

// document.querySelectorAll('li')
// NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: 
// NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object


// const tempLiList = document.querySelectorAll('li')
// undefined

// tempLiList
// NodeList(3) [li, li, li]

// tempLiList.style.color = 'green'
// VM3733:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:24
// (anonymous) @ VM3733:1

// tempLiList[0].style.color = 'green'
// 'green'

// const myH1 = document.querySelectorAll('h1')
// undefined

// myH1.style.color = 'green'
// VM3973:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:18
// (anonymous) @ VM3973:1

// myH1[0].style.color = 'green'
// 'green'

// tempLiList.forEach(function (l) {
//     l.style.backgroundColor ='orange'
// })



// /////////////////////////////////////////////////////////////////


// document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()


// const tempClassList = document.getElementsByClassName('list-item')
// undefined


// tempClassList
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]


// tempClassList.forEach(function (l) {
//     log
// })
// VM4462:1 Uncaught TypeError: tempClassList.forEach is not a function
//     at <anonymous>:1:15
// (anonymous) @ VM4462:1


// tempClassList.forEach(function (l) {
//     console.log(l)
// })
// VM4498:1 Uncaught TypeError: tempClassList.forEach is not a function
//     at <anonymous>:1:15
// (anonymous) @ VM4498:1


// tempClassList
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
 
// ///////convert NodeList to array


// Array.from(tempClassList)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object


// const myConvertedArr = Array.from(tempClassList)
// undefined


// myConvertedArr
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]

// myConvertedArr.forEach(function (li) {
//     li.style.color = 'orange'
// })
// undefined