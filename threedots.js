const ages = [12, 13, 14, 15];
const ages2 = [15, 9, 23, 21];
const allAges = ages.concat(ages2);
const allAges2 = [...ages, ...ages2, 5, 7, 09]
// console.log(allAges2);

const minister = 650;
const bussiness = 450;
const sochib = 250;

// const maximum = Math.max(minister, bussiness, sochib);
const takapoysa = [650, 450, 250,980];
const maximum = Math.min(...takapoysa)
// console.log(maximum);

const sum = (x, y, z) => x + y + z;
const numbers = [3, 4, 5,9];
const result = sum(...numbers);
// console.log(result)

let numberStore = [3, 4, 5, 6];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
// console.log(numberStore)

function myFunc(x, y, z){};
let args = [0, 1, 2];
const res = myFunc(...args)
console.log(res)
