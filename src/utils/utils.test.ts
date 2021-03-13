import { getEmptyMatrix, generateRandomMatrix } from './index';

const matrix = describe('util functions tests:', () => {
  test('getEmptyMatrix', () => {
    expect(getEmptyMatrix().length).toEqual(2500);
    expect(getEmptyMatrix()).toEqual(getEmptyMatrix());
  });

  test('generateRandomMatrix', () => {
    expect(generateRandomMatrix().length).toEqual(2500);
    expect(generateRandomMatrix()).not.toEqual(generateRandomMatrix());
  });
});
