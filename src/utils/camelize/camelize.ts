const camelize = (str: string) => {
  return str.replace(/([\s-_][a-z])/ig, (a) => {
    return a.toUpperCase()
      .replace(' ', '')
      .replace('-', '')
      .replace('_', '');
  });
};

export default camelize
