const snakelize = (str) => {
  return str.replace(/([A-Z])/g, (a) => {
    return `_${a.toLowerCase()}`
  });
};

export default snakelize
