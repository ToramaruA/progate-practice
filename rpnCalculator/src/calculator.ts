type Operator = "+" | "-" | "*" | "/";

const isValidInput = (input: string): boolean =>
  /^[\d+\-*/\s]+$/.test(input) && !/\d+\.\d+/.test(input);

const tokenize = (input: string): string[] => input.match(/\d+|[+\-*/]/g) ?? [];

const applyOperator = (
  a: number,
  b: number,
  operator: Operator,
): number | Error => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) return new Error("Cannot divide by zero");
      return Math.trunc(a / b);
    default:
      return new Error(`Unsupported operator: ${operator}`);
  }
};

export const calculate = (input: string): number | Error => {
  if (!isValidInput(input)) {
    return new Error("Invalid input: only integers and + - * / allowed.");
  }

  const inputSplit = tokenize(input);
  const stack: number[] = [];

  for (const token of inputSplit) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } else if (stack.length < 2) {
      return new Error("Syntax error: insufficient operands");
    } else {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) {
        throw new Error("Not enough operands");
      }
      const result = applyOperator(a, b, token as Operator);

      if (result instanceof Error) return result;
      stack.push(result);
    }
  }

  return stack.length === 1
    ? stack[0]
    : new Error("Syntax error: too many operands");
};

//関数を新たに作ると見やすくなる
