import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum with two positive numbers', () => {
    const result = sum(5, 10);
    assert.strictEqual(result, 15);
});

test('sum with zero and a positive number', () => {
    const result = sum(0, 10);
    assert.strictEqual(result, 10);
});

test('sum with two zeros', () => {
    const result = sum(0, 0);
    assert.strictEqual(result, 0);
});

test('sum with a negative number', () => {
    const result = sum(-5, 10);
    assert.strictEqual(result, 0);
});

test('sum with two negative numbers', () => {
    const result = sum(-5, -10);
    assert.strictEqual(result, 0);
});

test('sum with non-number inputs', () => {
    const result1 = sum('5', 10);
    const result2 = sum(5, '10');
    const result3 = sum('5', '10');
    const result4 = sum(null, 10);
    const result5 = sum(10, null);
    const result6 = sum(undefined, 10);
    const result7 = sum(10, undefined);
    
    assert.strictEqual(result1, 0);
    assert.strictEqual(result2, 0);
    assert.strictEqual(result3, 0);
    assert.strictEqual(result4, 0);
    assert.strictEqual(result5, 0);
    assert.strictEqual(result6, 0);
    assert.strictEqual(result7, 0);
});