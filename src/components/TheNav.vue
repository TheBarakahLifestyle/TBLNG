<script setup lang="ts">

const navLinks = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "About Us",
        to: "/about-us"
    },
    {
        label: "Community",
        to: "/community"
    },
    {
        label: "Events",
        to: "/events"
    },
    {
        label: "Initiative",
        to: "/initiative"
    },
    {
        label: "Blog",
        to: "https://blog.tblt.com.ng",
        external: true
    },
    {
        label: "Contact us",
        to: "/contact-us"
    },
]


const screenState = reactive({
    showMobileMenu: false
})

function handleJoinUs() {
    screenState.showMobileMenu = false
}

watchEffect(() => {
    if (screenState.showMobileMenu) {
        document?.body.classList.add('overflow-hidden')
    } else {
        document?.body.classList.remove('overflow-hidden')
    }
})

</script>

<template>
    <nav class="sticky top-0 inset-x-0 z-10 bg-white pl-1 pr-4">
        <div class="mx-auto max-w-container flex items-center justify-between">
            <img src="@/assets/images/logo.svg" class="w-[72px] lg:w-[121px] aspect-square" />
            <div class="hidden lg:flex items-center gap-x-10 font-roboto">
                <template v-for="(link, index) in navLinks" :key="index">
                    <a v-if="link.external" :href="link.to" target="_blank">{{
                        link.label }}</a>
                    <NuxtLink v-else exactActiveClass="navlink" :to="link.to">{{
                        link.label }}</NuxtLink>
                </template>

            </div>

            <a href="https://selar.co/g844y3" target="_blank"
                class="hidden lg:inline-block rounded-[5px] px-[21px] py-[9px] bg-custom-yellow text-white font-roboto font-medium">Join
                Us</a>

            <!-- hamburger -->
            <button class="lg:hidden" @click="screenState.showMobileMenu = true">
                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.875 5.1875H32.125C33.4705 5.1875 34.5625 4.0955 34.5625 2.75C34.5625 1.4045 33.4705 0.3125 32.125 0.3125H2.875C1.5295 0.3125 0.4375 1.4045 0.4375 2.75C0.4375 4.0955 1.5295 5.1875 2.875 5.1875ZM32.125 10.0625H2.875C1.5295 10.0625 0.4375 11.1545 0.4375 12.5C0.4375 13.8455 1.5295 14.9375 2.875 14.9375H32.125C33.4705 14.9375 34.5625 13.8455 34.5625 12.5C34.5625 11.1545 33.4705 10.0625 32.125 10.0625ZM32.125 19.8125H2.875C1.5295 19.8125 0.4375 20.9045 0.4375 22.25C0.4375 23.5955 1.5295 24.6875 2.875 24.6875H32.125C33.4705 24.6875 34.5625 23.5955 34.5625 22.25C34.5625 20.9045 33.4705 19.8125 32.125 19.8125Z"
                        fill="black" />
                </svg>
            </button>

        </div>
    </nav>
    <!-- Mobile Menu -->
    <div v-if="screenState.showMobileMenu"
        class="lg:hidden fixed bg-white/95 backdrop-blur-sm h-[100dvh] w-screen  z-50 p-4">
        <div class="flex items-center justify-end w-full">
            <!-- TODO: Replace with x svg -->
            <button class="lg:hidden" @click="screenState.showMobileMenu = false">
                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.875 5.1875H32.125C33.4705 5.1875 34.5625 4.0955 34.5625 2.75C34.5625 1.4045 33.4705 0.3125 32.125 0.3125H2.875C1.5295 0.3125 0.4375 1.4045 0.4375 2.75C0.4375 4.0955 1.5295 5.1875 2.875 5.1875ZM32.125 10.0625H2.875C1.5295 10.0625 0.4375 11.1545 0.4375 12.5C0.4375 13.8455 1.5295 14.9375 2.875 14.9375H32.125C33.4705 14.9375 34.5625 13.8455 34.5625 12.5C34.5625 11.1545 33.4705 10.0625 32.125 10.0625ZM32.125 19.8125H2.875C1.5295 19.8125 0.4375 20.9045 0.4375 22.25C0.4375 23.5955 1.5295 24.6875 2.875 24.6875H32.125C33.4705 24.6875 34.5625 23.5955 34.5625 22.25C34.5625 20.9045 33.4705 19.8125 32.125 19.8125Z"
                        fill="black" />
                </svg>
            </button>
        </div>
        <div class="flex flex-col items-center gap-y-6 text-xl font-medium">
            <template v-for="(link, index) in navLinks" :key="index">
                <a v-if="link.external" @click="screenState.showMobileMenu = false" :href="link.to" target="_blank">{{
                    link.label }}</a>
                <NuxtLink v-else @click="screenState.showMobileMenu = false" exactActiveClass="navlink" :to="link.to">{{
                    link.label }}</NuxtLink>
            </template>
            <a href="https://selar.co/g844y3" target="_blank" @click="handleJoinUs"
                class="mt-4 rounded-[5px] px-[21px] py-[9px] bg-custom-yellow text-white font-roboto font-medium">Join
                Us</a>
        </div>
    </div>
</template>

<style scoped>
.navlink {
    @apply text-custom-yellow border-b-custom-yellow border-b-[2px]
}
</style>