/* 
TODO: Write a function called checkIfArray 
that:
 - Checks if the parameter is not an array
   using Array.isArray(). If the parameter
   is NOT an array, print "Not an array"
 - OTHERWISE, adds the elements 20 and
   "Is an array" to the end of the array.
 - The function shouldn't return anything.
*/

function checkIfArray(arr){
  if (Array.isArray(arr)){
    arr.push("Is an array")
    arr.push(20)
  }
  else {
    console.log("Not an array")
  }
}

// Run the file and use this to check your work
let a1 = [1, 2, 3];
const a2 = [4, 5, 6];
console.log('checkIfArray(3): (should print out "Not an array")')
checkIfArray(3);

console.log('checkIfArray(a1): (should append 20, "Is an array" to a1)')
checkIfArray(a1);
console.log(a1);

console.log('checkIfArray(a2): (should append 20, "Is an array" to a2)')
checkIfArray(a2);
console.log(a2);
