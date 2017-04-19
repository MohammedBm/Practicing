let todos = ["buy new turtle"];

let input = prompt("What would like to do?")


while (input !== "quit") {

    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        //ask for new todo
        addTodo();
    } else if (input === "delet") {
        deletTodo();
    }
    //handle input
    //ask again for new input
    input = prompt("What would like to do?")

}
console.log("OK,YOU QUIT THE APP");



// Funcitons Show list
function listTodos() {
    console.log("***************");
    todos.forEach(function(todo, i) {
        console.log(i + " : " + todo)
    });
    console.log("***************");
}
//funciton add todo

function addTodo() {
    let newTodo = prompt("Enter a new todo")
    todos.push(newTodo)
    console.log("Added  todo");
}
///function delet todo
function deletTodo() {
    let index = prompt("Enter the index of todo to delet")
    todos.splice(index, 1)
    console.log("Deleted todo" + index);
}
