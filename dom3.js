var from = document.getElementById('addForm');

var itemList = document.getElementById('items')

//From Submit Event
from.addEventListener('submit',addItem);

//Delete Event
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();

    // Delete Event 
    //Get Input Value
    var newItem = document.getElementById('item').value;

    //Create new li Element
    var li =document.createElement('li');
    //Add class name to id
    li.className ='list-group-item';
    
    //Add Text Node with Input Value
    li.appendChild(document.createTextNode(newItem));
    
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
    editBtn.style.marginLeft = "2%";

    editBtn.appendChild(document.createTextNode("Edit"));

    // deleteBtn.insertAdjacentElement('afterend', editBtn);
    li.insertBefore(editBtn,deleteBtn)

}