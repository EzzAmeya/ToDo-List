
// To variables inputBox and listCont

const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

//  Adding Click Function 
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");  // Giving an output of alert
    }
    else{

        let li = document.createElement("li"); // Creating an element with the name of (li)
        
        li.innerHTML = inputBox.value; // Text which is written in the input box will be added in the list
         
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

listCont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listCont.innerHTML);
}

function showData(){
    listCont.innerHTML = localStorage.getItem("data");
}
showData();