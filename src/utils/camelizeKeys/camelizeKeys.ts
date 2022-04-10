import camelize from '../camelize'

const { isArray } = Array;
const isObject = (x: any): boolean => x === Object(x) && !isArray(x) && typeof x !== 'function';

const camelizeKeys = (x: object | object[]): object | Array<object> => {
  if (isArray(x)) return x.map(elem => camelizeKeys(elem))
  if (!isObject(x)) return x

  const newX = {}
  Object.keys(x).forEach(key => {
    newX[camelize(key)] = camelizeKeys(x[key]);
  })
  return newX
};

export default camelizeKeys;
