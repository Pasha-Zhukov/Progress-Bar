const reducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE':
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
