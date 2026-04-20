//check import works
import exampleFunction from './script';
// check these functions exist
describe('Basic test', () => {
  test('exampleFunction exists', () => {
    expect(exampleFunction).toBeDefined();
  });
});


