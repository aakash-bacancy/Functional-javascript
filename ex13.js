
function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num%10===0){
  	operation()
  	setTimeout(function(){return repeat(operation, --num);},5);
  } 
  else
  {return repeat(operation, --num);}
  	
}
var one=setTimeout(repeat,1000);
module.exports = repeat