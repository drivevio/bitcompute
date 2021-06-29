// --EXPORTS
export * from './lib/async';
export * from './lib/number';
// --Add negative numbers
//      To add negative numbers you would first need to add them normally as if they weren't negative. For example -4 + (-1) would equal -5 look below for the solution.
function addNegativeNumbers(nums: readonly string[]) {
  // First remove the - out of each number so we can treat them as though they are normal numbers.
  // Here we use .map() and spit out each number removing the first symbol which is "-" turning them into normal numbers.
  // We then convert it into a int for typescript's sake and then move it into new_nums array.
  const new_nums = [];
  nums.map((num) => {
    // eslint-disable-next-line functional/immutable-data
    new_nums.push(parseInt(num.substring(1)));
  });
  // We then add all the numbers in the array up to our final value and add the "-" back turning it into a negative number.
  return '-' + new_nums.reduce((a, b) => a + b, 0);
}
// --Adding numbers with different signs.
//      Example problem: -5 + (1)
//      To solve this problem we would first start by visualizing a number line we start at 0 and we go 1 to the right of 0.
//      Then we add 5 to the right of 0 which would get a answer of -4.
function complexAdd(nums: readonly string[]) {
  const negNums = [];
  const normalNums = [];
  const formal = [];
  nums.map((num) => {
    if (num.startsWith('-')) {
      // eslint-disable-next-line functional/immutable-data
      negNums.push(parseInt(num));
    } else {
      // eslint-disable-next-line functional/immutable-data
      normalNums.push(parseInt(num));
    }
  });
  const norms = normalNums.reduce((a, b) => a + b, 0);
}
export { addNegativeNumbers };
complexAdd(['-1', '-2', '3', '4']);
