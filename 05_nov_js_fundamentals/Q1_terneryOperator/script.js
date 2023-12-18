// Q1).Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.

// Ans:
//The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

// Example: 

    // Syntax :
     
    // condition ? console if value is true : console if value is false;

    // function age(myAge){
    //     myAge>18 ? console.log("You can drive") : console.log("You can't drive");
    // }

    // age(20);
    // age(17);


// Program for number is even or odd check.

function evenOdd(no){
    no % 2 == 0 ? console.log("Number is even") : console.log("Number is odd");
}

evenOdd(10);
evenOdd(9);