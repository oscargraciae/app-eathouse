const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SET_DATA":
      return {
        ...action.payload,
      }
    case "REMOVE_DATA":
      return null;
    default:
      return state;
  }
}

export default userReducer;
