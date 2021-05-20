import { expect } from 'chai';
import User from '../src/classes/User'



describe('User', () => {
  let user;

  it.skip('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it.skip('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

})
