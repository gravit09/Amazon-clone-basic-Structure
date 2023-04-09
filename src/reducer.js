export const initialState = {
  basket: [],
};

//it is the es6 slector function its just like for each loop of es6
export const getBasketTotal = (basket) =>
  basket.reduce((total, basket) => total + basket.price, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add-to-basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "remove-from-cart":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove the product as id dont match");
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
