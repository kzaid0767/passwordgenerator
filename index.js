const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
    "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]

const fullCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
    "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
    "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
    "|",":",";","<",">",".","?",
"/"]

const body = document.getElementById('body')
const topH1= document.getElementById('top-h1')
const mainP = document.getElementById('main-p')
const h1Span = document.getElementById('h1-span')
const passwordContainer = document.getElementById('password-container')
const charactersDiv = document.querySelector('#characters-div')
const mode = document.getElementById('mode-switch')
const specialcharacters = document.getElementById('specialcharacters')

const mainButton = document.querySelector('#main-button')

const password1Holder = document.querySelector('#password-1')
const password2Holder = document.querySelector('#password-2')

let passwordLength = 12
let password1 = ''
let password2 = ''
let isLightMode = false
let isUsingSpecialCharacters = false

// Checking using special characters
specialcharacters.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        isUsingSpecialCharacters = true
    } else {
        isUsingSpecialCharacters = false
    }
})

// checking for mode switch
mode.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        isLightMode = true
    } else {
        isLightMode = false
    }
    handleModeSwitch()
})

// Switching light and dark mode

function handleModeSwitch() {
    if(isLightMode){
        body.classList.remove('dark-body')
        body.classList.add('light-body')
        topH1.classList.remove('dark-h1')
        topH1.classList.add('light-h1')
        mainP.classList.remove('dark-p')
        mainP.classList.add('light-p')
        h1Span.classList.remove('dark-span')
        h1Span.classList.add('light-span')
        passwordContainer.classList.remove('dark-container')
        passwordContainer.classList.add('light-container')
        charactersDiv.classList.remove('dark-characters')
        charactersDiv.classList.add('light-p')
    } else{
        body.classList.remove('light-body')
        body.classList.add('dark-body')
        topH1.classList.remove('light-h1')
        topH1.classList.add('dark-h1')
        h1Span.classList.remove('light-span')
        h1Span.classList.add('dark-span')
        passwordContainer.classList.remove('light-container')
        passwordContainer.classList.add('dark-container')
        charactersDiv.classList.remove('light-p')
        charactersDiv.classList.add('dark-characters')
    }
}

//Generating password
mainButton.addEventListener('click',generatePassword)

function generatePassword(){
    if (isUsingSpecialCharacters){
        for(let i=1;i<=passwordLength; i++){
            let index = Math.floor(Math.random()*fullCharacters.length)
            password1 += `${fullCharacters[index]}`
        }
        for(let i=1;i<=passwordLength; i++){
            let index = Math.floor(Math.random()*fullCharacters.length)
            password2 += `${fullCharacters[index]}`
        }
    }else{
        for(let i=1;i<=passwordLength; i++){
            let index = Math.floor(Math.random()*characters.length)
            password1 += `${characters[index]}`
        }
        for(let i=1;i<=passwordLength; i++){
            let index = Math.floor(Math.random()*characters.length)
            password2 += `${characters[index]}`
        }
    }
    password1Holder.value = password1
    password2Holder.value = password2
    password1=''
    password2=''
}

password1Holder.addEventListener('click',copyToClipboard)
password2Holder.addEventListener('click',copyToClipboard)

function copyToClipboard(e) {
    if(e.target.value){
        navigator.clipboard.writeText(e.target.value)

    alert('Your password was copied to clipboard')
    }
}

//Copying to clipboard
