import { fileTextToArray } from "../../utils/fileTextToArray.mjs";
import { evaluateAssignments } from "../evaluateAssignments.mjs";

const evaluate = ([rangeOneStart, rangeOneEnd], [rangeTwoStart, rangeTwoEnd]) => rangeOneEnd >= rangeTwoStart && rangeOneStart <= rangeTwoEnd;

const main = async () => {
  const assigments = await fileTextToArray({
    fileName: '../assignments.txt'
  });

  return evaluateAssignments(assigments, evaluate);
}

console.log(await main());