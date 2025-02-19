/*import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");
};*/

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon']
let exten = ['.com', '.es', '.br.com',]

/*for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < noun.length; h++) {
      for (let f = 0; f < exten.length; f++) {
          console.log(pronoun[i] + adj[j] + noun[h] + exten[f])

    }
  }
}
}*/

//hack

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < noun.length; h++) {
      
          console.log(pronoun[i] + adj[j] + noun[h].slice(0,noun[h].length-2)+'.'+noun[h].slice(noun[h].length-2,noun[h].length))

    
  }
}
}