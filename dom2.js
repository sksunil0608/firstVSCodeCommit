// GET ELEMENT BY CLASSS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1])

// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight ="bold";
// items[1].style.backgroundColor ="yellow";
//We simply can't do this directly
// items.style.backgroundColor="#fffff"

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor="grey"
//     items[i].style.fontWeight ="bold";
// }
// items[2].style.backgroundColor ='green';


// GET ELEMENT BY TAG NAME
var items = document.getElementsByTagName('li');
console.log(items)
console.log(items[1])

items[1].textContent = 'Hello 2'
items[1].style.fontWeight ="bold";
items[1].style.backgroundColor ="yellow";
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor="grey"
    items[i].style.fontWeight ="bold";
}
items[2].style.backgroundColor ='green';

var header =document.querySelector('#main-header')
header.style.borderBottom ="solid 10px blue";

var input = document.querySelector('input');
input.value ="Hello World";
//Applied on the first input by defalt, for next you can write this twice

var submit = document.querySelector('input[type="submit"]');
submit.value ="SEND";
var item = document.querySelector('.list-group-item')
item.style.color ="red";
item.style.backgroundColor="blue";

var lastItem = document.querySelector
('.list-group-item:last-child');

lastItem.style.color ="yellow";
console.log(lastItem)
var secondItem = document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.color="orange"

