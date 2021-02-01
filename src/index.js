
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  matrix.forEach(item => {
    item.forEach(item => {
      result[item - 1] = item;
    });
  });
  return result;
}
