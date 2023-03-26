//read 5 nums and print even only
let count = 0;
let  num;

while( count < 5 ){
   num = parseInt(prompt("Enter a number:"));
    if ( num % 2 === 0 ){
        console.log(num+ "is even.");
    }
    count++;
}