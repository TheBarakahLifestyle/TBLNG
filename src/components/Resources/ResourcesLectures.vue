<script setup lang="ts">

const tabList = [
    "E-books",
    "Guides",
    "Sessions",
    "Lectures",
    "Tutorials",
]
</script>

<template>
    <section class="px-4">
        <div class="mx-auto max-w-container mt-14 lg:mt-[126px]">
            <div>
                <select
                    class="lg:hidden bg-transparent border-b-custom-blue border-b-[2px] text-xs font-medium pr-2 outline-none">
                    <option>Lectures</option>
                    <option>Guides</option>
                    <option>Sessions</option>
                    <option>Tutorials</option>
                    <option>E-books</option>
                </select>
                <div class="hidden lg:flex items-center w-full justify-center gap-x-[50px]">
                    <div class="text-[#727272] font-medium" v-for="tab in tabList" :key="tab">{{ tab }}</div>
                    <!-- Active tab style -->
                    <!-- <div class="text-custom-blue border-b-[2px] border-b-custom-blue font-medium" v-for="tab in tabList" :key="tab">{{ tab }}</div> -->
                </div>
                <div
                    class="mt-[33px] lg:mt-[88px] grid grid-cols-2 lg:grid-cols-3 gap-x-[13px] lg:gap-x-[35px] lg:gap-y-[60px] gap-y-[35px]">
                    <div class="relative rounded-[5px] overflow-clip" v-for="n in 6" :key="n">
                        <div
                            class="absolute flex flex-col justify-between gap-5 px-2 pt-[14px] pb-2 text-[7px] lg:text-base font-medium leading-6 inset-0 w-full h-full overflow-hidden bg-custom-blue/60 text-white lg:rounded-[8px]">
                            <div>
                                <p>The Concept of Taqwa</p>
                                <p>(God-consciousness) in Islam</p>
                            </div>
                            <p class="text-[10px] lg:text-base font-medium">READ NOW</p>
                        </div>
                        <img src="@/assets/images/resource/ResourceHeader1.png" class="object-cover -z-10" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>