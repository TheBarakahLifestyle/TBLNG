<script setup lang="ts">
defineProps<{
    label: string
    text: string
}>()

</script>

<template>
    <div
        class="group bg-white px-2.5 pt-2.5 pb-7 lg:px-[27px] lg:pt-[18px] lg:pb-11 shadow-[1px_1px_5px_1px_#0000001A]">
        <div class="flex items-center gap-x-[13px] lg:flex-col lg:gap-y-[15px] lg:items-start">
            <slot />
            <p class="text-xs font-semibold group-odd:text-custom-blue group-even:text-custom-yellow lg:text-base">
                {{ label }}</p>

        </div>
        <p class="mt-5 leading-6 text-[8px] lg:text-xs lg:leading-7">{{ text }}</p>
    </div>
</template>