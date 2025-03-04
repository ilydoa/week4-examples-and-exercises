/* 
TODO: Write a function called getTriangleArea 
that returns the area of a triangle. It
should take in three parameters.

Requisite math (use * for multiplication):
   s = (sumOfSides) / 2;
   area = √(s(s-a)(s-b)(s-c))
*/
function getTriangleArea(s1, s2, s3){
   let side = s1 + s2 + s3;
   side = side / 2;
   let area = Math.sqrt((side * (side - s1) * (side - s2) * (side - s3)));
   return area;
}

// Run the file and use this to check your work
console.log("getTriangleArea(3,4,5)", getTriangleArea(3,4,5)," (should be 6)")
console.log("getTriangleArea(2,6,7)", getTriangleArea(2,6,7)," (should be ≈5.562)")
console.log("getTriangleArea(9,9,9)", getTriangleArea(9,9,9)," (should be ≈35.074)")
