const inputScreen = document.querySelector('.calc-input');
const btnList = document.getElementsByClassName('btn');
for(btn of btnList){
    btn.addEventListener("click",(event)=>inputScreen.innerHTML+=event.target.innerHTML);
}