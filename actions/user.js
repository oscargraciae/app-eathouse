import moment from 'moment';

const add = (data) => {
  return {
    type: "SET_DATA",
    payload: data,
    date: moment().add(180, 'm').format(),
  }
}

export const addUserData = (address) => {
  return (dispatch, getState) => {
    dispatch(add({ address }));
  }
}
