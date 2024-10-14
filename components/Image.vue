<script setup lang="ts">
const { src } = defineProps<{ src: string }>()
</script>

<template>
  <div class="prices-img-wrapper">
    <div>
      <NuxtImg preload :src="src" alt="Example image" class="prices-img cursor-pointer w-full" />
    </div>
  </div>
</template>
