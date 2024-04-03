export default defineEventHandler(async (event) => {

    const token = getQuery(event).token;

    return verifyToken(token as string)

})
