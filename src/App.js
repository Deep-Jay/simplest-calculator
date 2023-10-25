import { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import './App.css';
import DarkmodeToggler from './components/darkmodeToggler';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    resultRef.current = result
  }, [result]);
  
  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    setHistory((history) => [...history, `${resultRef.current} + ${inputRef.current.value} = ${result + Number(inputRef.current.value)}`]);
  }

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    setHistory((history) => [...history, `${resultRef.current} - ${inputRef.current.value} = ${result - Number(inputRef.current.value)}`]);
  }

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    setHistory((history) => [...history, `${resultRef.current} &#215; ${inputRef.current.value} = ${result * Number(inputRef.current.value)}`]);
  };

  const divide = (e) => {
    e.preventDefault();
    if(!(Number(inputRef.current.value) === 0)) {
      setResult((result) => result / Number(inputRef.current.value));
      setHistory((history) => [...history, `${resultRef.current} &#247; ${inputRef.current.value} = ${result / Number(inputRef.current.value)}`]);
    }
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((pre) => pre * 0);
    setHistory([]);
  };

  return (
    <div className="App">
      <h1>Simplest Calculator</h1>
      <DarkmodeToggler />
      <form>
        <p className='result-field text-right text-4xl' >{result}</p>
        <hr className='my-6'></hr>
        <div>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' pattern='[0-9]' type="number" ref={inputRef} placeholder='Type a number' />
        </div>
        
        <div className='resets'>
          <button className='btn-red' onClick={resetResult}>RESET</button>
          <button className='btn-red' onClick={resetInput}>CLR</button>
        </div>

        <div className='operations'>
          <button className='btn-blue' onClick={plus}>&#43;</button>
          <button className='btn-blue' onClick={minus}>&#8722;</button>
          <button className='btn-blue' onClick={times}>&#215;</button>
          <button className='btn-blue' onClick={divide}>&#247;</button>
        </div>

      </form>
        <hr className='my-6'></hr>
          <h2 className='text-3xl'>History</h2>
        <div className="history">
          <ol>{[...history].reverse().map((h,i) => parse(`<li class="first:text-xl" data-index="${i+1}" key=${i}>${h}</li>`))}</ol>
        </div>
    </div>
  );
}

export default App;
