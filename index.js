const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"
];
let passwordLength = 9
let password1 = ''
const password1El = document.querySelector('#password1')
function main(){
    for(let i=0; i<passwordLength; i++){
        password1 += characters[randomIndex()]
    }
    password1El.textContent= password1
}

function randomIndex(){
    return Math.floor(Math.random()*characters.length)
}