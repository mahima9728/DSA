console.log('DSA Practice...');

// Question 1

// “You are given an array of integers. Every number appears twice except one number. Find the unique number.”

// Example: [1,2,3,1,2] =>  Output:3

// solution : hashmap lookup solution we need to store the data and then check frequency if it appears one then return that num

function uniqueNum(array) {
    let obj={};
    // let newarr=[];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
        if (obj[element] !== undefined) {
            obj[element]+=1;
        } else {
             obj[element]=1;
        }
    }
    for(let key in obj){
    if (obj[key] === 1) {
        return Number(key)
    }}
    return null;
}
console.log("unique ELement:", uniqueNum([1,2,3,1,2]));
// console.log("unique ELement:", uniqueNum([1,2,3,1,2,4]));
