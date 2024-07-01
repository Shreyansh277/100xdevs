/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor(num) { 
    this.result = num; 
  }

  add(num) { 
    this.result += num; 
  }

  subtract(num) { 
    this.result -= num; 
  }

  multiply(num) { 
    this.result *= num; 
  }

  divide(num) { 
    if(num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num; 
  }

  clear() { 
    this.result = 0; 
  }

  getResult() { 
    return this.result; 
  }

  calculate(str) {
    // Remove extra spaces and split the string into individual tokens
    const tokens = str.trim().split(/\s+/);

    // Regular expression to match valid arithmetic operators
    const operatorRegex = /^[+\-*/]$/;

    // Define precedence for operators (BODMAS rule)
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2
    };

    const operatorStack = [];
    const outputQueue = [];

    // Function to evaluate expression using operator stack and output queue
    const evaluateExpression = () => {
      const operator = operatorStack.pop();
      const operand2 = outputQueue.pop();
      const operand1 = outputQueue.pop();
      
      switch (operator) {
        case '+':
          outputQueue.push(operand1 + operand2);
          break;
        case '-':
          outputQueue.push(operand1 - operand2);
          break;
        case '*':
          outputQueue.push(operand1 * operand2);
          break;
        case '/':
          if (operand2 === 0) {
            throw new Error("Cannot divide by zero");
          }
          outputQueue.push(operand1 / operand2);
          break;
      }
    };

    // Iterate through tokens
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (!isNaN(token)) { // If the token is a number, push it to the output queue
        outputQueue.push(parseFloat(token));
      } else if (operatorRegex.test(token)) { // If the token is an operator
        const currentPrecedence = precedence[token];

        // Pop operators from the stack and evaluate them if they have higher precedence
        while (operatorStack.length > 0 && precedence[operatorStack[operatorStack.length - 1]] >= currentPrecedence) {
          evaluateExpression();
        }

        // Push the current operator to the stack
        operatorStack.push(token);
      } else { // If the token is not a number or operator, throw an error
        throw new Error(`Invalid expression: ${str}`);
      }
    }

    // Evaluate remaining operators in the stack
    while (operatorStack.length > 0) {
      evaluateExpression();
    }

    // The final result is the only element left in the output queue
    if (outputQueue.length !== 1) {
      throw new Error(`Invalid expression: ${str}`);
    }

    this.result = outputQueue.pop();
  }
}

module.exports = Calculator;


module.exports = Calculator;
