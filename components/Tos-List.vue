<script setup lang="ts">
import type { TosItem } from '~/server/definition'

const { list } = defineProps<{
  list: Array<TosItem>
}>()
</script>

<template>
  <ol class="list-decimal list-inside">
    <li v-for="item in list" :key="item.id" class="tos-li">
      {{ item.content }}
      <span
        v-for="subItem in item.subItems"
        :key="subItem.id"
        class="tos-sub-li"
        >{{ subItem.content }}</span
      >
    </li>
  </ol>
</template>
