const emailRegex = /\S+@\S+\.\S+/;
const passwordRegexValidate =
  /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
/**
    // deve conter ao menos um dígito
    // deve conter ao menos uma letra minúscula
    // deve conter ao menos uma letra maiúscula
    // deve conter ao menos um caractere especial
    // deve conter ao menos 8 dos caracteres mencionados
 */
export function emailValidate(email: string) {
  if (emailRegex.test(email.toString())) return true;
  return false;
}

export function passwordValidate(password: string) {
  if (passwordRegexValidate.test(password)) return true;
  return false;
}
