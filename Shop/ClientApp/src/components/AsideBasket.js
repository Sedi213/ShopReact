import { useGlobalContext } from "../AppProvider";
import { IoMdClose } from "react-icons/io";
import "./AsideBasket.css";
import BasketLi from "./BasketLi";
export default function AsideBasket() {
  const { basket, showAside, HideBasket } = useGlobalContext();

  let sum = 0;
  basket.forEach((e) => {
    sum = sum + e.price * e.count;
  });
  return (
    <aside className={showAside ? "show" : "hide"}>
      <div className="close_container">
        <button className="close" onClick={HideBasket}>
          <IoMdClose className="close_icon" />
        </button>
      </div>
      <ul>
        {basket.map((e) => {
          return <BasketLi key={e.id} {...e} />;
        })}
      </ul>
      <button className="order">Sum : {sum}</button>
    </aside>
  );
}
