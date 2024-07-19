<script setup lang="ts">
import type { TosItem } from '~/server/definition'

definePageMeta({ layout: 'tos-page' })
useSeoMeta({ title: 'Terms of service' })

const { data } = await useFetch<Array<TosItem>>('/api/tos', { key: 'tos' })

const list = data.value !== null ? data.value : []
</script>

<template>
  <article class="flex flex-col items-center lg:w-[65cgh] w-fit">
    <h1 class="mb-2 text-2xl text-center lg:text-3xl">Terms of service</h1>
    <p class="mb-2 text-xl">✧</p>
    <Tos-List :list="list" />
  </article>
</template>
