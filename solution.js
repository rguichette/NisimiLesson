let typedLetters = input.value.split("");

console.log(typedLetters);

let playerNames = await getPlayers().then(player_names => player_names.map(name => name.name) )


let filtered = playerNames.map(name =>{
// console.log(name);
for(let i = 0; i < typedLetters.length; i ++){
    if(!(name.toLowerCase().includes(typedLetters[i]))){
        return
    }
}
return name
}).filter(item =>{
  return  item != undefined
})

console.log(filtered);

