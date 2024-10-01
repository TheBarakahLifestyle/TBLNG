<script setup lang="ts">
const { email, name, pending, joinUs } = useJoinUs()
</script>

<template>
    <header class="mx-auto max-w-container flex flex-col lg:flex-row lg:justify-between lg:gap-[130px]">
        <section class="lg:flex-col lg:justify-between lg:grow lg:flex">
            <div class="px-4">
                <h1 class="font-merriweather text-[22px]">The Barakah Lifestyle NG</h1>
                <p class="text-[13px] lg:text-sm font-semibold leading-6 mt-4">Embrace the Barakah Lifestyle and
                    start
                    your journey towards a blessed and abundant life!</p>

                <p class="text-[11px] lg:text-sm font-medium leading-6 mt-5">Become a part of a
                    community that values holistic well- being and positive impact.</p>
                <form @submit.prevent="joinUs" class="flex items-center gap-[30px] mt-[35px]">
                    <input v-model.trim="email"
                        class="grow h-10 rounded-[5px] px-4 text-xs lg:text-sm outline-none ring-[2px] ring-custom-blue" required
                        type="email" placeholder="Enter your email" />
                    <button :disabled="pending"
                        class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-blue text-sm text-white font-roboto font-medium">{{
                            pending ? "loading..." : "Join Us" }}</button>
                </form>
            </div>
            <AboutUsSpiritualGrowth class="mt-[71px] lg:mt-[127px] hidden lg:block lg:max-w-[475px] px-4" />
        </section>
        <section class="mt-[45px]  px-4 lg:mt-0 lg:px-0 lg:w-2/3 lg:max-w-[660px]">
            <div class="relative">
                <img src="@/assets/images/about/AboutUsHeaderOne.png" class="w-full" />
                <img src="@/assets/images/about/AboutUsHeaderOneOverlay.png" class="w-full absolute inset-0" />

                <p
                    class="mt-[53px] text-xs font-medium leading-6 lg:mt-0 lg:absolute bottom-0 left-0 lg:px-[50px] lg:pb-10 lg:max-w-[400px] lg:text-base  lg:text-white">
                    A Muslim Lifestyle
                    Platform driven by faith
                    to serve
                    humanity by educating, Inspiring and empowering
                    Muslims most especially women through the
                    teachings and values of Islam.</p>
            </div>
        </section>
        <AboutUsSpiritualGrowth class="mt-[86px] lg:mt-[166px] px-4 lg:hidden" />
    </header>
</template>