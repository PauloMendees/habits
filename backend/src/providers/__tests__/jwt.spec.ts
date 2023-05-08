import { fakeID, fakeJWT, fakeSecret } from '../../jest/mocks';
import { getIdByToken } from '../jwt';

describe('Testing jwt provider', () => {
  it('Should return the correct ID', () => {
    process.env.SECRET_KEY = fakeSecret;
    const id = getIdByToken(fakeJWT);
    expect(id).toBe(fakeID);
  });
});
