module.exports = function countCats(backyard) {
  let number = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard.length; j++) {
      if (backyard[i][j] == "^^") number++;
    }
  }
  return number;
};
