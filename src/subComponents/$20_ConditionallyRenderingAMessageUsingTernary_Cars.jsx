import $20_ConditionallyRenderingAMessageUsingTernary_Car from "./$20_ConditionallyRenderingAMessageUsingTernary_Car";
export default function $20_ConditionallyRenderingAMessageUsingTernary_Cars() {
  const cars = [
    {
      brand: "Audi",
      name: "Etron gt",
      price: 10000,
      soldOut: true,
    },
    {
      brand: "Ferrari",
      name: "Panamera",
      price: 11000,
      soldOut: true,
    },
    {
      brand: "Lamboghini",
      name: "Aventador",
      price: 20000,
      soldOut: false,
    },
  ];

  return (
    <>
      <ul>
        {cars.map((car) => (
          <$20_ConditionallyRenderingAMessageUsingTernary_Car
            key={car.name}
            brand={car.brand}
            price={car.price}
            name={car.name}
            soldOut={car.soldOut}
          />
        ))}
      </ul>
    </>
  );
}
