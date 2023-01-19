import prisma from "~~/server/db/config"
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    if (query.id) {
        const data = await prisma.user.findUnique({ where: { id: parseInt(query.id) } })
        return {
            data
        }
    } else {
        const data = await prisma.user.findMany()
        return {
            data
        }
    }

})