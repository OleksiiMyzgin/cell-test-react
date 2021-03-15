import { getEmptyMatrix, generateRandomMatrix } from './index';
import { MATRIX_SIZE } from '../consts';

const matrix = describe('util functions tests:', () => {
  test('getEmptyMatrix', () => {
    expect(getEmptyMatrix(MATRIX_SIZE).length).toEqual(MATRIX_SIZE);
    expect(getEmptyMatrix(MATRIX_SIZE)).toEqual(getEmptyMatrix(MATRIX_SIZE));
  });

  test('generateRandomMatrix', () => {
    expect(generateRandomMatrix(MATRIX_SIZE).length).toEqual(MATRIX_SIZE);
    expect(generateRandomMatrix(MATRIX_SIZE)).not.toEqual(
      generateRandomMatrix(MATRIX_SIZE)
    );
  });
});
