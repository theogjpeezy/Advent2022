const splitInput = input => input.split(',');
const getRange = sections => sections.split('-').map(section => parseInt(section, 10));

export const evaluateAssignments = (assignments, evaluateFunc) => assignments.reduce((acc, assignment) => {
  const [elfOneAssignment, elfTwoAssignment] = splitInput(assignment);

  return evaluateFunc(getRange(elfOneAssignment), getRange(elfTwoAssignment)) ? acc + 1 : acc;
}, 0)