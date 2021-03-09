const wrap = (str, colNum) => {
  if (str.length <= colNum) return str;

  const words = str.split(" ");
  returnStr = words[0];
  charCount = words[0].length;
  wordCount = 1;

  for (let i = 1; i < words.length; i++) {
    if (charCount + words[i].length + 1 <= colNum) {
      returnStr = returnStr + " " + words[i];
      wordCount += 1;
      charCount += words[i].length + 1;
    } else {
      returnStr = returnStr + "\n" + words[i];
      charCount = words[i].length;
      wordCount = 1;
    }
  }
  return returnStr;
};

module.exports = wrap;
