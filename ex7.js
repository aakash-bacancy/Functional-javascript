/*function reduce(arr, fn, initial) {
	if(arr.length!=0)
	{
		var temp=arr[0];
		inital[temp]=1;
		arr=arr.shift();
		var tempindex=arr.indexOf(temp);
		if(tempindex!=-1)
	}
  }

  module.exports = reduce*/
  //task incomplete
  function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce
