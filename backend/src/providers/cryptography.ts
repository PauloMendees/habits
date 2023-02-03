// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CryptoJS = require("crypto-js")
export async function createHash(password: string) {
    const salt = 12;
    return await bcrypt.hash(password, salt)
}

export async function comparePassword(password: string, hashPassword: string) {
    return await bcrypt.compare(password, hashPassword)
}