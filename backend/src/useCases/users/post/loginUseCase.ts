import { prisma } from "../../../lib/prisma"
import { comparePassword } from "../../../providers/cryptography"
import { sign } from 'jsonwebtoken'

interface Params {
    email: string,
    password: string
}

export async function loginUseCase({ email, password }: Params) {
    await prisma.$connect()

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) throw new Error('E-mail ou senha inválidos.')
    const passwordMatch = await comparePassword(password, user.password)
    if (!passwordMatch) throw new Error('E-mail ou senha inválidos.')
    const token = sign({ id: user.id }, `${process.env.SECRET_KEY}`, {
        subject: user.id,
        expiresIn: `31536000`,
        jwtid: user.id
    })
    return token;
}