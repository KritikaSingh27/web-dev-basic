let todo = [];
let ch = prompt("Please enter your choice");

while(true){
    if(ch == "list"){
        console.log("----------------------------------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i+1 , todo[i]);
        }
        console.log("----------------------------------------------");
    }
    else if(ch == "add"){
        let task = prompt("Enter a task to add");
        todo.push(task);
        console.log("Task added");
    }
    else if(ch == "delete"){
        let n = prompt("Enter the task number you want to delete");
        if(n<=todo.length && n!=0){
            todo.splice(n-1,1);
            console.log("Task is deleted");
        }
        else{
            console.log("Invalid Task number");
            n = prompt("Enter correct task number");
        }
        
    }
    else if(ch == "exit"){
        break;
    }
    else{
        console.log("Invalid entry!!!");
        ch = prompt("Enter again");
    }
    ch = prompt("Enter what do you want to do next");
}
console.log(ch);
