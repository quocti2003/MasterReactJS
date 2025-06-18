function DestructuringProps_10({ message, name, emoji }) {
  // 1st version props props
  // 2nd version const [name, message] = props --> this way dont need props. anymore
  // 3rd version props <=> {name, message} --> the same as thê 2nd version

  return (
    <>
      <h1>
        {/* version 1 */}
        {/* {props.message} {props.name} */}
        {/* version 2 */}
        {/* {message} {name} */}
        {/* {message} {name} */}
        {name} {emoji} {message}
      </h1>
    </>
  );
}

export default DestructuringProps_10;
