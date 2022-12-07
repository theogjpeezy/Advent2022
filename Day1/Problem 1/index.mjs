import { open } from 'node:fs/promises';

const file = await open('./test.txt');
const text = await file.readFile({ encoding: 'UTF8'});

const inventory = text.split('\r\n');

let topCalorieCount = 0, rollingCalorieCount = 0;
for (const a of inventory) {
  if (!Boolean(a.length)) {
    if (rollingCalorieCount > topCalorieCount) {
      topCalorieCount = rollingCalorieCount;
    }

    rollingCalorieCount = 0;
    continue;
  }

  rollingCalorieCount += parseInt(a, 10);
}

console.log(topCalorieCount);