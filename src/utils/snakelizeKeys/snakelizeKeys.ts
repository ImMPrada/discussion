import snakelize from '../snakelize'

const { isArray } = Array;
const isObject = (x: any): boolean => x === Object(x) && !isArray(x) && typeof x !== 'function';

const snakelizeKeys = (x: any): object | Array<object> => {
  if (isArray(x)) return x.map(elem => snakelizeKeys(elem))
  if (!isObject(x)) return x

  const newX: any = {}
  Object.keys(x).forEach((key: string) => {
    newX[snakelize(key)] = snakelizeKeys(x[key]);
  })
  return newX
};

export default snakelizeKeys;
