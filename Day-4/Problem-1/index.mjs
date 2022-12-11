import { fileTextToArray } from "../../utils/fileTextToArray.mjs";
import { evaluateAssignments } from "../evaluateAssignments.mjs";

const evaluate = ([rangeOneStart, rangeOneEnd], [rangeTwoStart, rangeTwoEnd]) => 
  (rangeOneStart >= rangeTwoStart && rangeOneEnd <= rangeTwoEnd) || (rangeTwoStart >= rangeOneStart && rangeTwoEnd <= rangeOneEnd);

const main = async () => {
  const assigments = await fileTextToArray({
    fileName: '../assignments.txt'
  });

  return evaluateAssignments(assigments, evaluate);
}

console.log(await main());