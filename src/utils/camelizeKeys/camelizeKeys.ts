import camelize from '../camelize'

const { isArray } = Array;
const isObject = (x: any): boolean => x === Object(x) && !isArray(x) && typeof x !== 'function';

const camelizeKeys = (x: any): object | Array<object> => {
  if (isArray(x)) return x.map(elem => camelizeKeys(elem))
  if (!isObject(x)) return x

  const newX: any = {}
  Object.keys(x).forEach((key: string) => {
    newX[camelize(key)] = camelizeKeys(x[key]);
  })
  return newX
};

export default camelizeKeys;
