// let names = ['alex', 'desi', 'sasho'];

// names.forEach(x => {
//     console.log(x)

// })


let namesTwo = ['superman', 'batman', 'wanderwoman'];

// let filteredNNames = namesTwo.filter(x =>{
//     return x[0] !== 's';
// });

// console.log(filteredNNames)

// let hero = namesTwo.find(x=> {
//     return x[0] == 's'
// });

// console.log(hero)


// if (namesTwo.some(x => x[0] === 'Y')) {
//     console.log('Yes there is');
// }


let superHeros = namesTwo.map(x => x.toUpperCase());

console.log(namesTwo);
console.log(superHeros);


let numbers = [1, 22, 25, 200];

// let sum = numbers.reduce((acc, el) => {
//     return acc + el
// }, 0);

// console.log(sum);


let sum = numbers.reduce((x, a) => x + a, 0);
console.log(sum);