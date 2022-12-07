import { open } from 'node:fs/promises';

export async function fileTextToArray({fileName, lineDelimitor = '\r\n', encoding = 'UTF8'}) {
  const file = await open(fileName);
  const text = await file.readFile({ encoding });
  await file.close();
  return text.split(lineDelimitor);
}