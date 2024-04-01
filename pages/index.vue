<template>
    <div>
        <div class="flex justify-between py-3 gap-4">
            <div class="flex flex-col gap-2">
                <h2 class="text-accent text-lg">Veuillez vous connecter pour commencer</h2>
                <p class="text-sm max-w-3xl">
                    Seuls les utilisateurs connectés peuvent créer des liens. Afin de pouvoir utiliser le service, merci de bien vouloir vous connecter à l’aide de votre compte CAS Bordeaux INP par EirbConnect
                </p>
                <EirbConnect class="mt-3" />
            </div>
            <img class="sm:flex hidden" src="/undraw/undraw_authentication_re_svpt 2.svg" alt="authentification_draw">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>