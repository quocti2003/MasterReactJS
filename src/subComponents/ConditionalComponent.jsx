import $16_Welcome from "./$16_Welcome";
import $16_Code from "./$16_Code";

export default function ConditionalComponent() {
  const display = true;
  if (display) {
    return <$16_Welcome />;
  } else {
    return <$16_Code />;
  }
}
