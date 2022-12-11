const getCrateLayout = (input) => {
  const firstRow = parseCrateRow(input[0])
  const crateLayout = getInitialLayoutArray(firstRow.length);
  firstRow.forEach((crate, index) => crateRowSorter(crate, index, crateLayout));

  let finalRowIndex = 0;
  for (let i = 1; i < input.length; i++) {
    const layout = parseCrateRow(input[i]);
    if (!Boolean(layout)) {
      finalRowIndex = i;
      break;
    }

    layout.forEach((crate, index) => crateRowSorter(crate, index, crateLayout));
  }

  return [
    crateLayout.map(column => column.reverse()),
    finalRowIndex + 2
  ];
}

const parseCrateRow = (row) => {
  return row.match(/( {4}|\[[A-Z]\])/g);
}

const crateRowSorter = (crate, index, crateLayout) => {
  
  const crateLetter = crate.match(/[A-Z]/)?.[0];
  if(Boolean(crateLetter)) {
    crateLayout[index].push(crateLetter)
  };
}

const parseInstructions = (row) => {
  return row.match(/[0-9]+/g);
}

const getInitialLayoutArray = (totalColumns) => {
  return new Array(totalColumns).fill(0).map(() => []);
}

const getInstructions = (input, startIndex) => {
  const instructions = [];
  for (let i = startIndex; i < input.length; i++) {
    const [moveCount, fromColumn, toColumn] = parseInstructions(input[i]);
    instructions.push({
      moveCount,
      fromColumn,
      toColumn
    });
  }

  return instructions;
}

export const getTopCrates = crateLayout => crateLayout.map(column => [...column].pop()).join('');

export const getInitialLayoutAndDirections = (input) => {
  const [crateLayout, nextStart] = getCrateLayout(input);
  return {
    instructions: getInstructions(input, nextStart),
    initialLayout: crateLayout
  };
}

export const executeInstructions9000 = (crateLayout, instructions) => {
  instructions.forEach(({moveCount, fromColumn, toColumn}) => {
    for(let i = 0; i < moveCount; i++) {
      const crate = crateLayout[fromColumn - 1].pop();
      crateLayout[toColumn - 1].push(crate);
    }
  });

  return crateLayout;
}

export const executeInstructions9001 = (crateLayout, instructions) => {
  instructions.forEach(({moveCount, fromColumn, toColumn}) => {
    let crateStack = [];
    for(let i = 0; i < moveCount; i++) {
      crateStack = [crateLayout[fromColumn - 1].pop(), ...crateStack];
    }
    crateLayout[toColumn - 1].push(...crateStack);
  });

  return crateLayout;
}