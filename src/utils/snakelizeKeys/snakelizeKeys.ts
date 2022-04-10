import snakelize from '../snakelize'

const { isArray } = Array;
const isObject = (x: any): boolean => x === Object(x) && !isArray(x) && typeof x !== 'function';

const snakelizeKeys = (x: object | object[]): object | Array<object> => {
  if (isArray(x)) return x.map(elem => snakelizeKeys(elem))
  if (!isObject(x)) return x

  const newX = {}
  Object.keys(x).forEach(key => {
    newX[snakelize(key)] = snakelizeKeys(x[key]);
  })
  return newX
};

export default snakelizeKeys;
