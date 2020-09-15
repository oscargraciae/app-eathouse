const generatedName = (name) => {
  let kname = name.replace(/ /g, '-').toLowerCase();
  return kname;
};

export default generatedName;
