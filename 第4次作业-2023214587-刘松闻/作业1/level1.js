let person = {
    name: "Alan",
    age: 20,
};
console.log(person);


let person2 = new Object();
person2.name = "Alex";
person2.age = 30;
console.log(person2);


function Person3(name, age){
    this.name = name;
    this.age = age;
}
let person3 = new Person3("Bob", 25);
console.log(person3);
