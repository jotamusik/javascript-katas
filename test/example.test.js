
import Example from "../src/example";

describe('Example Class Definition', function () {

  let example = new Example();

  it('Should have defined a exampleVariable member', function () {
    expect(example.exampleVariable).toBeDefined();
  });
  it('Should have a exampleVariable getter', function () {
    expect(example.getExampleVariable()).toEqual(example.exampleVariable);
  it('Should have defined a exampleVariable member', function () {
    let example = new Example();
    expect(example.exampleVariable).toBeDefined();
  });
  it('Should have an exampleVariable getter', function () {
    let example = new Example();
    expect(example.getExampleVariable()).toBe(example.exampleVariable);
  });
  it('Should have an exampleVariable setter', function () {
    let example = new Example();
    let newExampleVariable = 'exampleModified';
    example.setExampleVariable(newExampleVariable);
    expect(example.exampleVariable).toBe(newExampleVariable);
  });
});
