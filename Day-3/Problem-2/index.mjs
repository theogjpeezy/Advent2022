import { fileTextToArray } from "../../utils/fileTextToArray.mjs";
import { getPriority } from "../getPriority.mjs";
import { stringToCharSet } from "../stringToCharSet.mjs";

const getCommonItem = (rucksackOne, rucksackTwo, rucksackThree) => {
  const [smallRucksack, ...rucksacks] = [rucksackOne, rucksackTwo, rucksackThree].sort((a, b) => a.size - b.size);

  for (const item of smallRucksack) {
    if (rucksacks.every(rucksack => rucksack.has(item))) return item;
  }

  throw new Error('No common item found');
}

const main = async () => {
  const rucksackContents = await fileTextToArray({
    fileName: './rucksacks.txt'
  });
  
  let total = 0;
  for (let i = 0; i < rucksackContents.length; i +=3 ) {
    const rucksackOne = stringToCharSet(rucksackContents[i]);
    const rucksackTwo = stringToCharSet(rucksackContents[i + 1]);
    const rucksackThree = stringToCharSet(rucksackContents[i + 2]);
  
    const commonItem = getCommonItem(rucksackOne, rucksackTwo, rucksackThree);
    
    total += getPriority(commonItem);
  }

  return total;
}

console.log(await main());