import { fileTextToArray } from "../../utils/fileTextToArray.mjs";
import { getPriority } from "../getPriority.mjs";
import { stringToCharSet } from "../stringToCharSet.mjs";

const splitStringInHalf = val => {
  const middlePoint = Math.floor(val.length / 2);
  return [
    stringToCharSet(val.substring(0, middlePoint)),
    stringToCharSet(val.substring(middlePoint))
  ];
}

const main = async () => {
  const rucksackContents = await fileTextToArray({
    fileName: './rucksacks.txt'
  });

  return rucksackContents.reduce((acc, rucksack) => {
    const [compartmentOne, compartmentTwo] = splitStringInHalf(rucksack);
    for (const item of compartmentOne) {
      if (compartmentTwo.has(item)) {
        acc += getPriority(item);
      };
    }
    
    return acc;
  }, 0);
}

console.log(await main());

