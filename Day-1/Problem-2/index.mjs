import { fileTextToArray } from "../../utils/fileTextToArray.mjs";
import { getDescOrderedCalorieTotals } from "../getDescOrderedCalorieTotals.mjs";

const inventory = await fileTextToArray({
  fileName: '../inventory.txt',
});

const topThreeSum = getDescOrderedCalorieTotals(inventory).sort((a, b) => b - a).slice(0,3).reduce((acc, val) => acc + val, 0);

console.log(topThreeSum);