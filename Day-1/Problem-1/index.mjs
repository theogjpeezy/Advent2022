import { fileTextToArray } from "../../utils/fileTextToArray.mjs";
import { getDescOrderedCalorieTotals } from "../getDescOrderedCalorieTotals.mjs";

const inventory = await fileTextToArray({
  fileName: '../inventory.txt',
});

console.log(getDescOrderedCalorieTotals(inventory)[0]);