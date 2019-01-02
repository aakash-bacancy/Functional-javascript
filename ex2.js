function repeat(opn,num){
	for(var i=0;i<num;i++){
		opn();
	}
}
module.exports=repeat;