<template>
  <div class="mt-4"></div>
</template>

<script setup lang="ts">
const token = useRoute().query.token

const authStore = useAuthStore()

if (authStore.isAuthenticated) {
  authStore.logout()
}

const login = async (token: string) => {
  const user = await $fetch('/api/auth/verify', {
    query: {
      token
    }
  })

  if (user) {
    authStore.login(token, user)
  }
}

if (token) {
  console.log(token)
  login(token as string)
}
</script>
