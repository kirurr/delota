<script setup lang="ts">
const { imageUrl } = defineProps<{
  imageUrl: string | null
}>()

const visible = ref(false)
const dialog = ref()

function showModal() {
  dialog.value.showModal()
  visible.value = true
  document.body.classList.add('overflow-hidden')
  dialog.value.classList.add('flex')
  dialog.value.classList.remove('hidden')
}

function closeModal() {
  dialog.value.close()
  visible.value = false
  document.body.classList.remove('overflow-hidden')
  dialog.value.classList.remove('flex')
  dialog.value.classList.add('hidden')
}

defineExpose({
  show: showModal,
  close: closeModal
})
</script>

<template>
  <dialog
    ref="dialog"
    class="fixed inset-0 hidden z-50 rounded-lg bg-transparent backdrop-blur-sm backdrop:backdrop-blur-sm overflow-hidden size-full items-center justify-center"
    @close="closeModal()"
    @click="closeModal()"
  >
    <Nuxt-Img :src="imageUrl!" class="size-full object-contain" />
    <button class="absolute top-0 right-0 z-50">
      <Nuxt-Img src="/icons/close.png" class="p-2" />
    </button>
  </dialog>
</template>
