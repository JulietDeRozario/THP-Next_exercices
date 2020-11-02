const pastaReducer = (state=3, action) => {
  switch(action.type){
    case "EATPASTA" :
      return state - 1;
    default:
      return state;
  }
}

export default pastaReducer;