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
const inputScreen = document.querySelector('.calc-input');
const btnList = document.getElementsByClassName('btn');
const operatorList = ['(',')','%','AC','X','/','+','-','='];
const btnObjList = [];
let calculation = [];
let operator = '';
let total = 'works';
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
        case '(':  
          event.target.style.backgroundColor = 'white';
          inputScreen.innerHTML = inputScreen.innerHTML[0] === '('?
            inputScreen.innerHTML.slice(1):
            inputScreen.innerHTML = '('+inputScreen.innerHTML;
          break;
        case '%':  
          inputScreen.innerHTML = parseInt(inputScreen.innerHTML)/100;
          break;  
        case 'X':  
          event.target.style.backgroundColor = 'white';
          operator = text;
          if(calculation.length < 1){calculation.push(inputScreen.innerHTML)};
          break;
        case '/':  
          event.target.style.backgroundColor = 'white';
          operator = text;
          if(calculation.length < 1){calculation.push(inputScreen.innerHTML)};
          break;
        case '-':  
          event.target.style.backgroundColor = 'white';
          operator = text;
          if(calculation.length < 1){calculation.push(inputScreen.innerHTML)};
          break;
        case '+':  
          event.target.style.backgroundColor = 'white';
          operator = text;
          if(calculation.length < 1){calculation.push(inputScreen.innerHTML)};
          break;
        default:
          inputScreen.innerHTML+= event.target.innerHTML;
          break;
      }
      })}