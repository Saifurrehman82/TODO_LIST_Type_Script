import inquirer from "inquirer";
//inquirer     done
//array        done 
//function
//operators
let todos = ["Hammad", "Talha"];
async function createToDo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "update", "view", "delete"],
        });
        if (ans.select == "Add") {
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            todos.push(addtodo.todo);
            console.log(todos);
        }
        if (ans.select == "update") {
            let updatetodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updatetodo.todo);
            todos = [...newTodo, addtodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log("****TO DO LIST****");
            console.log(todos);
            console.log("******************");
        }
        if (ans.select == "delete") {
            let deletetodo = await inquirer.prompt({
                type: "list",
                message: "delete items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deletetodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createToDo(todos);
