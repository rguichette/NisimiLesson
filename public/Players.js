//handles all api calls 

console.log('hello from api line 1');

// let allPlayers = axios.get('https://nba-players.herokuapp.com/players-stats').then( players =>{
//     console.log(players);
//     return players
// })

function Players(){}



/**
 * returns list of all players 
 */
Players.prototype.getAllPlayers = async function (){ 

    return await axios.get('https://nba-players.herokuapp.com/players-stats')
  .then( players =>{ 
    // console.log(players.data);
    return players.data
  }).catch(err =>{
    console.log(err);
    
  })}

/**
 * 
 * @param {String} first_name 
 * @param {String} last_name 
 */

 //NEW - we don't need this at all since the image tag can call the links itself with the "src" attribute
 //for more information - look up "img tag" and take a look at how it works

Players.prototype.getPlayerImg =  async function(first_name, last_name){

  console.log("First name ", first_name);
  
    //TODO if types    
    if(!(typeof(first_name) =='string' || typeof(last_name) =='string')){
      return console.error("expected stings in params")
    }

    //NEW
    //switch the locations of fist and last in the link. here we are simply fixing our mistake because the api take the last name first
    return await axios.get(`https://nba-players.herokuapp.com/players/${last_name}/${first_name}`).then(img => img)
}

















