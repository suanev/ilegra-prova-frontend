import formatsDate from "./formatDate";

describe('Format Date', () => {
  test('Should return the formatted date', () => {
    expect(formatsDate('1997-8-16')).toBe('16/08/1997');
  });

  test('Should return the formatted date', () => {
    expect(formatsDate('1997-8-16')).not.toBe('16/8/1997');
  });
});
