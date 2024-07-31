function sayHello(person: string) {
  return "Hello, " + person;
}

let user = "Tom";
console.log(sayHello(user));

interface member { name: String, age: Number, jobTitle: String, isWorker: Boolean };

let Kevin: member = {name: "Kevin", age:34, jobTitle:"USD AR SO", isWorker:true};
console.log("Kevin name " + Kevin.name);
