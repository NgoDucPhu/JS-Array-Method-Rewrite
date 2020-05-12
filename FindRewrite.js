//  Declare an array
let arr = [1, 2, 3, 4, 5];

// Rewrite find() method - not override
Array.prototype.findRewrite = function(callback) {
    let newArr = [];
    // Iterate through each element
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

//  callback
function check(item) {
    return item > 4;
}
// result
console.log(arr.findRewrite(check));
