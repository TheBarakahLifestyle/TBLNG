<script setup lang="ts">

const emit = defineEmits<{
    (event: 'donate'): void
}>()

const props = defineProps<{
    donationPurpose: string
}>()

</script>
<template>
    <div class="rounded-[5px] overflow-clip relative">
        <slot />
        <div
            class="flex w-[90%] lg:w-[80%] rounded-[2px] lg:rounded-[5px] overflow-clip h-[25px] lg:h-[53px] bg-red-500 absolute bottom-4 left-[50%] -translate-x-[50%]">
            <div
                class="flex-wrap h-full bg-white font-semibold text-[8px] flex items-center justify-center grow px-1 lg:px-2.5 lg:text-sm">
                {{ donationPurpose }}</div><button
                class="h-full shrink-0 bg-custom-blue text-white font-medium text-[9px] px-1 lg:px-3 lg:text-sm"
                @click="emit('donate')">DONATE</button>
        </div>
    </div>
</template>