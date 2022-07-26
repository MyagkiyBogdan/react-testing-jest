import { delay } from './delay';

describe('delay', () => {
  test('Корректное значение', async () => {
    const sum = await delay(() => 5 + 5, 1000);
    expect(sum).toBe(10);
  });
  test('Не корректное значение', async () => {
    const sum = await delay(() => 5 + 15, 2000);
    expect(sum).not.toBe(101);
  });
});
