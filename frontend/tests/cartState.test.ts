import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { cartReducer } from '../src/context/cartState.ts'

test('adding the same product merges quantities without changing the previous cart', () => {
  const original = [{ name: 'Diavola', quantity: 1 }]
  const updated = cartReducer(original, { type: 'add', name: 'Diavola' })
  assert.deepEqual(updated, [{ name: 'Diavola', quantity: 2 }])
  assert.equal(original[0].quantity, 1)
})

test('different products remain separate', () => {
  const cart = cartReducer([{ name: 'Diavola', quantity: 2 }], { type: 'add', name: 'Burrata' })
  assert.deepEqual(cart, [{ name: 'Diavola', quantity: 2 }, { name: 'Burrata', quantity: 1 }])
})

test('decreasing the last unit removes the product', () => {
  assert.deepEqual(cartReducer([{ name: 'Diavola', quantity: 1 }], { type: 'decrease', name: 'Diavola' }), [])
})

test('quantity stays within the upper limit', () => {
  const cart = [{ name: 'Diavola', quantity: 99 }]
  assert.deepEqual(cartReducer(cart, { type: 'increase', name: 'Diavola' }), cart)
  assert.deepEqual(cartReducer(cart, { type: 'add', name: 'Diavola' }), cart)
})

test('removing one product keeps the other products', () => {
  const cart = [{ name: 'Diavola', quantity: 2 }, { name: 'Burrata', quantity: 1 }]
  assert.deepEqual(cartReducer(cart, { type: 'remove', name: 'Diavola' }), [{ name: 'Burrata', quantity: 1 }])
})

test('changing a missing product does not add it', () => {
  assert.deepEqual(cartReducer([], { type: 'increase', name: 'Diavola' }), [])
  assert.deepEqual(cartReducer([], { type: 'decrease', name: 'Diavola' }), [])
})
