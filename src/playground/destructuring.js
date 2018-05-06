//
//Object Destructuring
//

// const person = {
//     name: 'Roman',
//     age: 32,
//     location: {
//         city: 'Kiev',
//         temp: 18
//     }
// };

// const{name,age} = person;
// const{temp, city} = person.location;
// console.log(`${name} is ${age}`);

// console.log(`It's ${temp} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
    
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const{name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
//Array Destructuring
//

const item = ['Coffee (hot)','$2.00', '$2.50', '$2.75'];

const[coffee, , price] = item;

console.log(`A medium ${coffee} cost ${price}`);