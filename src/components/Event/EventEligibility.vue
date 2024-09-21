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
    <section class="px-4 mt-11">
        <div class="mx-auto max-w-container flex flex-col gap-y-12">
            <div class="rounded-[5px] bg-custom-blue px-[14px] py-5 text-white">
                <p class="font-medium">Eligibility</p>
                <p class="mt-[3px] text-[10px] font-medium leading-6">This event is exclusively for members of The
                    Barakah Lifestyle community.</p>
                <p class="font-medium text-xs mt-[14px]"><span class="font-semibold">Fee</span>: Free for community
                    members.</p>
                <p class="mt-4 font-medium text-xs"><span class="font-semibold">Note: </span> You must be a registered
                    member of our community to attend. </p>
                <p class="mt-9 text-[9px] font-medium leading-5">Join us to become a part of this enriching experience.</p>
            </div>
            <div>
                <h3 class="text-2xl font-merriweather">Activities</h3>
                <div class="mt-[30px] grid grid-cols-2 gap-x-5 gap-y-8">
                    <div class="flex gap-x-[14px]" v-for="(activity, index) in activityList" :key="index">
                        <span
                            class="inline-block w-[14px] h-[14px] aspect-square bg-custom-yellow rounded-[2px] shrink-0" />
                        <p class="text-[9px] font-medium">{{ activity }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>