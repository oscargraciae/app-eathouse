import momentTz from 'moment-timezone';

export function formatDate(value) {
  let newDate = new Date(value);
  var date = momentTz.tz(newDate, "America/Monterrey");
  let dateFormat = date.format('DD MMMM YYYY hh:mm');
  return dateFormat;
}