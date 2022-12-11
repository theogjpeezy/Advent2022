import { fileTextToArray } from '../../utils/fileTextToArray.mjs';
import { getMessageIndex } from '../getMessageIndex.mjs';

const main = async () => {
  const text = await fileTextToArray({
    fileName: '../transmission.txt'
  });

  return getMessageIndex(text[0], 4);
}

console.log(await main());