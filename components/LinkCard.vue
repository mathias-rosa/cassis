<template>
    <div class="flex flex-col w-full gap-3 py-4">
        <div class="flex gap-3">
            <div class="flex gap-3 items-stretch">
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background">
                    <UsersIcon size="1.5x" />
                    Destinataires
                </div>
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed">
                    Tous
                </div>
            </div>
            <span class="self-center">&middot;</span>
            <div class="flex gap-3 items-stretch">
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background">
                    <ClockIcon size="1.5x" />
                    Expiration
                </div>
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed">
                    Jamais
                </div>
            </div>
            <span class="self-center">&middot;</span>
            <div class="flex gap-3 items-stretch">
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background">
                    <EyeIcon size="1.5x" />
                    Visité
                </div>
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed">
                    {{ link.visited }}
                </div>
            </div>
            <span class="self-center">&middot;</span>
            <div class="flex gap-3 items-stretch">
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background">
                    <CalendarIcon size="1.5x" />
                    Créé le
                </div>
                <div class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed">
                    {{ link.createdAt }}
                </div>
            </div>
        </div>
        <a :href="link.url" target="_blank">{{ link.url }}</a>
        <a :href="'/r/' + link.uid" class="text-primary" >cassis.eirb.fr/r/{{ link.uid }}</a>

    </div>
</template>

<script setup lang="ts">

defineProps<{
    link: Link
}>()

</script>