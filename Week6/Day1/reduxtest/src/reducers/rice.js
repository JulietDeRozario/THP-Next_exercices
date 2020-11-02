const riceReducer = (state=0, action) => {
  switch(action.type){
    case "EATRICE" :
      return state - 1;
    case "BUY" : 
      return state + 1
    default:
      return state;
  }
}

export default riceReducer;