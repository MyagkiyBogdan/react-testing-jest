import { mapArrToString } from './mapArrToStrin';
// toEqual - глубокое сравнение
describe('validateValue', () => {
  test('валидное значение', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('смешанное значение', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'hello'])).toEqual(['1', '2', '3']);
  });
  test('пустой массив', () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test('отрицание', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
