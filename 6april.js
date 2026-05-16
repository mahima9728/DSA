// // console.log("Working...");

// // // Reverse String

// // function reverseString(string){
// //     let newStr= '';
// //     for (let i =string.length-1; i >= 0; i--) {
// //         const element = string[i];
// //         newStr= newStr+element;
// //     }
// //     return newStr;
// // }
// // console.log(reverseString('Hello'));

// // // Palindrome Check

// // function palindromeCheck(string){
// // let palindromeString='';

// // for (let i = string.length-1; i >=0 ; i--) {
// //     const element = string[i];
// //     palindromeString= palindromeString+element;
    
// // }return palindromeString.toLowerCase() === string.toLowerCase();

// // }
// // console.log(palindromeCheck('madam'));

// // console.log(palindromeCheck('Madam'));

// // console.log(palindromeCheck('hello'));

// // // Counter

// // function counter() {
// //     let count = 0;
// //     return function inner() {
// //         count++;
// //         return count;
// //     }
// //     inner();
// // }
// // let counterFun= counter();
// // console.log(counterFun());
// // console.log(counterFun());console.log(counterFun());console.log(counterFun());

// // // Two Sum (basic)

// // // nums = [2,7,11,15], target = 9
// // // // return [0,1]

// // function twoSum(array) {
// //     let sum= 0;
// //     ansArray= [];
// //     for (let i = 0; i < array.length; i++) {
// //         const element = array[i];
// //         sum = array[i]+array[i+1];
// //         if (sum===9) {
// //             ansArray.push(i,i+1);
// //         }
// //     } return ansArray;
// // }

// // console.log(twoSum([2,7,11,15]));
// // const people = [
// //   {
// //     firstName: "Kim",
// //     lastName: "Namjoon",
// //     age: 29,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Kim",
// //     lastName: "Seokjin",
// //     age: 31,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Min",
// //     lastName: "Yoongi",
// //     age: 30,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Jung",
// //     lastName: "Hoseok",
// //     age: 30,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Park",
// //     lastName: "Jimin",
// //     age: 28,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Kim",
// //     lastName: "Taehyung",
// //     age: 28,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Jeon",
// //     lastName: "Jungkook",
// //     age: 27,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Kim",
// //     lastName: "Jisoo",
// //     age: 29,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Jennie",
// //     lastName: "Kim",
// //     age: 28,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Park",
// //     lastName: "Chaeyoung",
// //     age: 27,
// //     hobby: "kpop"
// //   },
// //   {
// //     firstName: "Lalisa",
// //     lastName: "Manobal",
// //     age: 27,
// //     hobby: "kpop"
// //   }
// // ];

// // const names = people.map((artist)=>{
// //  return artist.firstName + ' '+artist.lastName;
// // })
// // console.log(names);


// // //filter 
// // const age = people.filter((artist)=>{
// //     return artist.age === 27;

// // });
// // console.log(age);

// // // count character


// // function stringCount(string){
// //     let obj={
// //         str: '',
// //         repeat:0
// //     }
// //     for (let i = 0; i < string.length; i++) {
// //         const element = string[i];
// //         for (let j = 0; j < element.length; j++) {
// //             const char = element[j];
// //             if (obj.str.includes(char)) {
// //                 str= char;
// //                 repeat++;
// //             }
// //         }return obj;
// //     }
// // }
// // console.log(stringCount('aabbccc'));


// // debounce

// function debounce(fn, delay){
// let timer;

// return function (...args) {
//     clearTimeout(timer);
    
//     timer = setTimeout(() => {
//         fn(...args);
//     }, delay);
// }
// }

// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     console.log("👉 Called, clearing old timer");

//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       console.log("✅ Executing function with:", args);
//       fn(...args);
//     }, delay);
//   };
// }

// function search(query) {
//   console.log("🔥 API CALL:", query);
// }

// const debouncedSearch = debounce(search, 1000);

// debouncedSearch("p");
// setTimeout(() => debouncedSearch("pi"), 300);
// setTimeout(() => debouncedSearch("piz"), 600);
// setTimeout(() => debouncedSearch("pizza"), 900);


// console.log(this);










// reverse a string 
function reversedString(string) {
    let newStr='';
    for (let i = string.length-1 ; i >=0 ; i--) {
        const element = string[i];
        newStr= newStr+element;
        
    }
    return newStr;
    
}
console.log(reversedString('Hello'));
console.log(reversedString('madam'));


// debouce

function debounce(fn , delay){
    let timer;
    return function (...args) {
    clearTimeout(timer);     
    
  timer = setTimeout(() => {
        fn(...args)
    }, delay);
    }
}

// frequency

function frequencyCheck(array) {
    let obj ={}
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element]= 1;
        }
        
    }return obj;
}
console.log(frequencyCheck(["a","b","a","c","b","a"]));


// input: [1,2,3,2,4,1]
// output: [2,1]

// function findDuplicates(arr) {
//   // your code
// }

function findDuplicates(array){
    let obj= {};
    let result =[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (obj[element]) {
             obj[element]++;
        } else {
            obj[element]= 1;
        } if (obj[element]===2) {
             result.push(element)}
        }
   
    return result;
}
console.log(findDuplicates([1,2,3,2,4,1]));

// input: [2,7,11,15], target = 9
// output: [0,1]

// function twoSum(arr, target) {
//   // your code
// }

function twoSum(array){
 let target= 9;
 let result=[];
 for (let i = 0; i < array.length; i++) { 
    for (let j = 1; j < array.length; j++) {
        if(array[i] + array[j]===9)
            result.push(array[i],array[j]);
    }
 }return result;
}
console.log(twoSum([2,7,11,15]));
