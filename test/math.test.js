import test from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract } from '../src/math.js';

test('add', () => {
  assert.equal(add(2, 3), 5);
});

test('subtract', () => {
  assert.equal(subtract(5, 2), 3);
  assert.equal(subtract(2, 5), -3);
  assert.equal(subtract(0, 0), 0);
});
