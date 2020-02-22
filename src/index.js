
// You should implement your task here.

module.exports = function towelSort(matrix) {

  return (arguments.length == 0 || matrix.length == 0) ?
    [] :
    matrix.reduce((prev, cur, i) => i % 2 == 0 ? prev.concat(cur) : prev.concat(cur.sort((a, b) => b - a)), []);
}
