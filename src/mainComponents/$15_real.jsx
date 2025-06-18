import sc_Fruits from "../subComponents/sc_Fruits";
export default function $15_real() {
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
    <ul>
      {fruits.map((fruit) => (
        <li>
          <sc_Fruits
            key={fruit.name}
            emoji={fruit.emoji}
            name={fruit.name}
            price={fruit.price}
          />
        </li>
      ))}
    </ul>
  );
}
