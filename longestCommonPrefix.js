const longestCommonPrefix = (strArray) => {
  if (strArray.length < 2) return "";
  const minLength = strArray.reduce((acc, e) => {
    if (acc === 0) {
      acc = e.length;
    }
    if (acc > e.length) {
      acc = e.length;
    }
    return acc;
  }, 0);

  let char;
  let prefix = "";

  for (let i = 0; i < minLength; i++) {
    char = strArray[0][i];
    for (let j = 1; j < strArray.length; j++) {
      if (char !== strArray[j][i]) {
        return prefix;
      }
    }
    prefix = prefix.concat(char);
  }
  return prefix;
};

module.exports = longestCommonPrefix;
