export default function $15() {
  // [] --> array
  // {} --> object
  // [{}] --> object array
  const fruits = [
    {
      name: "apple",
      price: 10,
      emoji: "🍎",
    },
    {
      name: "pineapple",
      price: 20,
      emoji: "🍍",
    },
    {
      name: "pineapple",
      price: 30,
      emoji: "🍌",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
