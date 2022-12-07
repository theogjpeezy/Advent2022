export function getDescOrderedCalorieTotals(inventory) {
  return inventory.reduce((acc, val) => {
    if (!Boolean(val.length)) {
      return {
        calorieCounts: acc.calorieCounts.concat(acc.runningCalories),
        runningCalories: 0,
      };
    }
  
    return {
      ...acc,
      runningCalories: acc.runningCalories + parseInt(val, 10),
    } 
  }, {
    calorieCounts: [],
    runningCalories: 0
  }).calorieCounts;
}