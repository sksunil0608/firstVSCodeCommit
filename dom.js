//Example of Documnet Object
// console.dir(document)

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title)
// document.title =123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all[10]);
// document.all[10].textContent = "Hello how are you?"

// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images)

// //Selectors
// //getElementById

// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title')
// console.log(headerTitle)
// headerTitle.textContent = "Sunil"
// headerTitle.innerHTML ="GoodBye"
// console.log(headerTitle.innerText)

// headerTitle.innerHTML ="<h3> hello</h3>"

// headerTitle.style.borderBottom ='solid 3px yellow'

var header = document.getElementById('main-header');
header.style.borderBottom ='solid 5px black';

var title = document.getElementById('title');
title.style.fontWeight="900"
title.style.color ="green"