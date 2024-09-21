<script setup lang="ts">
const activityList = [
    "Workshops on personal growth",
    "Networking Opportunities",
    "Talks fom amazing speakers",
    "Interactive panel discussions",
    "Fun and engaging activities",
    "Refreshments provided"
]
</script>

<template>
    <section class="px-4 mt-10">
        <div class="mx-auto max-w-container flex flex-col gap-y-16">
            <img class="w-full object-cover" src="@/assets/images/event/EventActivity.png" />
            <div>
                <h3 class="text-2xl font-merriweather">Activities</h3>
                <div class="mt-[30px] grid grid-cols-2 gap-x-5 gap-y-8">
                    <div class="flex gap-x-[14px]" v-for="(activity, index) in activityList" :key="index">
                        <span class="inline-block w-[14px] h-[14px] bg-custom-yellow shrink-0 rounded-[2px]" />
                        <p class="text-[9px] font-medium">{{ activity }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>