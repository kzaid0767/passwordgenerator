const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"
];
let passwordLength = 9
const lengthInputEl = document.querySelector('#lengthpassword')
const password1El = document.querySelector('#password1')
const password2El = document.querySelector('#password2')


function main(){
    passwordLength = parseInt(lengthInputEl.value) 
    if( passwordLength >=8 && passwordLength <= 20){
        password1El.textContent = passwordMaker()
        password2El.textContent = passwordMaker()
    }

}

function randomIndex(){
    return Math.floor(Math.random()*characters.length)
}

function passwordMaker(){
    let password = ''
    for(let i=0; i<passwordLength; i++){
        password += characters[randomIndex()]
    }
    return password
}

// The function that copies to clipboard
function copyPasswordOne(){
    if(password1El.textContent){
        navigator.clipboard.writeText(password1El.textContent)
        alert('Password copied')
    }
}

function copyPasswordTwo(){
    if(password2El.textContent){
        navigator.clipboard.writeText(password2El.textContent)
        alert('Password copied')
    }
}