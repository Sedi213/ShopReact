import "./BasketLi.css";
import { AiOutlineDown } from "react-icons/ai";
import { useGlobalContext } from "../AppProvider";
export default function BasketLi({ imgUrl, name, price, count, id }) {
  const { Increase, Decrease } = useGlobalContext();

  return (
    <li>
      <img className="Basket_img" src={imgUrl}></img>
      <div className="Basket_block">
        <p>{name}</p>
        <p>{price}$ for one</p>
      </div>
      <div className="counter">
        <AiOutlineDown
          className="Up"
          onClick={() => {
            Increase(id);
          }}
        />
        <p className="count">{count}</p>
        <AiOutlineDown
          className="Down"
          onClick={() => {
            Decrease(id);
          }}
        />
      </div>
    </li>
  );
}
