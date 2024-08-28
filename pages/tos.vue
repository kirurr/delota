<script setup lang="ts">
import type { TosItem } from '~/server/definition'

definePageMeta({ layout: 'tos-page' })
useSeoMeta({ title: 'Terms of service' })

const { data, pending } = await useFetch<Array<TosItem>>('/api/tos', { key: 'tos', lazy: true })

</script>

<template>
  <article class="flex flex-col items-center lg:w-[65cgh]">
    <h1 class="mb-2 text-2xl text-center lg:text-3xl">Terms of service</h1>
    <p class="mb-2 text-xl">✧</p>
    <div v-if="pending" class="w-full space-y-4" >
      <div class="bg-[#ab9993] animate-pulse h-6 w-full rounded prices-img"></div>
      <div class="bg-[#ab9993] animate-pulse h-12 w-full rounded prices-img"></div>
      <div class="bg-[#ab9993] animate-pulse h-6 w-full rounded prices-img"></div>
      <div class="bg-[#ab9993] animate-pulse h-12 w-full rounded prices-img"></div>
      <div class="bg-[#ab9993] animate-pulse h-6 w-full rounded prices-img"></div>
      <div class="bg-[#ab9993] animate-pulse h-6 w-full rounded prices-img"></div>
    </div>
    <div v-else>
      <Tos-List :list="data ?? []" />
    </div>
  </article>
</template>
