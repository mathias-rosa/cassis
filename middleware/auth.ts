const authStore = useAuthStore()

export default defineNuxtRouteMiddleware((to, from) => {
  if (!authStore.isAuthenticated) {
    return navigateTo('/')
  }
})
