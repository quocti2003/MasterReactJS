export default function $20_ConditionallyRenderingAMessageUsingTenary_Car({
  brand,
  name,
  price,
  soldOut,
}) {
  return (
    <>
      <li>
        <h1>
          {brand} {name} {price} {soldOut ? "soldOut" : "notSoldOut"}
        </h1>
      </li>
    </>
  );
}
