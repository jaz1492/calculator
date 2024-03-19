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
const operatorList = ['DEL','%','AC','X','/','+','-','='];
let total = [];
let regex = /[X,/,+,-]/;
const calculateFunc = {
    'X':function(x,y){return x*y},
    '/':function(x,y){return x/y},
    '+':function(x,y){return x+y},
    '-':function(x,y){return x-y},
}
const checkForMultOperator = function(eventText){
  //this conditional finds out if the last input is any operator so we can make sure not to put mult. operators
  if(regex.test(inputScreen.innerHTML[inputScreen.innerHTML.length-2])){
    return inputScreen.innerHTML = inputScreen.innerHTML.slice(0,inputScreen.innerHTML.length-2)+eventText+' ';
  }
  else{
    return inputScreen.innerHTML+=' '+eventText+' ';
  } 
}
for(btn of btnList){
  if(operatorList.indexOf(btn.innerHTML) !==-1){
    btn.style.backgroundColor='white';
    
}
    btn.addEventListener('click',(event)=>{
      const eventText = event.target.innerHTML;
      switch (eventText){
        case 'AC':
          inputScreen.innerHTML='0'
          break;
        case 'DEL':  
          event.target.style.backgroundColor = 'yellow';
          inputScreen.innerHTML = inputScreen.innerHTML.slice(0,-1) == ''? '0' :inputScreen.innerHTML.slice(0,-1);
          setTimeout(()=>event.target.style.backgroundColor = 'white',50);
          break;
        case '%':  
          if(parseInt(inputScreen.innerHTML)<=0){inputScreen.innerHTML = parseFloat(inputScreen.innerHTML)*100}
          else{inputScreen.innerHTML = parseInt(inputScreen.innerHTML)/100}
          break;  
        case 'X':  
          event.target.style.backgroundColor = 'green';
          checkForMultOperator(eventText);      
          break;
        case '/':  
          event.target.style.backgroundColor = 'white';
          checkForMultOperator(eventText);
          break;
        case '-':  
          event.target.style.backgroundColor = 'white';
          checkForMultOperator(eventText);
          break;
        case '+':  
          event.target.style.backgroundColor = 'white';
          checkForMultOperator(eventText);
          break;
        case '=':
        total.push(inputScreen.innerHTML.split(' '));
        equaScreen.innerHTML = inputScreen.innerHTML;
        break;
        default:
        if(inputScreen.innerHTML ==='0' && eventText !== '.'){
              inputScreen.innerHTML = eventText;
        }
         else {inputScreen.innerHTML+= eventText;}
          break;
      }
      })}