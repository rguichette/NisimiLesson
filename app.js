
let display = new DisplayManager();
let players = new Players()
let actions = new Actions();
var input = document.createElement("input"); 

let myList = [];




async function getPlayerName(cb){
    let t =  await players.getAllPlayers().then(data =>{
        console.log(data.name);

       return  data.map(singlePlayer =>{            
            return singlePlayer.name
        })
       
    })

    return t
}







//promises 
//async await wrap 








window.addEventListener('storage', ()=>{
    console.log('something changed');
    
})





input.addEventListener('input', async ()=>{

    
    // var listHolder=null 


   let typedList = input.value.split("");

   console.log(typedList);

   let names = await getPlayerName()

//    console.log(names);
//JAMIE --> jamie

  let filtered =  names.map(singleName =>{
    listHolder=  document.createElement("div"); 
       for (let i = 0; i < typedList.length; i++) {
           const letter = typedList[i];
           if(!(singleName.toLowerCase().includes(letter.toLowerCase()))){
               return; 
           }
           
       }
       return singleName
   }).filter(item =>{
    return  item != undefined
   })



   console.log(filtered);

display.displayList(myList, filtered)


   
// playerPopUp.appendChild(listHolder);
   //Display today and local storage 
   //Diplay today localStorge tomorrow
   //or reverse 

   
//    display.displayList()
   


    
    
// console.log(t);

})




// display.displayList()

// let mySavedData = actions.addPlayer("single player")


//NEW refactor of the original - this time we're simply doing everything after we have a list 
actions.loadMyPlayers("myPlayers").then(list =>{
    
    
    console.log(list);
display.addPlayerBtn();
display.exitBtn()
display.savePlayerBtn()

console.log("myList is ", myList);

//NEW calling display here 
display.displayPlayers(myList)
})



// display.displayList()






