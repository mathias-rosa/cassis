export default defineEventHandler(async (event) => {
    const uid = getRouterParam(event, 'uid')

    const link = await LinkShema.findOne({
        uid
    })

    if (!link) {
        throw createError({
            status: 404,
            statusMessage: 'Lien non trouvé',
        })
    }

    return {
        name: link.name,
        url: link.url,
    }
})