class Student{
   constructor(sName, sId){
      this.name = sName;
      this.id = sId;
      this.class = 9;
      this.year = 2021;
      this.school = 'Korimunnesa High School';
   }
}

const student1 = new Student('Sabbir Ahmed', 1);
const student2 = new Student('Nowshin Fahmin', 2);
console.log(student1)
console.log(student2)