//creates all elements
function CreateElements(){}




CreateElements.prototype.searchPopup = function (element){
    console.log("displaying popup ---creating", element);
    element.addEventListener("click", ()=>{

        console.log("created the popup");
        console.log("hello", addPlayerBtn);
  
 
        input.setAttribute("type", "text");
    
        form.appendChild(input)
        addPlayerModal.appendChild(form)
       
        exitbtn.appendChild(exitText)
    
    
     
        saveBtn.appendChild(saveText)
        addPlayerModal.appendChild(saveBtn)
    
    
        addPlayerModal.appendChild(exitbtn)
    
        addPlayerBtn.disabled = true;
        
    })
} 

CreateElements.prototype.closePopup = function (element){
    element.addEventListener("click", ()=>{
    console.log("exiting");
    clearForm([form, exitbtn, saveBtn])
    addPlayerBtn.disabled = false;
    input.value = ""
    })
}

CreateElements.prototype.saveBtn=function(element){
    element.addEventListener("click", ()=>{
        console.log("saving... exiting");
        addPlayerBtn.disabled = false;
        //add vals 
    
    
        //clear form
        input.value = ""
        clearForm([form, exitbtn, saveBtn])
    })
}


CreateElements.prototype.createListItems = function(body, myList, bucket, playerName){
    let person = document.createElement("button");
    let personText= document.createTextNode(playerName)
    person.appendChild(personText)
    // person.id=playerName;
    bucket.appendChild(person)



    person.addEventListener("click",async(e)=>{

        console.log(myList);
        
    actions.addPlayer(myList, playerName);

    actions.saveMyPlayers(myList);

//NEW LINE: this will create a new event on the windows object - any questions - please let me know

    let event = new CustomEvent('saveData', {details: e})
    //here the "dispatch" is sending out the event that we created 
    //think is if as a police dispatch - A police unit usually goes out and handles what that have to handle. -
    //here, it happens to be the event
    window.dispatchEvent(event)

        
       
    })
}

CreateElements.prototype.createPlayerBoxes = function (displayLocation, myList){
    
    
   //New - moved this up so we don't get that duplicate problem
   let player_container = document.createElement("div");
   //then we set it to empty like we usually do
   player_container.innerHTML =""
    
    //if display location is an html tag that can take....
    console.log("my list is ", myList, "and location to attach it is ", displayLocation);
    
    myList.map((player)=>{
        //creating a wrapper to home the image and last name to organize for EACH player
        let player_wrapper = document.createElement('div');
        //we'll give it an ID as well
        player_wrapper.id = "player_wrapper";

        

        //NEW 
        //getting player first name and last name
        let playerFistName = player.split(" ")[0]
        let playerLastName = player.split(' ')[1] //names are plit by spaces so we can grab the names by the spaces
    
    //now instead of pushing everying in player_container randomly, let wrap things first
   
    let player_name = document.createElement("p")
    player_name.innerHTML = player
    //here is where the actual wrapping is happenning -- notice how we use player wrapper instead of our original "player container"
    player_wrapper.appendChild(player_name)
        

    
    console.log("creating Element");
    

         //NEW 
        //here we're creating the image for the player
    
       // lets create an element to hold the image
        let myImageContainer = document.createElement('img')
        //lets also give it an id while we're at it so we can style later
        myImageContainer.id = 'player_img';

        //creating first name and last name attributes 
        let first_name = player.split(" ")[0];
        let last_name = player.split(' ')[1]; // the player is "first last" and we're splitting them and grabbing each part
        
        //let give the image tag we just created the image to work with 
        myImageContainer.src = `https://nba-players.herokuapp.com/players/${last_name}/${first_name}`
        //now let's attach it to something so we can see it -- here we are also pushing the image to the wrapper 
        player_wrapper.appendChild(myImageContainer)

        //Now the wrapper holds the name AND the image :)


        //here we will create a "-" button and it's your job to make it work as clean as possible
        let deletePlayer = document.createElement('button')
        deletePlayer.innerHTML = "-"
        player_wrapper.appendChild(deletePlayer)
        //last but not least, we will push the wrapper to the container and attach the container to the displayLocation
        player_container.appendChild(player_wrapper)
 
    displayLocation.appendChild(player_container)
    
    })
}



function clearForm(objsToRemove){
    var objs =[...objsToRemove];

   objs.map((item)=>{
       item.remove()
   })
    console.log(objs);

    
}