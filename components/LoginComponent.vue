<template>
  <EirbConnect class="mt-3" @click="login()" />
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const login = () => {
  window.location.href = `${config.public.EIRB_AUTH_URL}/login?eirb_service_url=${config.public.BASE_URL}/login`
}
</script>
