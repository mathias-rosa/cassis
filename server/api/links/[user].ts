export default defineEventHandler(async (event) => {
    const user = getRouterParam(event, 'user')
    const links = await LinkShema.find({
        createdBy: user
    }, {}, {
        sort: {
            createdAt: -1
        }
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