var itemList = document.querySelector('#items');
// //parent node property
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor ="grey";
// // console.log(itemList.parentNode.parentNode);


// // parentElement Property

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor ="grey";
// console.log(itemList.parentElement.parentElement);

// //Children Property

// // console.log(itemList.childNodes);
// //You will get a text node whihc is basically white space
// //You can aslos use children to prevent

// // console.log(itemList.children);
// // console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor ="Yellow";

// //First Child

// console.log(itemList.firstChild) //it will alos include whitespace

// //FirstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent="Learn do hard work";

// console.log(itemList.lastChild)

// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent ="Ths is the last child of items"



// //Siblings

// coonsole.log(itemList.nextSibling);
// //Again it will give text node if any

// console.log(itemList.nextElementSibling);
// console.log(itemList.nextElementSibling);


// //previous Sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling)

// itemList.previousElementSibling.style.color ="green";




// Creating DOM Nodes/Elements

//create Div

let newDiv = document.createElement('div');
console.log(newDiv)
newDiv.className="hello";
newDiv.id ="firstdiv"

//ADD ATTRIBUTE
newDiv.setAttribute('title',"Helllo Div");
console.log(newDiv)

//ADD Content
//create text node
var newDivText = document.createTextNode("HEllo word");
newDiv.appendChild(newDivText)
console.log(newDiv)

//Its only inside javascript
//to put it inside DOM

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1)

newDiv.style.fontSize ='100px';

var itemsList = document.querySelector("header #items");
var item1 = document.querySelector("header .list-group-item");

let secondDiv =  document.createElement("div");
secondDiv.className ="second";
var newItem =document.createTextNode("HELlo world");
secondDiv.appendChild(newItem);
itemList.insertBefore(newItem,item1);





