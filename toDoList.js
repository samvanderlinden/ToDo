var todos = ["Buy a dog"];

var input = prompt("What would you like to do?");

while(input !== "Quit") {
    //handle input
    if(input === "List") {
        listTodos();
}   else if(input === "New") {
        addTodo();
}   else if(input === "Delete") {
        deleteTodo();
}
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, you quit the App");

function listTodos (){
    console.log("**********")
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********")
}

function addTodo() {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo() {
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice()
    todos.splice(index,1);
    console.log("Deleted Todo");
}
