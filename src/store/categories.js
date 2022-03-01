let initialState = {
    categories: [
      {
        name: 'Electronics',
        description: 'Electricity!',
      },
      {
        name: 'Food',
        description: 'Stuff we eat!',
      },
    ],
    active: '',
  };
  
  function catergoryReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
      case 'SET_ACTIVE_CATEGORY':
        return { ...state, active: payload.category };
  
      case 'REST_ACTIVE':
        return initialState;
  
      default:
        return state;
    }
  }
  export default catergoryReducer;