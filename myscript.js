

// 2) create variables for the HTML elements

let elInput = document.getElementById("elInput");
let btnAddFruit = document.getElementById("btnAddFruit");
let parentList = document.getElementById("parentList");

btnAddFruit.addEventListener("click", checkLength);

// 3) create the following function and test it: 

function checkLength() {
    let word = elInput.value;
    if (word.length <= 1) {
        alert("sorry, you need to add a fruit");
    } else {
        addNewListItem();
        elInput.value = "";
    }
}

// 4) create the following function: 

// function addNewListItem() {
//     let newListItem = document.createElement("li");
//     newListItem.innerText = elInput.value;
//     parentList.appendChild(newListItem);

// }

// 5) add more to nr 4 function: 

function addNewListItem() {
    let newDiv = document.createElement("div");
    parentList.appendChild(newDiv);

    let newListItem = document.createElement("li");
    newListItem.innerText = elInput.value;
    parentList.appendChild(newListItem);
    newDiv.appendChild(newListItem);
    

    let newButton = document.createElement("button");
    newButton.innerText = "remove";
    newButton.classList.add("delete_button");
    newListItem.appendChild(newButton); 
// 10.5
    // let deleteButtons = document.querySelector(".delete_button");
    // deleteButtons.addEventListener("click", testingDelButtons);

// 11.5
    
    document.querySelectorAll(".delete_button").forEach(function(deleteButton){
        deleteButton.addEventListener("click", testingDelButtons);
    })

}

// 6) i added a class to the delete button so I can query select all. and give them an universal function of deleting the selected button. 
// need to think about this.
// 7) added elInput.value = ""; and css overflow-y. 

// 8) trying the querySelector now



// let deleteButtons = document.querySelector(".delete_button")
// deleteButtons.addEventListener("click", testingDelButtons);

function testingDelButtons(){
    console.log("123");
}

// 9) error: Cannot read property 'addEventListener' of null. I will put nr 8 in a function. 

// 10) now it works. so I need to make a function to delete the parent (div);
// 11) 10 was working only for the first element so I had to do forEach. 




