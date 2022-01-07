import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [expression, setExpression] = useState("");

  function buttonPressed(keyPressed)
  {
    var acceptedKeys = ['0','1','2','3','4','5','6','7','8','9', '+', '-', '*', '/', '.'];
    var operators = ['+', '-', '*', '/'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];

    // Make verifications
    if (acceptedKeys.indexOf(keyPressed.toString()) > -1)
    {
      if (expression.length <= 20)
      { 
        if (keyPressed != 0)
        {
          if (operators.indexOf(keyPressed) == -1)
          {
            setExpression(expression+keyPressed.toString());
          }
          else
          {
            //Checks if there is a number before the operator
            if (numbers.indexOf(expression.charAt(expression.length-1)) > -1)
            {
              setExpression(expression+keyPressed.toString());
            }
            else
            {
              //Check to see if the thing before was an operator. if it was, than change the operator
              if (operators.indexOf(expression.charAt(expression.length-1)) > -1)
              {
                setExpression(expression.slice(0, expression.length-1)+keyPressed.toString())
              }
            }
          }
        }
        else if (acceptedKeys.indexOf(expression.charAt(expression.length-1)) > -1) // Checks if there is any accepted key before the 0
        {
          //Checks if the key before the 0 is not any operator
          if (operators.indexOf(expression.charAt(expression.length-1)) == -1)
          {
            setExpression(expression+keyPressed.toString());
          }
        }
      }
    }
    else if (keyPressed == 'Clear')
    {
      setExpression("");
    }
    else if (keyPressed == 'Backspace')
    {
      if (expression == "Error") setExpression("");
      else setExpression(expression.substring(0,expression.length-1));
    }
    else if (keyPressed == 'Calculate')
    {
      try { setExpression(eval(expression).toString()); }
      catch {  }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button className="NumbersPanel">{expression}</button>
        </div>
        <div>
          <button className="Button-Erase" onClick={() => buttonPressed('Clear')}>Clear</button>
          <button className="Button-Erase" onClick={() => buttonPressed('Backspace')}>Backspace</button>
          <button className="Button-Operator" onClick={() => buttonPressed('/')}>÷</button>
        </div>
        <div>
          <button className="Button" onClick={() => buttonPressed(7)}>7</button>
          <button className="Button" onClick={() => buttonPressed(8)}>8</button>
          <button className="Button" onClick={() => buttonPressed(9)}>9</button>
          <button className="Button-Operator" onClick={() => buttonPressed('*')}>×</button>
        </div>
        <div>
          <button className="Button" onClick={() => buttonPressed(4)}>4</button>
          <button className="Button" onClick={() => buttonPressed(5)}>5</button>
          <button className="Button" onClick={() => buttonPressed(6)}>6</button>
          <button className="Button-Operator" onClick={() => buttonPressed('-')}>-</button>
        </div>
        <div>
          <button className="Button" onClick={() => buttonPressed(1)}>1</button>
          <button className="Button" onClick={() => buttonPressed(2)}>2</button>
          <button className="Button" onClick={() => buttonPressed(3)}>3</button>
          <button className="Button-Operator" onClick={() => buttonPressed('+')}>+</button>
        </div>
        <div>
          <button className="Button" onClick={redirect}>JgBr123</button>
          <button className="Button" onClick={() => buttonPressed(0)}>0</button>
          <button className="Button" onClick={() => buttonPressed('.')}>.</button>
          <button className="Button-Calculate" onClick={() => buttonPressed('Calculate')}>=</button>
        </div>
      </header>
    </div>
  );
}

function redirect()
{
  window.open("https://github.com/JgBr123/calculadora-react");
}

export default App;
