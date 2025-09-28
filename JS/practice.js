let arr = [1,2,3,4,5,6,2,3];
while(true){
    let ch = prompt("Enter your choice:");
    if(ch==1){
        console.log("-------------------------------------------------");
        for(element of arr){
            console.log(element);
        }
        console.log("-------------------------------------------------");
    }
    else if(ch==2){
        let num = prompt("Enter number you want to remove from the array");
        for(let i=0; i<arr.length; i++){
            if(arr[i] == num){
                arr.splice(i,1);
            }
        }
    }

    else if(ch == 3){
        let num = prompt("Enter a number");
        let count = 0;
        let copy = num;
        while(copy > 0){
            count++;
            copy = Math.floor(copy/10);
        }
        console.log(`The number of digits in the given number is: ${count}`);
    }

    else if(ch == 4){
        let num = prompt("Enter a number");
        let sum = 0;
        let copy = num;
        while(copy > 0){
            digit = copy % 10;
            sum += digit;
            copy = Math.floor(copy/10);
        }
        console.log(`The sum of digits in the given number is: ${sum}`);
    }

    else if(ch == 5){
        let num = prompt("Enter a number");
        let fact = 1;
        let copy = num;
        for(let i=num; i>0; i--){
            fact *= i;
        }
        console.log(`The factorial of the given number is: ${fact}`);
    }

    else if(ch == 6){
        let largest = 0;
        for(let i=0; i<arr.length; i++){``
            if(arr[i]>largest){
                largest = arr[i];
            }
        }
        console.log(`The largest number in the given array is: ${largest}`);
    }
    else if(ch==7){
        console.log("Exiting the program");
        break;
    }
    else{
        console.log("Invalid choice!!!");
        ch = prompt("Enter your choice correctly");
    }
}