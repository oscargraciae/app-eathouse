import React from 'react';
import { unsetToken } from '../utils/auth';

export default class Logout extends React.Component {
  componentDidMount() {
    unsetToken();
    location.href = '/';
  }
  render() {
    return null;
  }
}
