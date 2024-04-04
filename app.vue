<template>
  <div class="flex h-screen flex-col items-center overflow-y-scroll bg-background p-3">
    <div class="flex w-full flex-col items-center gap-8 rounded-xl bg-accent p-8 pb-12 text-white">
      <img src="/cassis_logo.svg" alt="cassis_logo" class="h-16" />
      <div class="flex w-full max-w-4xl flex-col items-center gap-2">
        <h1 class="text-center text-xl">Protégez votre lien en quelques secondes par le CAS</h1>
        <p class="text-center text-sm text-white/90">
          CASSIS vous permet de protéger une ressource derrière une autre url qui peut être
          déchiffrée par un utilisateur possédant les droits sur le lien. Vous pourrez aussi voir le
          nombre de personnes ayant visité votre lien.
        </p>
      </div>
    </div>

    <div class="relative -top-6 flex w-11/12 flex-col rounded-xl bg-card px-5 py-3 shadow-accent">
      <CardHeader />
      <NuxtPage />
    </div>
  </div>
</template>
