import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default (data) => {
  const errors = {};

  if(Validator.isEmpty(data.phone)) {
    errors.phone = "El teléfono es obligatorio. "
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}