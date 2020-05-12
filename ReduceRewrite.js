// Declare an array
let arr = [1, 2, 3, 4, 5];

// Rewrite reduce() method - not override
Array.prototype.reduceRewrite = function(cb) {
    //  Declare a variable called sumAllElements
    let sumAllElements = 0;
    //  Iterate through each element
    for (let i = 0; i < this.length; i++) {
        // each for loop, sumAllElements will equal "the sum of the preceding elements" + "the next element of the array"
        // first loop : sumAllElements = sumAllElements + this[0] = 0 + 1 = 1;
        // second loop : sumAllElements = sumAllElements + this[1] = 1 + 2 = 3;
        //  .........
        sumAllElements = cb(sumAllElements, this[i]);
    }
    return sumAllElements;
}

// my rewrite reduce() method
function callback(item1, item2) {
    return item1 + item2;
}

// result 
console.log(arr.reduceRewrite(callback));
