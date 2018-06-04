var maxProfit = function(prices) {
  const len = prices.length;
  let max = prices[len - 1];
  let min = prices[len - 1];
  let prev = prices[len - 1];
  let res = 0;
  let foundToBuy = false;
  for (let i = len - 2; i >= 0; i--) {
    if (prices[i] < prev) {
      min = prices[i];
      foundToBuy = true;
    } else {
      if (foundToBuy) {
        res += max - min;
        min = prices[i];
      }
      max = prices[i];
    }
    prev = prices[i];
  }
  return foundToBuy && max - min ? max - min + res : res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
