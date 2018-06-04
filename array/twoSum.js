var twoSum = function(nums, target) {
  const res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (Math.abs(nums[i]) <= Math.abs(target) || nums[i] <= target) {
      const firstNum = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (firstNum + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};
