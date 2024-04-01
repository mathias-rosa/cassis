import MD5 from "crypto-js/md5";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        // Si le lien existe déjà, on le retourne

        const link = await LinkShema.findOne({
            url: body.url
        })
        if (link) {
            return {
                uid: link.uid
            }
        }
        // Sinon, on crée un nouveau lien

        const entry = await new LinkShema({
            ...body,
            uid: MD5(body.url).toString(),
            createdAt: new Date(),
            createdBy: "mrosa001"
        }).save()


        return {
            uid: entry.uid
        }
    }
    catch (error) {
        return error
    }
})