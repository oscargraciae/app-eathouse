import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validation = (data) => {
  const errors = {};

  if(Validator.isEmpty(data.street)) {
    errors.street = "La calle y el Nº es obligatorio. ";
  }

  if(Validator.isEmpty(data.area)) {
    errors.area = "La colonia es obligatoria. "
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validation;
