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
    <section class="px-4 mt-10 lg:mt-[50px]">
        <div
            class="mx-auto max-w-container flex flex-col gap-y-16 lg:flex-row lg:items-center lg:gap-x-10 lg:justify-between w-full">
            <div class="lg:order-2 lg:max-w-[655px] w-full">
                <img class="w-full object-cover lg:max-w-[525px] lg:max-h-[320px] lg:rounded-tl-[20px] lg:rounded-br-[20px] lg:rounded-bl-[5px] lg:rounded-tr-[5px]  lg:overflow-clip"
                    src="@/assets/images/event/EventActivity.png" />
            </div>
            <div class="lg:max-w-[486px] w-full">
                <h3 class="text-2xl font-merriweather">Activities</h3>
                <div class="mt-[30px] lg:mt-[50px] grid grid-cols-2 gap-x-5 gap-y-8">
                    <div class="flex gap-x-[14px]" v-for="(activity, index) in activityList" :key="index">
                        <span
                            class="inline-block w-[14px] h-[14px] lg:w-[17px] lg:h-[17px] bg-custom-yellow shrink-0 rounded-[2px]" />
                        <p class="text-[9px] lg:text-xs font-medium">{{ activity }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>