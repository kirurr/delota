<script setup lang="ts">
import type { ResultTosList } from '~/server/definition'

const { list } = defineProps<{
  list: ResultTosList[]
}>()
</script>

<template>
  <ol class="list-decimal list-inside">
    <li v-for="item in list" :key="item.id" class="tos-li">
      {{ item.content }}
      <span
        v-for="sub_item in item.sub_items"
        :key="sub_item.id"
        class="tos-sub-li"
        >{{ sub_item.content }}</span
      >
    </li>
  </ol>
</template>
