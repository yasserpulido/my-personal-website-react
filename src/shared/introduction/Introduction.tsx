import "./Introduction.css";
import logo from "../../assets/images/yasser-pulido.png";

function Introduction() {
  return (
    <div className="intro">
      <img src={logo} alt="logo" className="w-50" />
    </div>
  );
}

export default Introduction;
