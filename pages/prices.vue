import { FullscreenModal } from '../.nuxt/components';
<script setup lang="ts">
definePageMeta({ layout: "pages" });
useSeoMeta({ title: "Prices" });
const modalImage = ref<string | null>(null);
const fullscreenModalRef = ref();

function handleModal(imageUrl: string) {
  modalImage.value = imageUrl;
  fullscreenModalRef.value?.show();
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
    </section>

    <section class="flex flex-col items-center">
      <span class="mb-2 text-2xl">✧</span>
      <h2 class="prices-h2 max-w-[9ch]">Sketch from 30$</h2>
      <p class="prices-p">
        ~2000 pix. resolution
        <br />
        simple background/fill
      </p>
      <ul class="prices-p text-start space-y-2 list-disc mt-6">
        <li>
          <div class="flex">
            <span>Add shading</span>
            <span class="ml-auto font-semibold">10$</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span
              >Complex bg <br />
              (if shading added)</span
            >
            <span class="ml-auto font-semibold">20$</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span>Add character</span>
            <span class="ml-auto font-semibold">20$</span>
          </div>
        </li>
      </ul>
      <div>
        <Image :src="'/images/1.jpg'" @click="handleModal('images/1.jpg')" />
        <Image :src="'/images/2.jpg'" @click="handleModal('images/2.jpg')" />
        <Image :src="'/images/3.jpg'" @click="handleModal('images/3.jpg')" />
        <Image :src="'/images/4.jpg'" @click="handleModal('images/4.jpg')" />
        <Image :src="'/images/5.jpg'" @click="handleModal('images/5.jpg')" />
        <Image :src="'/images/6.jpg'" @click="handleModal('images/6.jpg')" />
      </div>
    </section>
    <section class="flex flex-col items-center">
      <span class="mb-2 text-2xl">✧</span>
      <h2 class="prices-h2 max-w-[20ch]">Full rendered painting from 80$</h2>
      <p class="prices-p">
        ~4000 pix. resolution
        <br />
        simple background/fill
      </p>
      <ul class="prices-p text-start space-y-2 list-disc mt-6 w-1/3">
        <li>
          <div class="flex">
            <span>Add character</span>
            <span class="ml-auto font-semibold">60$</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span>Complex bg</span>
            <span class="ml-auto font-semibold">60$</span>
          </div>
        </li>
      </ul>
      <div>
        <Image :src="'/images/7.jpg'" @click="handleModal('images/7.jpg')" />
        <Image :src="'/images/8.jpg'" @click="handleModal('images/8.jpg')" />
        <Image :src="'/images/9.jpg'" @click="handleModal('images/9.jpg')" />
        <Image :src="'/images/10.jpg'" @click="handleModal('images/10.jpg')" />
        <Image :src="'/images/11.jpg'" @click="handleModal('images/11.jpg')" />
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
