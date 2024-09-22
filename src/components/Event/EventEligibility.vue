<script setup lang="ts">
const activityList = [
    "Reflection circles and group discussions",
    "Opportunities for networking",
    "Workshops on maintaining spiritual practices post-Ramadan",
    "Refreshments provided",
    "Interactive sessions with guest speaker(s)",
]
</script>

<template>
    <section class="px-4 mt-11 lg:mt-[84px]">
        <div
            class="mx-auto max-w-container flex flex-col gap-y-12 lg:flex-row lg:justify-between lg:items-center lg:gap-x-[75px]">
            <div
                class="grow lg:order-2 lg:max-w-[655px] w-full rounded-[5px] bg-custom-blue px-[14px] lg:px-7 py-5 text-white">
                <p class="font-medium lg:text-xl">Eligibility</p>
                <p class="mt-[3px] lg:mt-[15px] text-[10px] lg:text-xs font-medium leading-6">This event is exclusively
                    for members of The
                    Barakah Lifestyle community.</p>
                <p class="font-medium text-xs lg:text-sm mt-[14px] lg:mt-[29px]"><span class="font-semibold">Fee</span>:
                    Free for community
                    members.</p>
                <p class="mt-4 lg:mt-[18px] lg:text-sm font-medium text-xs"><span class="font-semibold">Note: </span>
                    You must be a registered
                    member of our community to attend. </p>
                <p class="mt-9 lg:mt-10 text-[9px] lg:text-xs font-medium leading-5">Join us to become a part of this
                    enriching experience.</p>
            </div>
            <div class="">
                <h3 class="text-2xl font-merriweather">Activities</h3>
                <div class="mt-[30px] lg:mt-[50px] grid grid-cols-2 gap-x-5 gap-y-8">
                    <div class="flex gap-x-[14px]" v-for="(activity, index) in activityList" :key="index">
                        <span
                            class="inline-block w-[14px] h-[14px] lg:w-[17px] lg:h-[17px] bg-custom-yellow rounded-[2px] shrink-0" />
                        <p class="text-[9px] lg:text-xs font-medium">{{ activity }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>