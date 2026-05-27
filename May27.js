console.log('Working...');

// “Reverse a string using recursion.”
//
// Example:
// "hello" => "olleh"
//
// Pattern:
// Recursion

function stringReverse(string) {
    let newstr='';
    for (let i = string.length-1; i >=0 ; i--) {
        const char = string[i];
        newstr+=char;
    }
    return newstr
}
console.log(stringReverse('Hello'));


function reverse(string , index = string.length-1) {
    
    if (index < 0) {
        return ''
    }
    else{
        return string[index] + reverse(string, index-1)
    }
}
console.log('Using Recursion:', reverse('Apple'));
console.log('Using Recursion:', reverse('banana'));


//
// Example:
// "madam" => true
//
// Goal:
// strengthen recursion shrinking intuition
//

function reversingaString(string, index= string.length-1) {
    if (index<0) {
        return ''
    }else{
        return string[index]+ reversingaString(string, index-1);
    }
}
function palindrome(string) {
    let original = string.toLowerCase();
    let reversed= reversingaString(original)

    return original === reversed
}
console.log('Reversing A string For palindrome : ', palindrome('Car'));
console.log('Reversing A string For palindrome : ', palindrome('Hannah'));

// Interview wording:
//
// “Return all possible subsets of an array.”
//
// Example:
// [1,2]
//
// Output:
// []
// [1]
// [2]
// [1,2]


function subset(array) {
    let result =[];

    function backtrack(start, path) {
        
        result.push([...path]);

        for (let i = start; i < array.length; i++) {
            
            // Choose
            path.push(array[i])

            // Explore
            backtrack(i+1, path)

            // Unchoose
            path.pop()
            
        }
    }
    backtrack(0,[])

    return result;
}

console.log('Subset', subset([1,2]));


// subset of string

function subsetOfString(string) {
    let result=[];

    function backtrack(start, path) {
        result.push(path.join())

        for (let i = start; i < string.length; i++) {
            
            // choose
            path.push(string[i])
            // explore
            backtrack(i+1, path)
            // unchoose
            path.pop()
        }
    }
    backtrack(0,[]);
    return result
}

console.log(subsetOfString('Abc'));
