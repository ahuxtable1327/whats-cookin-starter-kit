import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
  let ingredient;

  beforeEach(() => {
    ingredient = new Ingredient({id: 123, name: 'flour', costInCents: 250});

  });

  it('should be a function', () =>{
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('should have an id', () => {
    expect(ingredient.id).to.equal(123);
  });

  it('should have a name', () => {
    expect(ingredient.name).to.equal('flour');
  });

  it('should have a cost in cents', () => {
    expect(ingredient.costInCents).to.equal(250);
  });

});
