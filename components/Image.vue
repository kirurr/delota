<script setup lang="ts">
const { src } = defineProps<{ src: string }>()
</script>

<template>
  <div class="prices-img-wrapper">
    <NuxtImg :src="src" alt="Example image" class="prices-img cursor-pointer" />
  </div>
</template>
