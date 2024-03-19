/*
Checkpoints for this calculator:
  - Set an eventListener to show input on the screen.
    + Create a case for each btn
        * have the case produce the text for the screen
        * have the case push the int and keep track of operators
  - Differentiate between num and operator 
    + Have a list of operations to check if it is an operator
    + add a boolean to the obj for the operator
  - Give functionality to operators
    + add a template function that can tell which operator to use. 
  - Have each part of the calculation be divided up into three parts ['2','+','3']
  - Clear ALL var and screen when 'clear' is pressed.
  - Client must not be able to divide by 0.
  - Calculate and show results when '=' is pressed
  Extra Features:
  - Allow for keys to operate calculator
  - Allow for floating int
    + Have '.' be pressed only once per int but can cancel if pressed again.
  - Allow for a delete button.
*/
const equaScreen = document.querySelector('.calc-equation');
const inputScreen = document.querySelector('.calc-input');
const btnList = document.getElementsByClassName('btn');
const operatorList = ['(',')','%','AC','X','/','+','-','='];
let total = [];
let regex = /[X,/,+,-]/g;
const calculateFunc = {
    'X':function(x,y){return x*y},
    '/':function(x,y){return x/y},
    '+':function(x,y){return x+y},
    '-':function(x,y){return x-y},
}
for(btn of btnList){
    btn.addEventListener('click',(event)=>{
        // if(operatorList.indexOf(event.target.innerHTML) !==-1){
        //     event.target.style.backgroundColor="white";
        // }
        // if(inputScreen.innerHTML ==='0' && event.target.innerHTML !== '.'){
        //     inputScreen.innerHTML = event.target.innerHTML;
        // }
        // else{inputScreen.innerHTML+=event.target.innerHTML};
        const text = event.target.innerHTML;
      switch (text){
        case 'AC':
          inputScreen.innerHTML='0'
          break;
        case 'DEL':  
          event.target.style.backgroundColor = 'white';
          inputScreen.innerHTML = inputScreen.innerHTML.slice(0,-1);
          setTimeout(()=>event.target.style.backgroundColor = 'yellow',50);
          break;
        case '%':  
          if(parseInt(inputScreen.innerHTML)<=0){inputScreen.innerHTML = parseFloat(inputScreen.innerHTML)*100}
          else{inputScreen.innerHTML = parseInt(inputScreen.innerHTML)/100}
          break;  
        case 'X':  
          event.target.style.backgroundColor = 'green';
          inputScreen.innerHTML+= ' '+event.target.innerHTML+' ';          
          break;
        case '/':  
          event.target.style.backgroundColor = 'white';
          operator = text;
          inputScreen.innerHTML+= ' '+event.target.innerHTML+' ';
          break;
        case '-':  
          event.target.style.backgroundColor = 'white';
          operator = text;
          inputScreen.innerHTML+= ' '+event.target.innerHTML+' ';
          break;
        case '+':  
          event.target.style.backgroundColor = 'white';
          operator = text;
          inputScreen.innerHTML+= ' '+event.target.innerHTML+' ';
          break;
        case '=':
        total.push(inputScreen.innerHTML.split(' '));
        equaScreen.innerHTML = inputScreen.innerHTML;
        break;
        default:
        if(inputScreen.innerHTML ==='0' && event.target.innerHTML !== '.'){
              inputScreen.innerHTML = event.target.innerHTML;
        }
         else {inputScreen.innerHTML+= event.target.innerHTML;}
          break;
      }
      })}