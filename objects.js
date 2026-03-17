const student = {
  name: "albert",
  read: (book) => {
    console.log("reading: " + book);
  },
  age: 67,
  logger: false,
  school: {
    name: "eldohub",
    location: "eldoret",
  },
};

console.log(student.name); // dot notation

student.read("eloquent js");
student.read("ego is the enemy");
console.log("victor");
console.log(student.log);

//

// Object --real world representation of

// enviroment/interprator-- a software  --- node(server), browser(client)

// built-int objects - consoles Date, Math, Object, Array, String
// node - process, global
//browser - window,navigator, history
console.log(process.version);
// window.close();
console.log(Object.keys(student))

let email = "albert@gmail.com" // by creatinfg a string, the variable(email) will automatically inherit from String object
email.length