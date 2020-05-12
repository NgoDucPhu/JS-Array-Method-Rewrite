// Declare an array
let arr = [1, 2, 3, 4, 5, 6];

//  Rewrite Array filter() method - not override
Array.prototype.filterRewrite = function(callback) {
    let newArr = [];
    // iterate through each element
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}
//  Test my rewrite filter() method
function checkItem(item) {
    return item  % 2 == 0 ;
}

// result
console.log(arr.filterRewrite(checkItem));