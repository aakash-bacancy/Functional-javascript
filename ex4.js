function getShortMessages(messages){
	var temp1=[];
	var temp=messages.filter(ob=>{return ob.message.length<50;});
	temp1=temp.map(each=>{return each.message;});
	//console.log(temp1);
	//temp.push(messages.filter(ob=>{
	//	return ob.message}));
	//console.log(temp);
	return temp1;
}
module.exports=getShortMessages;
//BELLOW IS PREFERD SOLUTION
/*
   module.exports = function getShortMessages(messages) {
     return messages.filter(function(item) {
       return item.message.length < 50
     }).map(function(item) {
       return item.message
     })
   }*/