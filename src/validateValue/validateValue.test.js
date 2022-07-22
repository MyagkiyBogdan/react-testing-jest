import { validateValue } from './validateValue';

describe('validateValue', () => {
  test('валидное значение', () => {
    expect(validateValue(50)).toBe(true);
  });
  test('нижняя граница корректного', () => {
    expect(validateValue(0)).toBe(true);
  });
  test('верхняя граница корректного', () => {
    expect(validateValue(100)).toBe(true);
  });

  test('меньше корректного', () => {
    expect(validateValue(-1)).toBe(false);
  });
  test('больше корректного', () => {
    expect(validateValue(101)).toBe(false);
  });
});
