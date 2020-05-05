
function Actions(){}
Actions.prototype.addPlayer = function(myList, singlePlayer){
    console.log("shake my hand", singlePlayer);
  if(myList ==undefined){
    return;
  }  
    
if(!(myList.includes(singlePlayer))){
  myList.push(singlePlayer);
  return myList
}
  return myList
}


Actions.prototype.removePlayer = function (myList, singlePlayer){
    console.log("removed", singlePlayer);
  let playerIndex =  myList.indexOf(singlePlayer);
  myList.splice(playerIndex,1);
  return myList;
}







function getItem (myPlayers){
  return new Promise((resolve, reject) =>{
      let get_item = localStorage.getItem(myPlayers) //mim
      resolve(get_item)
  })
}


Actions.prototype.loadMyPlayers = async function (nameToGet){
  if(myList.length == 0){
console.log("list is empty");

    getPlayers = await getItem('myPlayers').then(item =>{
      if(!item){
        return []
      }
      return item.split(",") 
    })

    myList = getPlayers
//NEW
    return myList
}


  

}

Actions.prototype.saveMyPlayers = async function (myList){
   localStorage.setItem('myPlayers', myList);
} 