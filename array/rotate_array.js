var rotate = function(nums, k) {
  const len = nums.length;
  while (k > 0) {
    nums.unshift(nums[len - 1]);
    nums.pop();
    k--;
  }
};
