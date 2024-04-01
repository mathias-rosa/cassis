export default defineEventHandler(async (event) => {
    const uid = getRouterParam(event, 'uid')

    const link = await LinkShema.findOneAndUpdate({
        uid
    }, {$inc : {'visited' : 1}})

    if (!link) {
        throw createError({
            statusCode : 404,
            statusMessage: 'Lien non trouvé',
        })
    }

    if (link.expiresAt && new link.expiresAt < new Date()) {
        throw createError({
            statusCode : 410,
            statusMessage: 'Lien expiré',
        })
    }

    return sendRedirect(event, `${link.url}`)
})