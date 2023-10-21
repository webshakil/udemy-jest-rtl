import {forEach} from './ForEach'
test('forEach mock function', () => {
const mockCallback = jest.fn(x => 42 + x);
  forEach([20, 21, 22], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(3);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(20);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(21);
   // The first argument of the second call to the function was 1
   expect(mockCallback.mock.calls[2][0]).toBe(22);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(62);
  expect(mockCallback.mock.results[1].value).toBe(63);
  expect(mockCallback.mock.results[2].value).toBe(64);
});