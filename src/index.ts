import readline from 'readline';
import { add, sub, mult, div } from './lib/math';
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  try {
    const num1 = parseFloat(await ask('Enter first number: '));
    const num2 = parseFloat(await ask('Enter second number: '));

    if (isNaN(num1) || isNaN(num2)) {
      console.log(' Please enter valid numbers.');
      rl.close();
      return;
    }

    const results = [
      ['operation', 'input1', 'input2', 'result'],
      ['add', num1.toString(), num2.toString(), add(num1, num2).toString()],
      ['sub', num1.toString(), num2.toString(), sub(num1, num2).toString()],
      ['mult', num1.toString(), num2.toString(), mult(num1, num2).toString()],
      ['div', num1.toString(), num2.toString(), num2 === 0 ? 'Cannot divide by zero' : div(num1, num2).toString()],
    ];

    const csvData = results.map((row) => row.join(',')).join('\n');

    fs.writeFileSync('result.csv', csvData);

    console.log(' All operations completed and results saved to result.csv');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close();
  }
}

main();
