<script setup lang="ts">
definePageMeta({ layout: 'pages' })
useSeoMeta({ title: 'Prices' })

const { data } = await useFetch('/api/images')
const images = data.value !== null ? data.value : []
images.sort((a, b) => a.order - b.order)
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
      <h2 class="prices-h2 max-w-[9ch]">Sketch from 40$</h2>
      <p class="prices-p">~2000 pix. resolution</p>
      <p class="prices-p">
        Add shading 20$
        <br />
        Background (only with shading) 30$
        <br />
        Add character 30$
      </p>
      <div class="prices-img-wrapper">
        <NuxtImg
          :src="images[0].url"
          alt="Example image"
          class="prices-img fullscreen"
          sizes="50vw sm:90vw"
        />
      </div>
      <div class="prices-img-wrapper">
        <NuxtImg
          :src="images[1].url"
          alt="Example image"
          class="prices-img fullscreen"
          sizes="50vw sm:90vw"
        />
      </div>
      <div class="prices-img-wrapper">
        <NuxtImg
          :src="images[2].url"
          alt="Example image"
          class="prices-img fullscreen"
          sizes="50vw sm:90vw"
        />
      </div>
      <div class="prices-img-wrapper">
        <NuxtImg
          :src="images[3].url"
          alt="Example image"
          class="prices-img fullscreen"
          sizes="50vw sm:90vw"
        />
      </div>
      <div class="prices-img-wrapper">
        <NuxtImg
          :src="images[4].url"
          alt="Example image"
          class="prices-img fullscreen"
          sizes="50vw sm:90vw"
        />
      </div>
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
      <div class="prices-img-wrapper">
        <NuxtImg
          :src="images[5].url"
          alt="Example image"
          class="prices-img fullscreen"
          sizes="50vw sm:90vw"
        />
      </div>
      <div class="prices-img-wrapper">
        <NuxtImg
          :src="images[6].url"
          alt="Example image"
          class="prices-img fullscreen"
          sizes="50vw sm:90vw"
        />
      </div>
      <div class="prices-img-wrapper">
        <NuxtImg
          :src="images[7].url"
          alt="Example image"
          class="prices-img fullscreen"
          sizes="50vw sm:90vw"
        />
      </div>
      <div class="prices-img-wrapper">
        <NuxtImg
          :src="images[8].url"
          alt="Example image"
          class="prices-img fullscreen"
          sizes="50vw sm:90vw"
        />
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
  </article>
</template>
