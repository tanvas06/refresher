import { useReducer } from 'react';
import './styles.css'
import digitBtn from './digitBtn';
import operationBtn from './operationBtn';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""} ${payload.digit}`
      }
  }
}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <operationBtn operation="/" dispatch={dispatch} />
      <digitBtn digit="1" dispatch={dispatch} />
      <digitBtn digit="2" dispatch={dispatch} />
      <digitBtn digit="3" dispatch={dispatch} />
      <operationBtn operation="*" dispatch={dispatch} />
      <digitBtn digit="4" dispatch={dispatch} />
      <digitBtn digit="5" dispatch={dispatch} />
      <digitBtn digit="6" dispatch={dispatch} />
      <operationBtn operation="+" dispatch={dispatch} />
      <digitBtn digit="7" dispatch={dispatch} />
      <digitBtn digit="8" dispatch={dispatch} />
      <digitBtn digit="9" dispatch={dispatch} />
      <operationBtn operation="-" dispatch={dispatch} />
      <digitBtn digit="." dispatch={dispatch} />
      <digitBtn digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
