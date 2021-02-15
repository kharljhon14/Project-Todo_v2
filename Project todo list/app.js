const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoUl = document.querySelector(".todo-list")
//functions

function createContainer() {
    //new Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //new Li
    const newLi = document.createElement("li");
    newLi.classList.add("todo-li")
    todoDiv.appendChild(newLi);
    const newH3 = document.createElement("h3")
    newH3.classList.add("todo-h3");
    newH3.innerText = todoInput.value;
    newLi.appendChild(newH3)
    //check button
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkButton);
    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    todoDiv.appendChild(deleteButton);
    //append to the ul
    todoUl.appendChild(todoDiv);
    todoInput.value = "";
}

function checkDelete(evt) {
    const item = evt.target;
    //delete todo
    if (item.classList[0] === "delete-button") {
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        //Delete listener
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }
    //check todo
    if(item.classList[0] === "check-button"){
        const todo = item.parentElement;
        todo.classList.toggle("checked");
    }
}

//event listener

todoBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    createContainer();
})

todoUl.addEventListener("click", checkDelete);