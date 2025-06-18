import RenderArrayLists_13 from "../subComponents/RenderArrayLists_13";

function $13() {
  const person = {
    name: "quoc ti",
    message: "Hello, ",
    emoji: "👌",
    age: 22,
    university: "University of Science",
    seatNumbers: [1, 2, 3, 4, 5],
  };

  return (
    <div>
      <h2>Seat Information</h2>
      <RenderArrayLists_13
        message={person.message}
        seatNumbers={person.seatNumbers}
        name={person.name}
        emoji={person.emoji}
      />
    </div>
  );
}

export default $13;
