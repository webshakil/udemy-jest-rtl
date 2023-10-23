import {forEach} from './ForEach'
test('ForEach mocking test', () => {
const mockCallback = jest.fn(x => 42 + x);
  forEach([20, 21, 22], mockCallback);
  expect(mockCallback.mock.calls).toHaveLength(3);

  expect(mockCallback.mock.calls[0][0]).toBe(20);
  expect(mockCallback.mock.calls[1][0]).toBe(21);
  expect(mockCallback.mock.calls[2][0]).toBe(22);

  expect(mockCallback.mock.results[0].value).toBe(62);
  expect(mockCallback.mock.results[1].value).toBe(63);
  expect(mockCallback.mock.results[2].value).toBe(64);
});