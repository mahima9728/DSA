// What is closure and how does it work?
// counter & debounce

function debounce(fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer= setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

function search(query) {
    console.log("APi Calling :", query);
    
}

const debounced= debounce(search, 2000)

debounced('Piz');

setTimeout(() => {
    debounced('PIzzaa')
}, 1000);


function counter() {
    let count = 0;

    return {
        increment: function() {
            count++
            return count
        },
         decrement: function() {
            count--
            return count
        },
         countValue: function() {
            return count
        }
    }
}

const counterFn = counter();

console.log(counterFn.increment());
console.log(counterFn.increment());
console.log(counterFn.increment());

console.log(counterFn.decrement());
console.log(counterFn.countValue());

console.log(counterFn.decrement());
