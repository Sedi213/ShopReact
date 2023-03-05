import { useEffect } from "react";
import { useGlobalContext } from "../AppProvider";
import Cart from "./Cart";
import "./PhoneList.css";
export default function PhoneList() {
  const { searchString, SetCart, cart } = useGlobalContext();
  async function fetchdata() {
    let response;
    if (!searchString) {
      response = await fetch("/shop/search");
    } else {
        response = await fetch("/shop/search?str="+searchString);
    }
    const data = await response.json();
    console.log(data);
    SetCart(data);
  }
  useEffect(() => {
    fetchdata();
  }, [searchString]);
  return (
    <section className="phones">
      {cart.map((e) => {
        return <Cart key={e.id} {...e} />;
      })}
    </section>
  );
}
