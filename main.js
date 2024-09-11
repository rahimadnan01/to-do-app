import ToDoList from "./todolist";
import ToDoItem from "./todoitem"

const todolist = new ToDoList();

// launch App
document.addEventListener("readystatechange",()=>{
    if(event.target.readyState == "complete"){
        initApp()
    }
})

// add listeners

const initApp = ()=>{
    refreshThePage();
}

const refreshThePage = ()=>{
    clearListDisplayed();
};

const clearListDisplayed = ()=>{
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
}

const deleteContents = (parentElement)=>{
    let child = parentElement.lastElementChild
    while(child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}