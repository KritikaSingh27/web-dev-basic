function largeNums(arr,num){
    for(let i of arr){
        if(arr[i]>num){
            console.log(arr[i]);
            i++;
        }
    }
}

function getUnique(str){
    let ans = '';
    for(word of str){
        let currChar = str[word];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

function longestName(arr){
    let idx = 0;
    for(let i of arr){
        currLen = arr[idx].length;
        ansLen = arr[i].length;
        if(currLen > ansLen){
            idx = i;
        }
    }
}

function generateRandom(start , end){
    let range = end - start;
    return Math.floor(Math.random() * range) + start;
}

let square = arr.foreach((el) => el*el);
console.log(square);
let sum = square.reduce((num,curr) => num + curr, 0);
console.log(sum);
let avg = sum/arr.length;
console.log(avg);

let plusFive = arr.map(function(n){
    return n+5;
});

console.log(strings.map((string) => string.toUpperCase()));

