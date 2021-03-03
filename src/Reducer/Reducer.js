const initialState = {
  ingredients: {
    mushrooms: false,
    pepperoni: false,
    peppers: false,
    cheese: false,
    crust: false,
  },
  config: {
    size: "Regular",
    priceMultiplier: 1,
  },
  basePrice: 0,
  totalPrice: 0,
};

const INGREDIENT_PRICE = {
  mushrooms: 60,
  pepperoni: 120,
  peppers: 40,
  cheese: 50,
  crust: 20,
};

const reducer = (state = initialState, action) => {
  if (action.type === "SELECT") {
    const label = action.e.target.getAttribute("label");
    const updatedIngredients = { ...state.ingredients };
    let newPrice;
    let { basePrice } = state;
    if (action.e.target.checked) {
      newPrice = basePrice + INGREDIENT_PRICE[label];
    }
    if (!action.e.target.checked) {
      newPrice = basePrice - INGREDIENT_PRICE[label];
    }
    updatedIngredients[label] = action.e.target.checked;
    return {
      ...state,
      ingredients: updatedIngredients,
      basePrice: newPrice,
      totalPrice: newPrice * state.config.priceMultiplier,
    };
  }
  if (action.type === "SIZE_SELECT") {
    const updatedSize = { ...state.config };
    const size = action.e.target.getAttribute("name");
    updatedSize["size"] = size;
    let { basePrice } = state;
    let priceMultiplier;
    if (size === "Regular") priceMultiplier = 1;
    if (size === "Medium") priceMultiplier = 1.5;
    if (size === "Large") priceMultiplier = 2.5;
    updatedSize["priceMultiplier"] = priceMultiplier;
    return {
      ...state,
      config: updatedSize,
      totalPrice: basePrice * priceMultiplier,
    };
  }
  if (action.type === "CANCEL_CHECKOUT" || "ORDER_COMPLETED") {
    return {
      ...initialState,
      ingredients: { ...initialState.ingredients },
      config: { ...initialState.config },
    };
  }
  return state;
};

export default reducer;
