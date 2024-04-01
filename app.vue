<template>
    <div class="bg-background p-3 h-screen overflow-y-scroll items-center flex flex-col">
        <div class="bg-accent flex w-full flex-col p-8 pb-12 rounded-xl gap-8 items-center text-white">
            <img src="/cassis_logo.svg" alt="cassis_logo" class="h-16">
            <div class="w-full max-w-4xl flex flex-col items-center gap-2 ">
                <h1 class="text-center text-xl">Protégez votre lien en quelques secondes par le CAS</h1>
                <p class="text-center text-sm text-white/90">
                    CASSIS vous permet de protéger une ressource derrière une autre url qui peut être déchiffrée par un utilisateur possédant les droits sur le lien. Vous pourrez aussi voir le nombre de personnes ayant visité votre lien.
                </p>
            </div>
        </div>
        
        <div class="relative flex flex-col bg-card -top-6 px-5 py-3 rounded-xl w-11/12 shadow-accent">
            <CardHeader />
            <NuxtPage  />
        </div>
    </div> 
</template>

