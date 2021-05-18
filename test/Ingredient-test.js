import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {

  it('should be a function', () =>{
    expect(Ingredient).to.be.a('function')
  });

  it('should be an instance of Ingredient' () => {
    expect(ingredient).to.be.an.instanceof(Ingredient)
  });

  it('should have a name', () => {
    let ingredient = new Ingredient('flour');
    expect(ingredient.name).to.equal('flour');
  });

  it('should have a cost in cents', () => {
    let ingredient = new Ingredient('flour', 250);
    expect(ingredient.estimatedCostInCents).to.equal(250);
  });

})
