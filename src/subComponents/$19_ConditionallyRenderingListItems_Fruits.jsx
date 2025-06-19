import $19_ConditionallyRenderingListItems_Fruit from "../subComponents/$19_ConditionallyRenderingListItems_Fruit";
export default function $19_ConditionallyRenderingListItems_Fruits() {
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

  const cars = [
    {
      brand: "audi",
      name: "audi etron",
      price: 16000,
      color: "red",
    },
    {
      brand: "lamboghini",
      name: "lamboghini revulto",
      price: 20000,
      color: "orange",
    },
    {
      brand: "ferrari",
      name: "panamera",
      price: 18000,
      color: "white",
    },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>
          <$19_ConditionallyRenderingListItems_Fruit
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
