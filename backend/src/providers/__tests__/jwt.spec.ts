import { fakeID, fakeJWT } from '../../jest/mocks';
import { getIdByToken } from '../jwt';

describe('Testing jwt provider', () => {
  it('Should return the correct ID', () => {
    process.env.SECRET_KEY = 'your-256-bit-secret';
    const id = getIdByToken(fakeJWT);
    expect(id).toBe(fakeID);
  });
});
