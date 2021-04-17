const person = {
   name: 'Alex Rahman',
   gfName: 'Emmi Watson',
   age: 19,
   job: 'Googler',
   friends: ['Semmi dan', 'Jeahan khan', 'Fakir ahm', 'Javder'],
   phone: 0988897778,
   complexObject: {
      leader: 'Aman Shaid'
   }
}

const {name, gfName, job, age, phone, friends} = person;
const {leader} = person.complexObject;
console.log(leader)
// const gfName = person.gfName;

// console.log(name, gfName, job, friends)

const friend = ['Sakib Khan', 'Arman Khan', 'Salman Khan', 'Amir Khan'];
const [chotoF, nextF, ...restF] = friend;
// console.log(chotoF, nextF, restF)
console.log(friend)