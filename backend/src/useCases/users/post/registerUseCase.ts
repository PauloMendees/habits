import { prisma } from "../../../lib/prisma";
import { createHash } from "../../../providers/cryptography";
import { emailValidate, passwordValidate } from "../../../providers/validators";

interface Params {
    email: string
    password: string
    confirmPassword: string
    nickName: string
}

export async function registerUseCase({ email, nickName, password, confirmPassword }: Params) {
    if (password !== confirmPassword) throw new Error('Senhas não batem.')
    if (!emailValidate(email)) throw new Error('E-mail inválido.')
    if (!passwordValidate(password)) throw new Error('Senha não cumpre os requisitos.')
    const hashedPassword = await createHash(password)
    await prisma.$connect()
    await prisma.user.create({
        data: {
            email,
            nickname: nickName,
            password: hashedPassword
        }
    })
    await prisma.$disconnect()
}