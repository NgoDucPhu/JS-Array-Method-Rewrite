// Declare an array
let arr = [1, 2, 3, 4];

//  Rewrite Map() method - not override
Array.prototype.mapRewrite = function(callback) {
    let newArr = [];

    //  Iterate through each element
    for(let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]));
    }
    return newArr;
}

// square the elements
function squareTheElements(element) {
    return element * element;
}

// result
console.log(arr.mapRewrite(squareTheElements));
