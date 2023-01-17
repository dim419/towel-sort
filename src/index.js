
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let empty = [];
  if (matrix === undefined || matrix.length === 0) {
    return empty;
  }
  let result = matrix.map(function(elem, index) {
    if (index % 2 !== 0) {
    return elem.reverse();
    } else {
    return elem;
    }
  });
    const newArr = matrix.join(',').split(',');
    const sortArr = newArr.map((value) => parseInt(value));
    return sortArr;
}
