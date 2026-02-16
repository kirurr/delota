<template>
	<article class="space-y-8">
		<section>
			<h1 class="mb-2 text-2xl text-center xl:mb-4 lg:text-4xl">Delota</h1>
			<div class="w-2/3 mx-auto overflow-hidden aspect-video rounded-xl">
				<img src="/images/avatar.jpg" class="object-cover size-full">
			</div>
			<p class="my-8 tracking-widest text-center xl:text-2xl !text-font xl:max-w-[50rem] xl:block xl:mx-auto text-pretty">I draw animals and furries of all kinds, fantasy creatures, taurs and monsters. SFW only</p>
		</section>
		<section class="flex flex-col items-center mb-0">
			<div class="mb-6">
				<NuxtLink class="block w-full md:w-[55%] text-center md:mb-4 mb-2 tracking-[0.3rem] font-[300] py-[0.25rem] !bg-[#93a5ab] button xl:text-2xl xl:w-fit xl:w-full xl:py-2" to="/prices">Prices</NuxtLink>
				<NuxtLink class="text-center md:w-fit button text-nowrap w-full mb-2 xl:mb-4 font-[300] tracking-[0.3rem] py-[0.25rem] xl:w-fit xl:py-2 xl:text-2xl xl:w-full md:px-2" to="/tos">Terms of service</NuxtLink>
			</div>
			<hr class="w-full h-[0.1rem] mb-2 xl:mb-4 xl:h-[0.15rem] bg-alt-font/30 rounded-xl">
			<a class="text-center w-full md:w-fit md:px-2 mb-2 tracking-[0.3rem] py-[0.7rem] font-[300] button xl:px-4 xl:text-2xl" href="https://linktr.ee/delota">
				Contacts ✉️
			</a>
		</section>
	</article>
</template>
