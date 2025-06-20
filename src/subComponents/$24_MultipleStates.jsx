import { useState } from "react";
export default function $24_MultipleSatates() {
  const [count, setCount] = useState(0);
  const [changeByValue, setChangeByValue] = useState(1);
  function increaseChangeValue() {
    setChangeByValue(changeByValue + 1);
  }
  function decreaseChangeValue() {
    setChangeByValue(changeByValue - 1);
  }
  function increaseYourValueWith() {
    setCount(count + changeByValue);
  }
  function decreaseYourValueWith() {
    setCount(count - changeByValue);
  }
  return (
    <>
      <h1>Your value is: {count}</h1>
      <div className="changeByValueButton">
        <button onClick={increaseYourValueWith}>
          Increase by value: {changeByValue}
        </button>
        <button onClick={decreaseYourValueWith}>
          Decrease by value: {changeByValue}
        </button>
      </div>
      <h1>Your value want to change is: {changeByValue}</h1>
      <div className="changeByValueButton">
        <button onClick={increaseChangeValue}>Increasement</button>
        <button onClick={decreaseChangeValue}>Decreasement</button>
      </div>
    </>
  );
}
