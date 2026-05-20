console.log('Working...');

// sliding window return a substring without repeating characters
// return lenght as well as substrings also.

function longestSubstring(string) {
    let maxlength=0;
    let left=0;
    let set= new Set();
    let substring=''

    for (let right = 0; right < string.length; right++) {
        while (set.has(string[right])) {
            set.delete(string[left])
            left++;
        } 
        
        set.add(string[right])
        if (right-left+1 > maxlength) {
            maxlength= right-left+1;
            substring = string.slice(left, right+1)
        }
        
    }
    return [maxlength , substring]
}
console.log('longestSubstring',longestSubstring('abcedfabced'));
console.log('longestSubstring',longestSubstring('abcedfjkluabced'));


// stack valid parantheses question 

function validParantheses(string) {
    let stack=[];

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }else if (stack.length === 0) {
            return 'Invalid'
        }else{
            let top= stack[stack.length-1]
            if (char === ')' && top === '(' ||char === ']' && top === '[' ||char === '}' && top === '{') {
                stack.pop()
            } else {
                return `Unbalanced string`
            }
        }
    }
    return 'Balanced string'
}

console.log('validParantheses',validParantheses('{}[]()'));
console.log('validParantheses',validParantheses('{}[)'));

// frequencycounter first non repeating character
function firstuniquechar(string) {
    let obj={}

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (obj[char] !== undefined) {
            obj[char]+=1;
        }else{
            obj[char]=1;
        }
    }
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (obj[char] === 1) {
            return char
        }
    }
    return null;
}

console.log('firstuniquechar', firstuniquechar('aaccddeffgghhi'));


// group by role 

function groupByrole(array) {
    let obj={}
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (obj[element.role] === undefined) {
            obj[element.role]=[]
        }
        if (obj[element.role].includes(element.name)) {
            continue;
        } else {
            obj[element.role].push(element.name)
        }
    }
    return obj;
}
console.log('groupByrole', groupByrole([
{ name: "blue", role: "Developer" },
{ name: "april", role: "Designer" },
{ name: "summer", role: "Developer" },
{ name: "sky", role: "Manager" },
{ name: "rain", role: "Designer" }
]));


// counter 
function counter() {
    let count=0;

    return {
        increment : function() {
            count++
            return count;
        },
          decrement : function() {
            count--
            return count;
        }
    }

}
const Counterfn=counter();

console.log(Counterfn.increment());
console.log(Counterfn.increment());
console.log(Counterfn.decrement());
console.log(Counterfn.increment());

// new concepts  recusrsive method

function factorial(num) {
    if (num === 1) {
        return 1;
    }
    if (num === 0) {
        return 0;
    }else{
        return num * factorial(num-1)
    }
}
console.log(factorial(5));

function fibbonaci(num) {
    if (num === 1) {
        return 1;
    }
    if (num === 0) {
        return 0;
    }else{
        return fibbonaci(num-1)+fibbonaci(num-2)
    }
}
console.log(fibbonaci(6));

