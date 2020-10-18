var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

//Create list
function createList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function marked(){
        li.classList.toggle("done");
    }
    
}

function addListOnClick() {
    if (inputLength() > 0) {
        createList();
    }
}

enterButton.addEventListener("click", addListOnClick);



