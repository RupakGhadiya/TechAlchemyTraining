import React, { useState, useEffect } from "react";
import "./Calculator.css";
import { HiOutlineBackspace } from "react-icons/hi";
import { BsDot } from "react-icons/bs";

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (event) => {
    const { key } = event;
    if (key === "Enter") {
      event.preventDefault();
      handleCalculate();
    } else if (key === "Escape") {
      event.preventDefault();
      handleClear();
    } else {
      setDisplay(display + key);
    }
  };

  const handleClick = (value) => {
    if (value === "=") {
      handleCalculate();
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const evaluatedResult = eval(display);
      setResult(evaluatedResult);
      setHistory([
        ...history,
        { expression: display, result: evaluatedResult },
      ]);
      setDisplay("");
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
    <div className="switch-container">
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round" />
        </label>
        <label className="switch-label">{darkMode ? "Light" : "Dark"}</label>
      </div>
    <div className="app">
      

      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="display">
          <div className="history">
            {history.map((item, index) => (
              <div key={index}>
                <span>{item.expression} = </span>
                <span>{item.result}</span>
              </div>
            ))}
          </div>

          <div className="main_display">
            <div className="input">
              <input type="text" value={display} readOnly />
            </div>
            <div className="result">
              <div>{result}</div>
            </div>
          </div>
        </div>
        <div className="keybord">
          <div className="key1">
            <button onClick={() => handleClick("1")}>e</button>
            <button onClick={() => handleClick("2")}>μ</button>
            <button onClick={() => handleClick("3")}>sin</button>
            <button onClick={() => handleClick("+")}>deg</button>
          </div>

          <div className="key2">
            <button id="ac" onClick={handleClear}>
              Ac
            </button>
            <button id="back" onClick={handleClear}>
              <span id="backspace">
                <HiOutlineBackspace />
              </span>
            </button>
            <button onClick={() => handleClick("/")}>/</button>
            <button onClick={() => handleClick("*")}>*</button>
          </div>
          <div className="key3">
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button id="minus" onClick={() => handleClick("-")}>
              -
            </button>
          </div>
          <div className="key4">
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button id="plus" onClick={() => handleClick("+")}>
              +
            </button>
          </div>
          <div className="key5">
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
          </div>
          <div className="key6">
            <button id="zero" onClick={() => handleClick("0")}>
              0
            </button>
            <button onClick={() => handleClick(".")}>
              <span id="dot">
                <BsDot />
              </span>
            </button>
            <button id="equal" onClick={handleCalculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Calculator;
