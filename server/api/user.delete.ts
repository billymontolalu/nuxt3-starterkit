import prisma from "~~/server/db/config"
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const data = await prisma.user.delete({ where: { id: parseInt(query.id) } })
    return {
        data
    }
})