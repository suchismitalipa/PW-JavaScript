function person(name , age){
    this.name=name;
    this.age=age;
}

const person1=new person('John', 30);
const person2=new person('John1', 50);

console.log(person1.name);
console.log(person2.age);