import prisma from "~~/server/db/config"
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const data = await prisma.user.create({ data: { email: body.email, name: body.name } })
    return {
        data
    }
})