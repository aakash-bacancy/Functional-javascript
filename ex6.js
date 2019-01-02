

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
function reducer(inputWords,temp){
	var count=0;
	var countarray=temp.map(word=>{
		var subcount=1;
		varsarray=inputWords.map(word2=>{
			if(word===word2)
			{
				return 1;
			}
			else
			{
				return 0;
			}
		});
		return varsarray.reduce((one,two)=>{return one+two;});
	});
	return countarray;
}
function countWords(inputWords){
	var temp=inputWords.filter(onlyUnique);
	//findocr(temp,inputWords);
	var count=reducer(inputWords,temp);
	var final={};
	for(var i=0;i<temp.length;i++)
	{
		final[temp[i]]=count[i];
	}
	return final;
}
module.exports=countWords;
/*  function countWords(arr) {
    return arr.reduce(function(countMap, word) {
      countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
      return countMap
    }, {}) // second argument to reduce initialises countMap to {}
  }

  module.exports = countWords*/