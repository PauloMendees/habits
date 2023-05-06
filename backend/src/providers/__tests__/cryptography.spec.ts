import { comparePassword, createHash } from '../cryptography';

const password = 'Initial_Password';
const otherPassword = 'Diff_Password';

describe('Testing cryptography provider', () => {
  it('Should create a hash different then the initial string', async () => {
    const hash = await createHash(password);
    expect(hash === password).not.toBeTruthy();
  });

  it('Should be possible to compare hashed password to normal ones', async () => {
    const hash = await createHash(password);
    const comparisson = await comparePassword(password, hash);
    expect(comparisson).toBeTruthy();
  });

  it('Should be able to identify wrong passwords', async () => {
    const hash = await createHash(password);
    const comparisson = await comparePassword(otherPassword, hash);
    expect(comparisson).not.toBeTruthy();
  });
});
