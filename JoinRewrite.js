// Declare an array 
let arr = ['Xin', "Chao", "Cac", "Ban"];
//This optional parameter indicates a string of characters to separate each element of the array
//Default, if we don't pass any parameter to funtion, separator is comma.

Array.prototype.joinRewrite = function(separator = ',') {
    // Declare a new String 
    let str = '';
    // Iterate through each element
    for(let i = 0; i < this.length; i++) {
        // No separator behind the last element !
        if(i == this.length-1) {
            str += this[i];
        } else {
            str += this[i] + separator;
        }
    }
    // After concat all elements in array, we will return a String
    return str;
}

// result
console.log(arr.joinRewrite(' ')); // Separator is a empty String