import { fileTextToArray } from "../../utils/fileTextToArray.mjs";
import { executeInstructions9000, getInitialLayoutAndDirections, getTopCrates } from "../utils.mjs";

const main = async () => {
  const input = await fileTextToArray({
    fileName: '../crateInstructions.txt'
  });

  const { initialLayout, instructions } = getInitialLayoutAndDirections(input);
  const finalLayout = executeInstructions9000(initialLayout, instructions);

  return getTopCrates(finalLayout);
}

console.log(await main());