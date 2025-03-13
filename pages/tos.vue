<script setup lang="ts">
import type { TosItem } from "~/server/definition";

definePageMeta({ layout: "tos-page" });
useSeoMeta({ title: "Terms of service" });

//const { data, pending } = await useFetch<Array<TosItem>>('/api/tos', { key: 'tos', lazy: true })
</script>

<template>
  <article class="flex flex-col items-center lg:w-[65cgh]">
    <h1 class="mb-2 text-2xl text-center lg:text-3xl">Terms of service</h1>
    <p class="mb-2 text-xl">✧</p>
    <ol class="list-decimal list-inside">
      <li class="tos-li">
        Cost of the work and the deadline will be announced after discussing
        your idea and approximate composition.
        <span class="tos-sub-li"
          >*for YCH and Adopts the price has already been indicated.</span
        >
      </li>

      <li class="tos-li">
        Full payment before the start of work via Paypal by buying a commission in my digital shop or by donation.
        <a
          class="block mx-auto mt-4 w-full tracking-[0.4rem] font-[300] py-[0.25rem] text-center button !bg-[#93a5ab] mb-2 md:w-fit md:px-4 md:py-2 md:text-2xl scale-95"
          href="https://app.lava.top/en/products/7ec28b95-dcb0-4e75-b6de-0a395b5c46bb"
        >
          🎨 digital shop</a
        >
        <span class="tos-sub-li">
          From 200$ it's possible to do prepaid 50% before the start of work and 50% after final by donation.
        </span
        >
      </li>

      <li class="tos-li">
        I retain the right to display all artwork on my social media.
      </li>
      <li class="tos-li">
        You cannot assign ownership, edit the artwork. Allow to commercial use
        +200$.
      </li>
      <li class="tos-li">Communication via Discord, Telegram or email.</li>
      <li class="tos-li">
        In the process I will send you the stages for edits. On final stage
        edits may require additional payment, depending on the complexity.
      </li>
      <li class="tos-li">
        Refunds are not possible, so I work on a clear deadline and commit to
        completing the work on time.
      </li>
      <li class="tos-li">
        By commission me you confirm that you have read these terms.
      </li>
    </ol>
  </article>
</template>
