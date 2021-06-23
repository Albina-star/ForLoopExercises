/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
    //a
/*for (let i = 0; i < 21; i++){
//console.log(i);
}
//b
for (let i = 3; i <= 29; i++){
if (i % 2===1){
//console.log(i);
} 
}
//d
for (let i = 50; i >= 20; i-- ){
  if(i % 3===0){
    //console.log(i);
  }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42]. 

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
  //a
//const things = [1, 5, "LC101", "blue", 42];
//for (i = 0; i < things.length; i++){
  //console.log(things[i]);
//}
//another way:
//for (const t of things){
  //console.log(t);
//}
//b
//const name = "LaunchCode";
//for (i = name.length - 1; i >=0; i--)
//console.log(name[i]);
/* b.1 another way
let reverseName = " ";
for (let i = name.length - 1; i >=0; i--){
  reverseName = reverseName + name[i];
  console.log(reverseName);
} */

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  const array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  for (const oddNumbers of array) {
    if (oddNumbers % 2===1)
    console.log(oddNumbers);
  }
  //for (const evenNumbers of array){
  //  console.log(evenNumbers);
  //}