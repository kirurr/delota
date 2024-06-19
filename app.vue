<script setup lang="ts">
useHead({ link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }] })

useSeoMeta({
    title: 'Delota',
    description: 'I draw animals and furries of all kinds, fantasy creatures, taurs and monsters. SFW only'
})

</script>

<template>
    <div
        id="wrapper"
        class="p-4 lg:p-10 bg-[#faf1ed] rounded-xl md:w-2/3 md:min-h-[90%] min-h-2/3 xl:p-12 xl:w-[45%] relative z-10"
    >
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
    transition: all 0.2s;
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

#__nuxt {
    @apply flex items-center justify-center min-h-screen md:py-8 px-2 md:px-8;
}

#__nuxt::before {
    content: '';
    left: 0;
    top: 0;
    transform: scale(1);
    display: block;
    height: 100vh;
    background-attachment: scroll;
    position: fixed;
    width: 100vw;
    background-image: url('/background.svg'),
        linear-gradient(0deg, #948b8a 0%, #adbfc7 67%);
    background-size:
        100% 100%,
        auto;
    background-position: center 0% 0%;
    background-repeat: no-repeat, repeat;
}
</style>
