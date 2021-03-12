import { getEmptyMatrix, generateRandomMatrix } from './index';

const matrix = describe('util functions tests:', () => {
  test('getEmptyMatrix', () => {
    expect(getEmptyMatrix().length).toEqual(50);
    expect(getEmptyMatrix()).toEqual(getEmptyMatrix());
  });

  test('generateRandomMatrix', () => {
    expect(generateRandomMatrix().length).toEqual(50);
    expect(generateRandomMatrix()).not.toEqual(generateRandomMatrix());
  });
});
