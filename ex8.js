function duckCount(){
	return Array.prototype.slice.call(arguments).filter(value=>{
			return Object.prototype.hasOwnProperty.call(value,'quack')===true;
	}).length;
	//console.log(typeof arguments);
	/*return arguments.filter(value=>{
			 return value.hasOwnProperty('quack');
	});*/
}
module.exports=duckCount;
/*
    function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }

    module.exports = duckCount*/