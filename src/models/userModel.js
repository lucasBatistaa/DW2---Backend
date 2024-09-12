import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const userSchema = z.object({
    id:
        z.number({ message: "O ID deve ser um numero inteiro" })
        .positive({ message: "O ID deve ser um numero inteiro" }),

    name:
        z.string({ message: "O nome deve ser uma string" })
        .min(3, { message: "O nome deve ter no minimo 3 caracteres" })
        .max(100, { message: "O nome deve ter no maximo 100 caracteres" }),

    email:
        z.string({ message: "O email deve ser uma string" })
        .email({ message: "O campo edve ser um email" })
        .max(200, { message: "O email deve ter no maximo 200 caracteres" }),

    password:
        z.string({
        required_error: "Senha é obrigatória",
        invalid_type_error: "Senha deve ser uma string"
    })
    .min(6, {message: "A senha deve ter no minimo 6 caracteres"})
    .max(256, {message: "A senha deve ter no maximo 256 caracteres"})
})

export const validateUser = (user) => {
    return userSchema.safeParse(user)
}

export const validateUserToCreate = (user) => {
    const partialUserSchema = userSchema.partial({
        id:true
    })

    return partialUserSchema.safeParse(user)
}

export const getAll = async () => {
    const allUsers = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return allUsers
}

export const getById = async (id) => {

    const user = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return user
}

export const create = async (user) => {
    const result = await prisma.user.create({
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return result
}

export const remove = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    
    return user
}

export const update = async (user) => {
    const result = await prisma.user.update({
        where: {
            id: user.id
        },
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return result
}

export const updateName = async (user) => {

    const isIdUsed = await prisma.user.findUnique({
        where: {
            id: user.id
        },
    })

    if (!isIdUsed) {
        return ({
            user: '',
            message: 'User not found.'
        })
    }

    const result = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            name: user.name,
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return ({
        user: result,
        message: 'Name user updated with sucess!'
    })
}