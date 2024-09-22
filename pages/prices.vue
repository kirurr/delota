import { FullscreenModal } from '../.nuxt/components';
<script setup lang="ts">
import type { Image } from '~/server/definition';

definePageMeta({ layout: 'pages' })
useSeoMeta({ title: 'Prices' })

const { data, pending } = await useFetch<Array<Image>>('/api/images', { lazy: true })

const modalImage = ref<string | null>(null)
const fullscreenModalRef = ref()

function handleModal(imageUrl: string) {
  modalImage.value = imageUrl
  fullscreenModalRef.value?.show()
}
</script>

<template>
  <article id="prices">
    <section class="flex flex-col items-center mt-2">
      <h1 class="mb-2 tracking-widest text-center text-font md:text-2xl">
        Please read my TOS before commission:
      </h1>
      <NuxtLink
        class="w-full tracking-widest font-[300] text-center button py-[0.25rem] md:text-xl md:w-fit md:px-6 md:my-2"
        to="/tos"
        >Terms of service 📋</NuxtLink
      >
      <p class="prices-p !text-[1.40rem] max-w-[40ch]">
        Below are approximate prices for all formats (headshot, bust, full
        height etc.)
      </p>
    </section>

    <section class="flex flex-col items-center">
      <span class="mb-2 text-2xl">✧</span>
      <h2 class="prices-h2 max-w-[9ch]">Sketch from 30$</h2>
      <p class="prices-p">~2000 pix. resolution</p>
      <p class="prices-p">
        Add shading 15$
        <br />
        Background (only with shading) 20$
        <br />
        Add character 20$
      </p>
      <div v-if="pending" class="w-full space-y-4 overflow-hidden" >
        <div class="placeholder h-[30rem] rounded-3xl"></div>
        <div class="placeholder h-[30rem] rounded-3xl"></div>
        <div class="placeholder h-[30rem] rounded-3xl"></div>
        <div class="placeholder h-[30rem] rounded-3xl"></div>
        <div class="placeholder h-[30rem] rounded-3xl"></div>
      </div>
      <div v-else>
        <Image :src="data![0].url" @click="handleModal(data![0].url)" />
        <Image :src="data![1].url" @click="handleModal(data![1].url)" />
        <Image :src="data![2].url" @click="handleModal(data![2].url)" />
        <Image :src="data![3].url" @click="handleModal(data![3].url)" />
        <Image :src="data![4].url" @click="handleModal(data![4].url)" />
      </div>
    </section>
    <section class="flex flex-col items-center">
      <span class="mb-2 text-2xl">✧</span>
      <h2 class="prices-h2 max-w-[20ch]">Full rendered painting from 80$</h2>
      <p class="prices-p">~4000 pix. resolution</p>
      <p class="prices-p">
        Add character 60$
        <br />
        Background 60$
      </p>
      <div v-if="pending" class="w-full space-y-4 overflow-hidden" >
        <div class="placeholder h-[30rem] rounded-3xl"></div>
        <div class="placeholder h-[30rem] rounded-3xl"></div>
        <div class="placeholder h-[30rem] rounded-3xl"></div>
        <div class="placeholder h-[30rem] rounded-3xl"></div>
        <div class="placeholder h-[30rem] rounded-3xl"></div>
      </div>
      <div v-else>
        <Image :src="data![5].url" @click="handleModal(data![5].url)" />
        <Image :src="data![6].url" @click="handleModal(data![6].url)" />
        <Image :src="data![7].url" @click="handleModal(data![7].url)" />
        <Image :src="data![8].url" @click="handleModal(data![8].url)" />
      </div>
    </section>

    <section class="flex flex-col items-center">
      <span class="mb-2 text-2xl">✧</span>
      <h2 class="prices-h2">To order art please send me:</h2>
      <ol
        class="list-decimal list-inside *:text-center mt-2 *:text-lg *:mb-2 *:lg:text-2xl"
      >
        <li>Reference of your character</li>
        <li>Do you want headshot, halfbody or fullbody illustration?</li>
        <li>Sketch or full rendered? Any addons?</li>
        <li>Desired colors and mood for art, your idea</li>
      </ol>
    </section>

    <Fullscreen-Modal ref="fullscreenModalRef" :image-url="modalImage" />
  </article>
</template>
