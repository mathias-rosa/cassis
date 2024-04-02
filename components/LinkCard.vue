<template>
  <div class="flex flex-col w-full gap-3 py-4 border-b border-secondary/35">
    <!-- <h1 class="text-accent">{{ shortUrl }}</h1> -->
    <div class="flex gap-3 bg-secondary/20 p-2 rounded-lg">
      <div class="flex gap-3 items-stretch">
        <div
          class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background"
        >
          <UsersIcon size="1.5x" />
          Destinataires
        </div>
        <div
          class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed"
        >
          Tous
        </div>
      </div>
      <span class="self-center">&middot;</span>
      <div class="flex gap-3 items-stretch">
        <div
          class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background"
        >
          <ClockIcon size="1.5x" />
          Expiration
        </div>
        <div
          class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed"
        >
          Jamais
        </div>
      </div>
      <span class="self-center">&middot;</span>
      <div class="flex gap-3 items-stretch">
        <div
          class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background"
        >
          <EyeIcon size="1.5x" />
          Visité
        </div>
        <div
          class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed"
        >
          {{ link.visited }} fois
        </div>
      </div>
      <span class="self-center">&middot;</span>
      <div class="flex gap-3 items-stretch">
        <div
          class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-primary text-background"
        >
          <CalendarIcon size="1.5x" />
          Créé
        </div>
        <div
          class="flex w-fit gap-3 py-2 px-3 rounded-md text-sm bg-background text-foreground cursor-not-allowed"
        >
          Le {{ new Date(link.createdAt.split("T")[0]).toLocaleDateString() }}
          à
          {{ getFormattedHours(link.createdAt) }}
        </div>
      </div>
    </div>
    <div class="flex gap-3 items-center">
      <img :src="qrcode" alt="QR Code" class="h-28 object-contain" />
      <a :href="link.url" target="_blank">{{ link.url }}</a>
      <a :href="shortUrl" class="text-primary">{{ shortUrl }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const props = defineProps<{
  link: Link;
}>();

const shortUrl = computed(() => {
  return `${config.public.BASE_URL}/r/${props.link.uid}`;
});

import { useQRCode } from "@vueuse/integrations/useQRCode";

// `qrcode` will be a ref of data URL
const qrcode = useQRCode(shortUrl);

const getFormattedHours = (date: string) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  function addZero(i: number) {
    if (i < 10) {
      return "0" + i;
    }
    return i;
  }

  return `${addZero(hours)}h${addZero(minutes)}`;
};
</script>
