function twoSum(array, target) {
    let obj={}
    
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        let needed= target - current;
        
        if (obj[needed] !== undefined) {
            return [needed, current]
        }else{
            obj[current]=true
        }
    }
    return null;
}

console.log('Two Sum', twoSum([2,3,4,5,6,7,8],9));
