export default function $17_ConditionalRenderingUsingElementVariables() {
  let messageOne = <h1>Hello World from message 1</h1>; // thay vì mình sài hai biến messageOne và messageTwo khác nhau
  let messageTwo = <h1>Hello World from message 2</h1>;

  // thì mình sẽ làm bằng cách này
  let message;
  let display = true;
  if (display) {
    message = <h1>Hello World from message 1</h1>;
  } else {
    message = <h1>Hello World from message 2</h1>;
  }
  return message;
}
