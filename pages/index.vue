<template>
    <div>
        <CardHeader>
            <MenuItem>
                <LockIcon></LockIcon>
                Se connecter
            </MenuItem>
        </CardHeader>
        <div class="flex py-3 gap-4">
            <div class="flex flex-col gap-2">
                <h2 class="text-accent text-lg">Veuillez vous connecter pour commencer</h2>
                <p class="text-sm">
                    Seuls les utilisateurs connectés peuvent créer des liens. Afin de pouvoir utiliser le service, merci de bien vouloir vous connecter à l’aide de votre compte CAS Bordeaux INP par EirbConnect
                </p>
                <EirbConnect class="mt-3" />
            </div>
            <img src="/undraw/undraw_authentication_re_svpt 2.svg" alt="authentification_draw">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>