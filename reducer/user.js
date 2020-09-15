const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SET_DATA":
      return {
        ...action.payload,
        persistExpiresAt: action.date,
      }
    default:
      return state;
  }
}

export default userReducer;
