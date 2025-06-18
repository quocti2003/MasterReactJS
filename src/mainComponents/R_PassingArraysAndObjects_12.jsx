import PassingArraysAndObjects_12 from "../subComponents/PassingArraysAndObjects_12";

function R_PassingArraysAndObjects_12() {
  // the return must be jsx --> which means javascript xml

  // 12. Passing Arrays & Objects To Components Using Props
  // this is Array in ReactJS also as in Javascript
  const seatNumbers = [1, 2, 3, 4, 5];

  // this is Object in ReactJS
  const person = {
    name: "quoc ti",
    message: "Hello, ",
    emoji: "👌",
    age: 22,
    university: "University of Science",
    seatNumbers: [1, 2, 3, 4, 5],
  };

  return <PassingArraysAndObjects_12 person={person} />;
}
export default R_PassingArraysAndObjects_12;
