const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_SEARCHSTRING":
      return { ...state, searchString: action.payload };
    case "ADD_TO_BASKET":
      let tempBasket = state.basket;
      let phone = tempBasket.find((x) => x.id === action.payload.id);
      if (phone) {
        phone.count++;
      } else {
        phone = action.payload;
        phone.count = 1;
        tempBasket.push(phone);
      }
      return { ...state, basket: tempBasket };
    case "HIDE_Basket":
      return { ...state, showAside: false };
    case "SHOW_Basket":
      return { ...state, showAside: true };
    case "INCREASE":
      let item = state.basket.find((x) => x.id === action.payload);
      item.count++;
      return { ...state };
    case "DECREASE":
      let itemPhone = state.basket.find((x) => x.id === action.payload);
      itemPhone.count--;
      if (itemPhone.count === 0) {
        let NewBasket = state.basket.filter((e) => e.id !== action.payload);
        return { ...state, basket: NewBasket };
      }
      return { ...state };
  }
};

export default reducer;
