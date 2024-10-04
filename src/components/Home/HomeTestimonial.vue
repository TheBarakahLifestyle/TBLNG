<script setup lang="ts">

const testimonials = [
    {
        by: "Halima",
        text: "Alhamdulilah, it is just what my soul needs. I’m more conscious of Allah in my day to day life because of the constant reminders from the reflections.",
    },
    {
        by: "Amina",
        text: "My experience so far has been great.I will say it’s a positive improvement and encouragement in all aspects of my Deen.What inspires me most is the collective effort and teamwork.I thank ALLAH SWT for guiding me to this community.",
    },
    {
        by: "Nasimah",
        text: "I am a better Muslimah in the sense that I can always reflect on Allah's words even without reading them. I can remember a particular verse and refer to it in a conversation which makes me proud of myself. Alhamdulillah.",
    },
    {
        by: "Asma'u",
        text: "I had a beautiful first experience... My heart swelled with joy seeing as everyone was up and doing just for the sake of our lord. May Allah reunite us all and May He enrich us all more in all ways to be able to give back to the Ummah of the Rasul."
    }
]

const testimonyToShowIndex = ref(Math.floor(Math.random() * testimonials.length))

function handleNextTestimony() {
    const next = testimonyToShowIndex.value + 1
    if (testimonials[next]) {
        testimonyToShowIndex.value = next
    } else {
        testimonyToShowIndex.value = 0
    }
}

function handlePrevTestimony() {
    const prev = testimonyToShowIndex.value - 1
    if (prev >= 0 && testimonials[prev]) {
        testimonyToShowIndex.value = prev
    } else {
        testimonyToShowIndex.value = testimonials.length - 1
    }
}

const currentTestimony = computed(() => {
    return testimonials[testimonyToShowIndex.value]
})

</script>

<template>
    <div class="px-4 relative">
        <div
            class="w-[170px] lg:w-[272px] aspect-square bg-custom-blue rounded-full absolute top-[50%] -translate-x-[50%] left-0 -translate-y-[50%]" />
        <div
            class="py-4 lg:py-[19px] flex w-full justify-between flex-col pb-2.5 drop-shadow-md bg-white px-4 lg:px-11 rounded-[10px] min-h-[110px] lg:min-h-[175px]">
            <p class="text-[10px] lg:text-sm leading-5 lg:leading-7">{{ currentTestimony.text }}</p>
            <div class="mt-4 flex items-center justify-between">
                <p class="font-medium text-[11px] lg:text-sm">{{ currentTestimony.by }}</p>
                <div class="flex items-center gap-3 shrink-0">
                    <button @click="handlePrevTestimony">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.375 4.05703L11.6473 3.375L5.625 9L11.6473 14.625L12.375 13.9465L7.08398 9L12.375 4.05703Z"
                                fill="black" />
                        </svg>
                    </button>
                    <button @click="handleNextTestimony">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.625 4.05703L6.35273 3.375L12.375 9L6.35273 14.625L5.625 13.9465L10.916 9L5.625 4.05703Z"
                                fill="black" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>