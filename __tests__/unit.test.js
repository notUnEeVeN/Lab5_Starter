// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number 1', () => {
  expect(isPhoneNumber('555-1234')).toBe(true);
});

test('valid phone number 2', () => {
  expect(isPhoneNumber('(858) 555-9999')).toBe(true);
});

test('invalid phone number 1', () => {
  expect(isPhoneNumber('8585559999')).toBe(false);
});

test('invalid phone number 2', () => {
  expect(isPhoneNumber('abc-defg')).toBe(false);
});

test('valid email 1', () => {
  expect(isEmail('cat@pets.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('student@school.edu')).toBe(true);
});

test('invalid email 1', () => {
  expect(isEmail('student.school.edu')).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail('hello@hello')).toBe(false);
});

test('valid password 1', () => {
  expect(isStrongPassword('Cool_123')).toBe(true);
});

test('valid password 2', () => {
  expect(isStrongPassword('Zebra99')).toBe(true);
});

test('invalid password 1', () => {
  expect(isStrongPassword('_hello')).toBe(false);
});

test('invalid password 2', () => {
  expect(isStrongPassword('hi')).toBe(false);
});

test('valid date 1', () => {
  expect(isDate('7/4/2026')).toBe(true);
});

test('valid date 2', () => {
  expect(isDate('11/30/1999')).toBe(true);
});

test('invalid date 1', () => {
  expect(isDate('07-04-2026')).toBe(false);
});

test('invalid date 2', () => {
  expect(isDate('2026/07/04')).toBe(false);
});

test('valid hex color 1', () => {
  expect(isHexColor('#ABC')).toBe(true);
});

test('valid hex color 2', () => {
  expect(isHexColor('12ffAA')).toBe(true);
});

test('invalid hex color 1', () => {
  expect(isHexColor('#12345G')).toBe(false);
});

test('invalid hex color 2', () => {
  expect(isHexColor('red')).toBe(false);
});