function Props(props) {
  console.log(props);
  return (
    <>
      <h1>Hello customer: {props.name} </h1>
      <h1>Your age is: {props.age}</h1>
    </>
  );
}

export default Props;
