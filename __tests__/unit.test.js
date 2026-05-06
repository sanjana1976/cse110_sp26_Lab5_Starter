// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber true with dashes format', () => {
  expect(isPhoneNumber('619-555-1234')).toBe(true);
});

test('isPhoneNumber true with parentheses format', () => {
  expect(isPhoneNumber('(619) 555-1234')).toBe(true);
});

test('isPhoneNumber false with short string', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});

test('isPhoneNumber false with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('isEmail true with simple valid email', () => {
  expect(isEmail('student@example.com')).toBe(true);
});

test('isEmail true with underscore username', () => {
  expect(isEmail('a_b9@abc.co')).toBe(true);
});

test('isEmail false without at symbol', () => {
  expect(isEmail('student.example.com')).toBe(false);
});

test('isEmail false with long top-level domain', () => {
  expect(isEmail('user@domain.info')).toBe(false);
});

test('isStrongPassword true with letters and numbers', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('isStrongPassword true with underscore', () => {
  expect(isStrongPassword('Z_user15')).toBe(true);
});

test('isStrongPassword false when starting with number', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword false when too short', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

test('isDate true with one digit month/day', () => {
  expect(isDate('1/2/2024')).toBe(true);
});

test('isDate true with two digit month/day', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('isDate false with wrong separator', () => {
  expect(isDate('1-2-2024')).toBe(false);
});

test('isDate false with wrong ordering', () => {
  expect(isDate('2024/1/2')).toBe(false);
});

test('isHexColor true with 3-digit hex', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor true with 6-digit hex and no hash', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});

test('isHexColor false when too short', () => {
  expect(isHexColor('#12')).toBe(false);
});

test('isHexColor false with non-hex letters', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
