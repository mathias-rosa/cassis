<template>
    <div class="flex justify-between py-3 gap-4">

        <div class="w-full items-center flex flex-col p-4 gap-1" v-if="links.length === 0">
            <h1>Vous n'avez pas encore créé de liens</h1>
            <NuxtLink to="/create" class="text-sm underline text-accent hover:no-underline  transition-all duration-300 ease-linear ">
                Créer un lien protégé
            </NuxtLink>
        </div>


        <div class="flex flex-col w-full">
            <LinkCard :link="link" v-for="link in links"  />
        </div>
    </div>
</template>

<script setup lang="ts">

const links = ref<Link[]>([])


const fetchLinks = async () => {
    $fetch('/api/links/mrosa001').then((res) => {
        res.forEach((link : unknown) => {
            links.value.push(link as Link)
        })
    })
}

fetchLinks()

</script>