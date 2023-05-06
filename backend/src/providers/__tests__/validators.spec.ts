import { emailValidate, passwordValidate } from '../validators';

const validEmail = 'teste@gmail.com';
const invalidEmail = 'teste.com';

const validPassword = 'T3st@ando.1234';
const invalidPassword = 'teste';

describe('Testing validator provider', () => {
  it('Should negate a invalid email', () => {
    const emailIsValid = emailValidate(invalidEmail);
    expect(emailIsValid).not.toBeTruthy();
  });
  it('Should negate invalid password', () => {
    const passwordIsValid = passwordValidate(invalidPassword);
    expect(passwordIsValid).not.toBeTruthy();
  });
  it('Should pass a valid email', () => {
    const emailIsValid = emailValidate(validEmail);
    expect(emailIsValid).toBeTruthy();
  });
  it('Should pass valid password', () => {
    const passwordIsValid = passwordValidate(validPassword);
    expect(passwordIsValid).toBeTruthy();
  });
});
