// loops and conditions
// conditional statement(if,switch) -- a control structure that allows execution of code based on a condition / when a condition is true

if (100 > 52) {
  // more code
  console.log("hello world!!! we are right!");
} else {
  console.log("tumechoma!!!!");
}

let mathScore = 55
if(mathScore > 100 || mathScore < 0){
    console.log("Invalid mark!")
}else if(mathScore <= 50){
    console.log("Failure!!!!!") 
}else if(mathScore< 65){
    console.log("Grade: C")
}else if(mathScore <= 80){
    console.log("Grade: B")
}else{
    console.log("Grade: A");
}
// block {}
// task - convert this scoring logic to use switch statement syntax


// LOOP--- allows you to run a block of repeatedly for a finite number of times
// for , while , do while
// starting point + condition for stopping + change(increment/decrement)

for(let count=0; count>-1000; count=count-1){
    console.log(count);
}


const alberts_class_marks = [32,67,90,56,74,99,70,55]

for(let studentNumber = 0; studentNumber < alberts_class_marks.length; studentNumber++){
    mathScore = alberts_class_marks[studentNumber]
    console.log("Mark: " + mathScore)
    if(mathScore > 100 || mathScore < 0){
    console.log("Invalid mark!")
    }else if(mathScore <= 50){
        console.log("Failure!!!!!") 
    }else if(mathScore< 65){
        console.log("Grade: C")
    }else if(mathScore <= 80){
        console.log("Grade: B")
    }else{
        console.log("Grade: A");
    }
    console.log("*******************")
}

