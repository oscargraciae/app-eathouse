import React, { useEffect } from 'react';
import { unsetToken } from '../utils/auth';
import { useDispatch } from "react-redux";
import { removeData } from '../actions/user';
const Logout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(removeData());
    unsetToken();
    location.href = '/';
  }, []);
  return null;
}

export default Logout;
