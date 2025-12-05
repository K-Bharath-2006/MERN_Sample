let txt = document.querySelector("#text");
function changeText(){
    txt.textContent = "Text has been Changed ...";
}

let box = document.querySelector("#box");

function changeColor(){    
    if(box.style.backgroundColor === "rgb(221, 221, 221)"){
        box.style.backgroundColor = "grey";
    }
    else{
        box.style.backgroundColor = "#ddd"
    }
}

function hideBox(){
    box.style.display = "none";
}
function showBox(){
    box.style.display = "flex";
}


let inputText = document.querySelector("#itemInput");
let ul = document.querySelector("#list");
function addItem(){
    let li = document.createElement("li");
    li.textContent = inputText.value;
    ul.appendChild(li);
}