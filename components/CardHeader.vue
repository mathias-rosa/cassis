<template>
  <div class="flex gap-3 justify-between py-2 border-b border-secondary/25">
    <div class="flex gap-2 items-center">
      <NuxtLink
        to="/create"
        class="flex gap-2 items-center text-card py-2 px-3 rounded-md"
        :class="
          routeName === 'create' ? 'bg-primary text-background' : 'text-primary'
        "
      >
        <PlusCircleIcon></PlusCircleIcon>
        Créer un nouveau lien
      </NuxtLink>
      <NuxtLink
        to="/links"
        class="flex gap-2 items-center text-card py-2 px-3 rounded-md"
        :class="
          routeName === 'links' ? 'bg-primary text-background' : 'text-primary'
        "
      >
        <LinkIcon></LinkIcon>
        Mes liens
      </NuxtLink>
    </div>

    <div class="flex gap-2 items-center">
      <div
        class="flex w-fit gap-3 py-2 px-3 rounded-md bg-background text-foreground"
      >
        Mathias ROSA
      </div>
      <NuxtLink
        to="/"
        class="flex w-fit gap-3 py-2 px-3 rounded-md bg-background text-foreground"
      >
        <LogOutIcon></LogOutIcon>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const routeName = computed(() => useRoute().name);
</script>
