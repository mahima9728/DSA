// Interview wording:

// “Given an array of integers, move all zeroes to the end while maintaining the relative order of non-zero elements.”

// Example: [0,1,0,3,12] Output: [1,3,12,0,0]

// solution: this is a two pointer pattern in this i m goin to run a loop in which one pointer points to the numbers and another for pointing where to go if a number is non zero swap it all 0 will go in the end

function moveZero(array) {
    let j=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            [array[i],array[j]]=[array[j],array[i]]
            j++;
        }
    }
    return array;
}
console.log(moveZero([0,1,0,3,12]));
