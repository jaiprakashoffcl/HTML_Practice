//Questions
//1. declare a variable with let and const examples
//2. difference btn == and === with examples 
//3. how will you declare your control statements 
//4. do a program of calculator with arthimetic operator 
//5. diff btn return keyword and function call with examples
//6. diff onsubmit and onclick html events
//7. validate a password length must be above 
//8. characters with html embedded with script
//9. syntax for  for loop print "artifical" string


// 1)
let number=22;
number = 23;

const datax= "javascript";

// 2)

let x=23;

console.log(x == "23");

console.log(x === "23");

// 3)

const course="python";
if(course == "java"){
    console.log("Full stack Java");
} else if (course == '.Net'){
    console.log("Full stack .Net");
} else {
    console.log("full stack python");
}

// 4)

let user = "+";
let operator;

switch (user){
    case "*":
        operator="Multiplication";
        break;
    case "+":
        operator="Addition";
        break;
    case "-":
        operator = "Subtract";
        break;
    case "/":
        operator = "division";
        break;
    case "%":
        operator = "Modulus";
        break;
    default:
        operator = "unknown operator";
        break;
}
console.log(operator);

// 5)
function multiply(a, b)
{
    return a*b;
}
answer=multiply(5,3);
console.log(answer);
function name(names)
{
    let xyz=sayhello(Gaara);
}
console.log(xyz);