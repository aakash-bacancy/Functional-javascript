module.exports=function arrayMap(arr,fn){
	 let temp=[];
	 let result=[];
	 for(let i=0;i<arr.length;i++){
	 	temp.push(arr[i]);
	 	temp.push(arr[i+1]);
	 	result[i]=temp.reduce(fn);
	 	temp.pop();
	 	temp.pop();
	 }
	 return result;
}
/*
 module.exports = function arrayMap(arr, fn, thisArg) {
       return arr.reduce(function(acc, item, index, arr){
               acc.push(fn.call(thisArg, item, index, arr))
       return acc }, [])    }
*/