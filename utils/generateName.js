export default (name) => {
  let kname = name.replace(/ /g, '-').toLowerCase();
  return kname;
};
