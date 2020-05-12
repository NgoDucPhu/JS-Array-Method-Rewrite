// Declare an array
let arr = [1, 3, 4, 2, 5];

// rewrite sort() method - not override
Array.prototype.sortRewrite = function() {
    // Declare a new array to not change the arr array 
    let newArr = [...arr];
    let temp;
    // Iterate through each element
    // Use Selection Sort 

    // Sort in ascending order
    for(let i = 0; i < newArr.length-1; i++) {
        for(let j = i + 1; j < newArr.length; j++) {
            if(newArr[i] > newArr[j]) {
                temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    // result
    return newArr;
}

console.log(arr.sortRewrite());
