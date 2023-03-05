import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  basket: [],
  searchString: "",
  showAside: false,
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const SetCart = (cart) => {
    dispatch({ type: "SET_CART", payload: cart });
  };
  const SetSearchString = (str) => {
    dispatch({ type: "SET_SEARCHSTRING", payload: str });
  };
  const AddToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  const ShowBasket = () => {
    dispatch({ type: "SHOW_Basket" });
  };
  const HideBasket = () => {
    dispatch({ type: "HIDE_Basket" });
  };
  const Increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const Decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        SetCart,
        SetSearchString,
        AddToBasket,
        ShowBasket,
        HideBasket,
        Increase,
        Decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
