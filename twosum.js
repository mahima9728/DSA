// Problem: Two Sum

// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

// You may assume:

// exactly one solution exists
// you cannot use the same element twice
// Example 1
// Input: nums = [2,7,11,15], target = 9

// Output: [0,1]


console.log('Working...')

function twoSum(array, target) {
    let obj={}
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let needed = target - current
        if (obj[needed] !== undefined){
            return [obj[needed],i]
        }else{
            obj[current]= i
        }
    }
    return [];
}
console.log(twoSum([2,7,11,15],9));
