import moment from 'moment';

const add = (data) => {
  return {
    type: "SET_DATA",
    payload: data,
  }
}

export const addUserData = (address) => {
  return (dispatch, getState) => {
    dispatch(add({ address }));
  }
}

// export const removeData = () => {
//   return (dispatch, getState) => {
//     dispatch(() => {
//       return {
//         type: "REMOVE_DATA",
//       }
//     })
//   }
// }

export const removeData = () => {
  return {
    type: "REMOVE_DATA",
  }
}
