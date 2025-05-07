// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('Phone Number Validation', () => {
  test('valid phone numbers should return true', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('invalid phone numbers should return false', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
    expect(isPhoneNumber('123-456-789')).toBe(false);
  });
});

describe('Email Validation', () => {
  test('valid emails should return true', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('user@domain.co')).toBe(true);
  });

  test('invalid emails should return false', () => {
    expect(isEmail('test@.com')).toBe(false);
    expect(isEmail('@domain.com')).toBe(false);
  });
});

describe('Password Validation', () => {
  test('valid passwords should return true', () => {
    expect(isStrongPassword('Password123')).toBe(true);
    expect(isStrongPassword('Abcd1234')).toBe(true);
  });

  test('invalid passwords should return false', () => {
    expect(isStrongPassword('12345678')).toBe(false);
    expect(isStrongPassword('Abc')).toBe(false);
  });
});

describe('Date Validation', () => {
  test('valid dates should return true', () => {
    expect(isDate('1/1/2023')).toBe(true);
    expect(isDate('12/31/2023')).toBe(true);
  });

  test('invalid dates should return false', () => {
    expect(isDate('1/1/23')).toBe(false);
    expect(isDate('1-1-2023')).toBe(false);
  });
});

describe('Hex Color Validation', () => {
  test('valid hex colors should return true', () => {
    expect(isHexColor('#123')).toBe(true);
    expect(isHexColor('#123456')).toBe(true);
  });

  test('invalid hex colors should return false', () => {
    expect(isHexColor('#1234')).toBe(false);
    expect(isHexColor('#GHIJKL')).toBe(false);
  });
});
