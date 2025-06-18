import $18_DisplayOn from "./$18_DisplayOn"; // nằm trong cùng cây thư mục thì ./
import $18_DisplayOff from "./$18_DisplayOff";
export default function $18_TernaryOperator() {
  const display = true;
  // cái này ban đầu là như thế này
  // JSX --> Javascript + XML
  // return display ? <h1>Display mode is on</h1> : <h1>Display mode is off</h1>;

  // Nếu đã return các cái JSX được thì có nghĩa là mình có thể return được các cái Component được luôn
  return display ? <$18_DisplayOn /> : <$18_DisplayOff />;
}
