// Daily 3 practice questions

// 1:validparantheses
// Solution:  {}[()] => true and  {[)} => false see if the string is opening bracket if yes push into the stack and if no then check whether its followed by closing bracket if yes push if no return false 

function validparantheses(string) {
    let stack =[];
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else if (stack.length === 0) {
            return null
        }else{
            let top = stack[stack.length-1];
            if (char === ')' && top === '(' ||char === '}' && top === '{' ||char === ']' && top === '[') {
                stack.pop()
            } else {
                return false
            }
        }
        
    }
    return stack.length === 0;
}

console.log("Valid Parantheses", validparantheses('{}[]()'));
console.log("Valid Parantheses", validparantheses('{}[)'));
console.log("Valid Parantheses", validparantheses('{}[]'));
console.log("Valid Parantheses", validparantheses('{}[]th'));


// 2:Recursion => Sum of Array
// solution = using recursion method because we need to divide th problem into smaller sub problems

function sumOfArray(array, index=0) {
    if (index === array.length) {
        return 0;
    }
    else{
        // return array[0]+sumOfArray(array.slice(1))

        return array[index]+sumOfArray(array, index+1)
    }
}

console.log("sum of array",sumOfArray([1,2,3,4,5]));


// 3:Longest substring without repeating a character
// solution: pattern : sliding window we wanna make sure that left and right window elements are not same 

function longestSubString(string) {
    
    let left =0;
    let maxlength=0;
    let substring='';
    let set= new Set();

    for (let right = 0; right < string.length; right++) {

        while (set.has(string[right])) {
            set.delete(string[left])
            left++
        }
        set.add(string[right])

        if (right-left+1 > maxlength) {
            maxlength= right-left+1;
            substring=string.slice(left, right+1)
        }
        
    }
    return[maxlength, substring];
}

console.log('longestSubString',longestSubString('abtravsvsgddf'));
console.log(longestSubString('abcedfghtravsvsgddf'));


// Reverse a string Recusively //
// Example:
// "hello" => "olleh"
//
// Goal:
// strengthen recursion return flow


function reverseaString(string, index =string.length-1) {
    if (index  < 0) {
        return '';
    } else {
        return string[index]+ reverseaString(string, index-1);
    }
}
console.log('Reverse a String', reverseaString('Hello'));

// without recursion

function reverse(string) {
    let stringchar=''
    for (let i = string.length-1; i >=0 ; i--) {
        const char = string[i];
        stringchar= stringchar+char;
    }
    return stringchar;
}
console.log(reverse('apple'));

