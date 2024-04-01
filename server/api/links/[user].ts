export default defineEventHandler(async (event) => {
    const user = getRouterParam(event, 'user')
    const links = await LinkShema.find({
        createdBy: user
    })
    
    return links.map(
        link => ({
            uid: link.uid,
            url: link.url,
            createdAt: link.createdAt,
            visited: link.visited
        })
    )
})