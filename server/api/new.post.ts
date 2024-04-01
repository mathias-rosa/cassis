const shorten = (num : number) => {
    const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_+!*()";
    let result: string = "";

    const size = alphabet.length;

    while (num > 0) {
        result = alphabet[num % size] + result;
        num = Math.floor(num / size);
    }

    return result;
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {

        // Vérification des données

        if (!body.url) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Url manquante'
            })
        }

        if (!body.name) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Nom manquant'
            })
        }
        

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

        const date = new Date()
        const entry = await new LinkShema({
            name : body.name,
            url:  encodeURI(body.url),
            uid: shorten(date.getTime()),
            createdAt: date,
            createdBy: "mrosa001",
            visited : 0,
            expiresAt: body.expiresAt ? new Date(body.expiresAt) : null,
        }).save()

        

        return {
            status : "success",
            uid: entry.uid
        }
    }
    catch (error) {
        return error
    }
})