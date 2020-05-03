
//this file manages UI interactions 

let addPlayerBtn = document.getElementById('add_player')
let addPlayerModal = document.getElementById('add_player_modal')
var exitbtn = document.createElement("button")
var saveBtn = document.createElement("button"); 
var form = document.createElement("div"); 

saveBtn.id= "save_btn";
var saveText = document.createTextNode("Save");

exitbtn.id = "exit_btn";
var exitText = document.createTextNode("exit")

form.setAttribute("id", "player_popup")
var input = document.createElement("input"); 
var body = document.getElementsByTagName('body')[0];


//NEW 
//responsible for holding the list of players
var playerholder = document.createElement("div")
playerholder.id='my_Players' //also giving it an ID
//pushing this ^ to the body so we don't have muliple things attached to the body 
body.appendChild(playerholder)




let createElement = new CreateElements();

// let playersList = document.createElement('div');


function DisplayManager(){};


DisplayManager.prototype.addPlayerBtn = function (){

createElement.searchPopup(addPlayerBtn)

console.log("hello from display");

};
DisplayManager.prototype.savePlayerBtn = function(params) {
    createElement.saveBtn(saveBtn)
};

DisplayManager.prototype.exitBtn = function(){
createElement.closePopup(exitbtn)
};


DisplayManager.prototype.displayList = function(myList, players){
    var playerPopUp = document.getElementById("player_popup")
console.log("dipslaying list",playersList);

playersList.innerHTML =""


players.map(playerName =>{
    

    console.log("player pop",playerPopUp);

createElement.createListItems(body,myList, playersList, playerName)
       
       
   })


   

   playerPopUp.appendChild(playersList)


}

DisplayManager.prototype.displayPlayers = function (myList){
    console.log("displaying...");

    //NEW 
//loading the players once the this function runs and in the add listener event we are calling it again as a refresher
    createElement.createPlayerBoxes(playerholder, myList)
  
    window.addEventListener('saveData',()=>{
        //NEW
        //At the beginning we'll empty out that container to save us from dublicates 
        playerholder.innerHTML=""
        console.log("hi there");
        // display.displayPlayers(myList)

        //NEW instead of pushing to the body - we'll pass down that containter and all we have to do is empty it out every timer
        createElement.createPlayerBoxes(playersholder, myList)


   

    })


}




