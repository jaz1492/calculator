/*
Checkpoints for this calculator:
  - Set an eventListener to show input on the screen.
    + Create an Obj for each btn with key value pairs
    + have a module produce the text for the screen
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
let total = 'works';
const ObjFactory = function (str){
    return {
        id:str,
        isOperator: operatorList.indexOf(str) !==-1? true : false,

    }
}
const calculateFunc = {
    '(':function(){return},
    ')':function(){return},
    'AC':function(){return inputScreen.innerHTML=''},
    '=':function(){return inputScreen.innerHTML = total},
    'X':function(x,y){return x*y},
    '/':function(x,y){return x/y},
    '+':function(x,y){return x+y},
    '-':function(x,y){return x-y},
    '%':function(x){return inputScreen.innerHTML = `${x/100}`},
}
for(btn of btnList){
    btnObjList.push(ObjFactory(btn.innerHTML));
    btn.addEventListener('click',(event)=>{
        if(btnObjList.filter((x)=>x.id === event.target.innerHTML)[0].isOperator===true){
            calculation.push(inputScreen.innerHTML);
            calculation.push(event.target.innerHTML);
        }
        if(inputScreen.innerHTML ==='0' && event.target.innerHTML !== '.'){
            inputScreen.innerHTML = event.target.innerHTML;
        }
        else{inputScreen.innerHTML+=event.target.innerHTML}});
}