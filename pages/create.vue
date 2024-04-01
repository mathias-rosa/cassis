<template>
    <div class="flex justify-between py-3 gap-4 flex-col">
        <div class="flex gap-3">
            <div class="flex gap-3 items-stretch">
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background">
                    <UsersIcon size="1.5x" />
                    Destinataires
                </div>
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed">
                    Tous
                </div>
                <span class="self-center">&middot;</span>
            </div>
            <div class="flex gap-3 items-stretch">
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background">
                    <ClockIcon size="1.5x" />
                    Expiration
                </div>
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed">
                    Jamais
                </div>
            </div>
        </div>
        <div class="flex w-full gap-3">
            <input id="link" @keyup.enter ="createLink()" class="bg-secondary/20 p-3 w-full rounded-md text-foreground outline-none" type="text" placeholder="https://wei.eirb.fr" v-model="link.url" />
            <button @click="createLink()" class="bg-primary text-background px-3 rounded-md">
                Générer
            </button>
        </div>

    </div>        
</template>

<script setup lang="ts">

import { ref } from 'vue'

const link = ref({
    url: '',
    expiresAt: null,
})

async function createLink() {
    console.log(link.value.url)
    if (!link.value.url) return
    const ret = $fetch('/api/new', {
        method: 'POST',
        body: JSON.stringify(link.value)
    })

    ret.then(() : unknown => navigateTo('/links'))

}


</script>
