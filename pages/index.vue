<template>
  <div>
    <div class="flex justify-between gap-4 py-3" v-if="!authStore.isAuthenticated">
      <div class="flex flex-col gap-2">
        <h2 class="text-lg text-accent">Veuillez vous connecter pour commencer</h2>
        <p class="max-w-3xl text-sm">
          Seuls les utilisateurs connectés peuvent créer des liens. Afin de pouvoir utiliser le
          service, merci de bien vouloir vous connecter à l’aide de votre compte CAS Bordeaux INP
          par EirbConnect
        </p>
        <LoginComponent />
      </div>
      <img
        class="hidden sm:flex"
        src="/undraw/undraw_authentication_re_svpt 2.svg"
        alt="authentification_draw"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
</script>
