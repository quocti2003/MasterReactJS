export default function $23_State() {
  // cach de tao mot cai state variable trong react
  // thi phai su dung useSatet hook trong react

  // state --> define 2 things (viet no tron cai giong cai array)
  // state variable 1st
  // function which can change the value of state variable setCount --> set value of count variable
  // useState() nay la 1 cai state hook
  const [count, setCount] = useState(0);
  function hanldeClick() {
    // count += 1; // lam cai nay se bi loi do assign to const varible count
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      Count value is: {count}
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClick}>Decrement</button>
    </div>
  );
}
