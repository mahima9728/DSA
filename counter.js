console.log("Working...");

// closures

function outer() {
    let count =0 ;
    return function inner() {
        count++;
        return count;
    }
    inner();
}
const counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
