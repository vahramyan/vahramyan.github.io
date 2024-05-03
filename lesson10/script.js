"use strict"
// let hour = new Date().getHours();

// if (hour < 12) {
//     console.dir("Good morning!");
// } else if (hour < 18) {
//     console.dir("Good afternoon!");
// } else {
//     console.dir("Good evening!");
// }
                    
// While loop
// let count = 0;

// while (count < 5) {
//     console.log(count);
//     count++;
// }

// // Do-While loop
// let number;

// do {
//     number = prompt("Enter a number greater than 10");
// } while (number <= 10);                
                    


// for (let i = 0; i < 10; i++) {
//     console.log(i); // Outputs numbers from 0 to 9
// }                        
                    

 let numbers = [1,2,3,50,60,30,66,150,30,90]
let target = 30;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        found = true;
        break;
    }
}
console.log(`Target ${target} found: ${found}`);
