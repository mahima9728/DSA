// HOTEL MAX BOOKINGS

// Interview wording again:

// “A hotel stores room booking history in an array. Each number represents a room ID booking. Find the room that was booked the maximum number of times.”

// Example: [101,102,101,103,101,102] Output:101
// solution: this is a hashmap lookup pattern, I would first do frequency check of the room num store them and then filter it to find the most repeated max number

console.log('Max Booking');

function maxBooking(array) {
    let roomTracker={}
    let max=0;
    let allrooms=[];
    let maxBookedRoom=null
    for (let i = 0; i < array.length; i++) {
        const room = array[i];

        if (roomTracker[room]!== undefined) {
            roomTracker[room]+=1;
        } else {
            roomTracker[room]=1
        }
        
    } for (let key in roomTracker){
        if (roomTracker[key] > max) {
            max= roomTracker[key];
            allrooms = [Number(key)]
        }else if (roomTracker[key] === max) {
             allrooms.push(Number(key));
}
    }
    return allrooms;
}

console.log(maxBooking([101,101,102,101,102,102,103]));
