import { useNavigate } from "react-router-dom";
import "./Cart.css";
export default function Cart({ id, name, imgUrl, price }) {
  const navig = useNavigate();
  function OnPage() {
    navig("/page/" + id);
  }
  return (
    <article className="cart" onClick={OnPage}>
      <img className="img" src={imgUrl}></img>
      <p className="p">{name}</p>
      <p className="p">{price}$</p>
    </article>
  );
}
