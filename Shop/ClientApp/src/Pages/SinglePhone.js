import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../AppProvider";
import './SinglePhone.css'
export default function SinglePhone() {
  const { id } = useParams();
  const {AddToBasket}=useGlobalContext();
  const [loading, SetLoading] = useState(true);
  const [phone, SetPhone] = useState({});
  async function fetchdata() {
    let response = await fetch("/shop/getphonebyid?id=" + id);
    const data = await response.json();
    SetPhone(data);
    SetLoading(false);
  }
  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="section">
      <img className="single_img" src={phone.imgUrl}></img>
    <div className="date">
        <p>{phone.name}</p>
        <p>{phone.description}</p>
        <p>{phone.price}$</p>
        <button onClick={()=>{AddToBasket(phone)}}>Add To Basket</button>
    </div>
    </section>
  );

}
