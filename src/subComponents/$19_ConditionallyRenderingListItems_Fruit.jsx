export default function $19_ConditionallyRenderingListItems_Fruit({
  name,
  price,
  emoji,
}) {
  // cai nam trong cai ngoac nhon la destructuring assignment trong ReactJS --> phan ra doi tuong
  return (
    <>
      {price > 5 ? (
        <h3>
          {emoji} {name} {price}
        </h3>
      ) : (
        ""
      )}
    </>
  );
}
