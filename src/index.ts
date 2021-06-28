export * from './lib/async';
export * from './lib/number';

function addNegativeNumbers(nums: readonly string[]) {
  nums.map((num) => console.log(num));
}

addNegativeNumbers(['1', '2']);
