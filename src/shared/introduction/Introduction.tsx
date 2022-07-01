import "./Introduction.css";
import logoDesktop from "../../assets/images/yasser-pulido.png";
import logoPhone from "../../assets/images/y.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Introduction() {
  const { height, width } = useWindowDimensions();

  if (width <= 480) {
    return (
      <div className="intro">
        <img src={logoPhone} alt="logo" className="w-25" />
      </div>
    );
  }

  return (
    <div className="intro">
      <img src={logoDesktop} alt="logo" className="w-50" />
    </div>
  );
}

export default Introduction;
