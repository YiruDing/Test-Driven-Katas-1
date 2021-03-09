const twoSum = (arr, target) => {
  let otherNum, idx;
  let rslt = [];

  for (let i = 0; i < arr.length; i++) {
    otherNum = target - arr[i];
    idx = arr.indexOf(otherNum);
    if (idx >= 0 && idx != i) {
      rslt.push(i, idx);
      return rslt;
    }
  }
  return rslt;
};

module.exports = twoSum;
