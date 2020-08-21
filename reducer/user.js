const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SET_DATA":
      return {
        data: action.payload,
        persistExpiresAt: action.date,
      }
    default:
      return state;
  }
}
