var form = document.getElementById('addForm');

var itemList = document.getElementById('items')


// Add Edit button in the previous Elements
var allItems = document.querySelectorAll('.list-group-item')

for(let i = 0;i<allItems.length;i++){
    let editBtn = document.createElement('button');
    editBtn.className ='btn btn-info btn-sm float-right';
    editBtn.style.marginRight = "2%";
    editBtn.appendChild(document.createTextNode("Edit"));
    allItems[i].appendChild(editBtn)
}


// Add description box
let descBox = document.createElement('input');
descBox.className = "form-control mr-2"
descBox.id="desc";
descBox.type ="text";

form.insertBefore(descBox,document.getElementById('submit'))


var filter = document.getElementById('filter');
//form Submit Event
form.addEventListener('submit',addItem);

//Delete Event
itemList.addEventListener('click',removeItem);

//Filter Event
filter.addEventListener('keyup',filterItems);


function addItem(e){
    e.preventDefault();

    // Delete Event 
    //Get Input Value
    var newItem = document.getElementById('item').value;
    //get desc
    var newDesc = document.getElementById('desc').value; 

    
    //Create new li Element
    var li =document.createElement('li');
    //Add class name to id
    li.className ='list-group-item';

    //Add Text Node with Input Value
    // newContent = `${newItem} ${newDesc}`
    // li.appendChild(document.createTextNode(newContent));
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDesc));
    
    //Delete Button Element
    var deleteBtn = document.createElement('button');

    //Add classes and ids to button
    deleteBtn.className ='btn btn-danger btn-sm float-right delete'
    //Append Text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    //to add this on submit
    li.appendChild(deleteBtn)
    itemList.appendChild(li)
    EditItem(li,deleteBtn)
    
    
}

//Function Remvoe Item
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if (confirm("Are you sure want to delte?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Edit Functionality
function EditItem(li,deleteBtn){

    let editBtn = document.createElement('button');
    editBtn.className ='btn btn-info btn-sm float-right';
    editBtn.style.marginRight = "2%";
    editBtn.appendChild(document.createTextNode("Edit"));

    // deleteBtn.insertAdjacentElement('afterend', editBtn);
    // li.insertBefore(editBtn,deleteBtn)
    li.appendChild(editBtn)

}

//Filter items

function filterItems(e){
    //convert text tp lowercase
    var text = e.target.value.toLowerCase();
    items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
        var itemName1 = item.firstChild.textContent;
        var itemName2 = item.firstChild.nextSibling.textContent;
        itemName = itemName1 + itemName2
        if (itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display ='block'
        }
        else{
            item.style.display ="none";
        }
    });

}

