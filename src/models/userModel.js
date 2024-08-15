import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient()

export const getAll = async () => {
    const allUsers = await prisma.user.findMany({
        select: {
            iduser: true,
            name: true,
            email: true
        }
    })

    return allUsers
}

export const create = () => {

}