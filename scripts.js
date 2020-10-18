var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

/* function itemLength () {
    return item.length;
} */

//To create, Mark and delete list
function createList() {
    //To create list items
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    // addListElements();
    //To mark completed task
    function taskCompleted(){
    li.classList.toggle("done");
    }

    li.addEventListener("click", taskCompleted );

    //To delete List
    var createDelButton = document.createElement("button");
    createDelButton.appendChild(document.createTextNode("X"));
    li.appendChild(createDelButton);
    createDelButton.addEventListener("click", deleteListItem);
    
    function deleteListItem() {
        li.classList.add("delete");
    }

/* 
    function itemLength () {
        return listItems.length;
    
    function dailyTask () {
        if (itemLength () > 5){
            alert ("Enough Task for today");
        }
    }
    dailyTask(); */
}



function addListElements() {
    if (inputLength() > 0) {
        createList();
    }
    else{
        alert('Please enter a task. ')
    }
}

function keyboardkeyEnter (event) {
    if (inputLength() > 0 && event.which ===13) {
        createList()
    }
    // else{
    //     alert('Please enter a task. ')
    // }
}


enterButton.addEventListener("click", addListElements);

input.addEventListener("keypress", keyboardkeyEnter);
