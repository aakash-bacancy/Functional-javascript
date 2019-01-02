 function checkUsersValid(goodUsers) {
   return function allUsersValid(submittedUsers) {
     return submittedUsers.every(user=>{
     	const flag=goodUsers.indexOf(user);
     	if(flag!=-1){
     		return true;
     	}
     	else
     	{
     		return false;
     	}
     })
   };
 }

 module.exports = checkUsersValid
 //PREFERED SOLUTION
 /*
 module.exports = function checkUsersValid(goodUsers) {
   return function allUsersValid(submittedUsers) {
     return submittedUsers.every(function(submittedUser) {
       return goodUsers.some(function(goodUser) {
         return goodUser.id === submittedUser.id
       })
     })
   }
 }
*/