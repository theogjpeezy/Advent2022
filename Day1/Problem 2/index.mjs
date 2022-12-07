import { open } from 'node:fs/promises';

const file = await open('./test.txt');
const text = await file.readFile({ encoding: 'UTF8'});

const inventory = text.split('\r\n');

let totalCalories = 0;

const calorieCounts = [];
for (const a of inventory) {
  if (!Boolean(a.length)) {
    calorieCounts.push(totalCalories);

    totalCalories = 0;
    continue;
  }

  totalCalories += parseInt(a, 10);
}
console.log(calorieCounts.sort((a, b) => b - a).slice(0,3).reduce((acc, val) => acc + val, 0));