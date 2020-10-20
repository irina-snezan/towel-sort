
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof matrix === 'undefined')
		return [];
	var result = [];
	matrix.forEach(function (arr, i) {result = (i % 2 === 1) ? result.concat(arr.reverse()) : result = result.concat(arr);});
	return result;
}
 