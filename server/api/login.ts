export default defineEventHandler(async (event) => {

    const token = getQuery(event).token;
    const config = useRuntimeConfig();
    const user = await fetch(`${config.public.EIRB_AUTH_URL}/get_user_info?token=${token}`).then(res => res.json());

    console.log(user);

    return sendRedirect(event, '/links')
})
