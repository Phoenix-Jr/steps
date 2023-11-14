import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

export function Steps() {
  const [step, setState] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setState(step - 1);
  }
  function handleNext() {
    if (step < 3) setState(step + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              {" "}
              <span>⬅️</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>➡️</span>
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step} : </h3>
      {children}
    </p>
  );
}
