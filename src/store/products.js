let initialState = {
    products: [
      {
        name: 'iPhone',
        category: 'Electronics',
        description: 'Latest model of the iPhone',
        price: 999,
        inventory: 10,
        categoryId: '1',
      },
      {
        name: 'PS5',
        category: 'Electronics',
        description: 'Gaming Console',
        price: 500,
        inventory: 10,
        categoryId: '1',
      },
      {
        name: 'Cookies',
        category: 'Food',
        description: 'Chocolate Chip',
        price: 5,
        inventory: 10,
        categoryId: '3',
      },
      {
        name: 'Chip',
        category: 'Food',
        description: 'Original Lays',
        price: 10,
        inventory: 10,
        categoryId: '3',
      },
    ],
  };
  
  function productReducer(state = initialState, action) {
    let { type, payload } = action;
  
    switch (type) {
      case 'UPDATE_INVENTORY':
        let products = state.products.map(product => {
          if (product.name === payload) {
            return { ...product, inventory: product.inventory - 1 };
          } else {
            return product;
          }
        });
  
        return { products };
  
      case 'RESET_INVENTORY':
        return initialState;
  
      default:
        return state;
    }
  }
  
  export default productReducer;