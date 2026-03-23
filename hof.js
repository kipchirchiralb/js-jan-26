// Higher order functions - a function that can take another function as an argument/parameter or return a function

function doTaskOne() {
  console.log("preforming some math task one!!!");
  //   const person = {
  //     name: "albert",
  //     age: 60,
  //     gender: "male",
  //   };
  return function taskTwo() {
    console.log("performing task two");
    return 800;
  };
}
const result = doTaskOne();

console.log(result());

const marks = [78, 64, 78];

marks.push(89);
marks.forEach(function double(num) {
  return num * 2;
});

// a callback function (e.g. double) is a function that is passed into another function as an argument
// console.log("albert@eldohub.co.ke" == "Albert@eldohub.co.ke");

function testFunction(email, mailer) {
  console.log(email);
  let cleanEmail = email.toLowerCase().trim();
  mailer(cleanEmail); // () -- calling it - -expecting a function
}

function sendEmail(email) {
  console.log("Sending email to user - OTP");
}

testFunction("albert@eldohub.co.ke", sendEmail);

testFunction("jeremy@gmail.com", () => {
  console.log("mailing the person :---");
});
