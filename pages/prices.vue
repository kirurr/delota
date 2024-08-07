import { FullscreenModal } from '../.nuxt/components';
<script setup lang="ts">
definePageMeta({ layout: 'pages' })
useSeoMeta({ title: 'Prices' })

const { data } = await useFetch('/api/images')
const images = data.value !== null ? data.value : []
images.sort((a, b) => a.order - b.order)

const modalImage = ref<string | null>(null)
const fullscreenModalRef = ref()

function handleModal(imageUrl: string) {
  modalImage.value = imageUrl
  fullscreenModalRef.value?.show()
}
</script>

<template>
  <article id="prices">
    <button @click="handleModal('1')">Open modal</button>
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
      <h2 class="prices-h2 max-w-[9ch]">Sketch from 40$</h2>
      <p class="prices-p">~2000 pix. resolution</p>
      <p class="prices-p">
        Add shading 20$
        <br />
        Background (only with shading) 30$
        <br />
        Add character 30$
      </p>
      <Image :src="images[0].url" @click="handleModal(images[0].url)" />
      <Image :src="images[1].url" @click="handleModal(images[1].url)" />
      <Image :src="images[2].url" @click="handleModal(images[2].url)" />
      <Image :src="images[3].url" @click="handleModal(images[3].url)" />
      <Image :src="images[4].url" @click="handleModal(images[4].url)" />
    </section>

    <section class="flex flex-col items-center">
      <span class="mb-2 text-2xl">✧</span>
      <h2 class="prices-h2 max-w-[20ch]">Full rendered painting from 100$</h2>
      <p class="prices-p">~4000 pix. resolution</p>
      <p class="prices-p">
        Add character 80$
        <br />
        Background 70$
      </p>
      <Image :src="images[5].url" @click="handleModal(images[5].url)" />
      <Image :src="images[6].url" @click="handleModal(images[6].url)" />
      <Image :src="images[7].url" @click="handleModal(images[7].url)" />
      <Image :src="images[8].url" @click="handleModal(images[8].url)" />
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
