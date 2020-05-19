export const SET_ITEM = 'SET_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';

import moment from 'moment';

function add(data) {
  return {
    type: SET_ITEM,
    payload: data,
    date: moment().add(180, 'm').format(),
    // storeId,
  }
}

function update(data, index) {
  return {
    type: UPDATE_ITEM,
    payload: data,
    index,
    date: moment().add(180, 'm').format(),
  }
}

function remove(index) {
  return {
    type: REMOVE_ITEM,
    index,
  }
}

function clearItems() {
  return {
    type: CLEAR_ITEMS,
  }
}

export const addToCart = (dish, quantity, deliveryDate, productPrice, storeId) => {
  return (dispatch, getState) => {
    const { data } = getState().cart;
    let isExist = false;
    let index;

    data.map((item, i) => {
      if(item.id === dish.id && item.deliveryDate === deliveryDate && item.unidType.id === productPrice.unidType.id) {
        isExist = true;
        index = i;
      }
    });

    console.log("Product Price---->", productPrice);
    const { id, name, image } = dish;
    const { price, unidType } = productPrice;
    const item = { id, name, price, image, quantity, total: Number((Number(price) * quantity).toFixed(2)), availableOn: '04-10-2018', deliveryDate, unidType: unidType, productPriceId: productPrice.id };

    if(isExist) {
      if(quantity === 0) {
        dispatch(remove(index));
      } else {
        dispatch(update(item, index));
      }

    } else {
      dispatch(add(item));
    }
  }
}

export const clearCart = () => {
  return (dispatch, getState) => {
    dispatch(clearItems());
  }
}
