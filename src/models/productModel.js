import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient()

export const allProducts = async () => {
    const allProducts = prisma.product.findMany({
        select: {
            id: true,
            name: true,
            price: true, 
            description: true,
        }
    }) 

    return allProducts
}