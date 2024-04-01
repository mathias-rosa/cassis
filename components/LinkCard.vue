<template>
    <div>
        {{ link.url }}
    </div>
</template>

<script setup lang="ts">

defineProps<{
    link: Link
}>()

</script>