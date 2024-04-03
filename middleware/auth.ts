const authStore = useAuthStore()

export default defineNuxtRouteMiddleware((to, from) => {
    if (!authStore.isAuthenticated) {
        console.log('Not authenticated')
        return navigateTo('/')
    }
})
