var containsDuplicate = function(nums) {
  const res = {};
  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]]) {
      return true;
    } else {
      res[nums[i]] = [nums[i]];
    }
  }
  return false;
};
