export const verifyToken = async (token: string) => {

    const config = useRuntimeConfig();
    const user = await fetch(`${config.public.EIRB_AUTH_URL}/get_user_info?token=${token}`).then(res => res.json());

    if (!user.user) {
        return {
            statusCode: 401,
            body: 'Unauthorized'
        }
    }

    return user
}