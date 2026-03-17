const eldobase1 = ["piriton", "asprin", "panadol", "brufen"];
const eldobase2 = ["flagil", "piriton", "omeprazol", "cetrizin", "asprin"];

function matchInventory(inv1, inv2) {
  const finalInv = [];
  for (let index = 0; index < inv1.length; index++) {
    if (finalInv.includes(inv1[index])) {
      console.log("alredy in list");
    } else {
      finalInv.push(inv1[index]);
    }
  }
  for (let index = 0; index < inv2.length; index++) {
    if (finalInv.includes(inv2[index])) {
      console.log("alredy in list");
    } else {
        console.log(finalInv.push(inv2[index]));      
    }
  }
  return finalInv;  
}
let result = matchInventory(eldobase1, eldobase2);
let result2 = matchInventory(["pen", "book", "paper"], ["pen", "book"]);
console.log(result);
console.log(result2);
