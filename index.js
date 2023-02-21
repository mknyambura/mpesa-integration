var button = document.querySelector('#button')
var businessNumber = document.querySelector('.businessNumber')
var tillNumber = document.querySelector('.tillNumber')
var accountNumber = document.querySelector('.accountNumber')
var popUp = document.querySelector('#popUp')

function leftClick(){
    button.style.left = '0'
    businessNumber.style.display = 'block'
    tillNumber.style.display = 'none'
    accountNumber.style.display = 'block'
}
function rightClick(){
    button.style.left = '135px'
    businessNumber.style.display = 'none'
    tillNumber.style.display = 'block'
    accountNumber.style.display = 'none'
}
function openPopup(){
    popUp.classList.add('active');
}
function closePopup(){
    popUp.classList.remove('active')
}