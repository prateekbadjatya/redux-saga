
const INITIAL_STATE = {
  products: [
    {
      id: 1,
      text: "iPhone",
      isFavorite: false,
      category: "Mobile",
      price: 1500,
    },
    {
      id: 2,
      text: "Lenovo Laptop",
      isFavorite: false,
      category: "Laptop",
      price: 1200,
    },
    {
      id: 3,
      text: "Peter England",
      isFavorite: false,
      category: "Clothing",
      price: 199,
    },
  ],
};
function productsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'products/LOAD_PRODUCTS': {
            return {...state}
        }
        default: 
            return {...state}
    }
}

export default productsReducer
