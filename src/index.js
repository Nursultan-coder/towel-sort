module.exports = function towelSort (matrix) {
  let result = [];
  let i = 1;
  if (matrix == undefined) {
    return [];
  }
  for (let s = 0; s < matrix.length; s++) {
    if (i % 2 != 0) {
      matrix[s].forEach(item => {
        result.push(item);
      });
    }else {
      for(let a = matrix[s].length; a > 0; a--) {
        result.push(matrix[s][a - 1]);
      }
    }
    i++;
  }
  return result;
}
