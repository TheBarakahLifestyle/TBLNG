<script setup lang="ts">

const ourValues = [
    {
        title: "Faith",
        text: "It is the guiding light that shapes our mission, our programs, and our community."
    },
    {
        title: "Integrity",
        text: "We hold integrity as one of our core values, guiding every aspect of our mission and activities."
    },
    {
        title: "Trust",
        text: "It is through trust that we create a safe and nurturing environment where our members feel valued."
    },
    {
        title: "Diversity",
        text: "we celebrate diversity as a fundamental value that enriches our community and strengthens our mission."
    },
    {
        title: "Compassion",
        text: "compassion stands as one of our foundational values, guiding our mission and actions."
    },
    {
        title: "Collaboration",
        text: "It is through working together that we can achieve the greatest impact and enriching community."
    },
]

</script>

<template>
    <section class="px-4 mt-[76px] lg:mt-[123px]">
        <div class="mx-auto max-w-container flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10 ">
            <div class="relative w-fit h-fit lg:max-w-[460px]">
                <div class=" absolute w-full h-full  inset-0 px-4 py-5 text-white lg:px-[42px] lg:py-[62px] ">
                    <p class="text-[22px] lg:text-[32px] font-merriweather">Our Vision</p>
                    <p class="mt-[30px] text-sm font-medium leading-10 lg:leading-[42px] lg:text-base">To enrich
                        humanity and create a
                        community
                        where
                        Muslims, especially women, are empowered through faith -based education, inspiration, and
                        support, fostering holistic well-being and spiritual growth.</p>
                </div>
                <div
                    class="rounded-full w-[53px] flex items-center justify-center aspect-square absolute bottom-0 right-0 bg-custom-blue -translate-x-1/4 -translate-y-1/4">
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.7715 13.3323L21.4891 21.837C21.4594 22.0332 21.3529 22.2097 21.1931 22.3275C21.0333 22.4453 20.8333 22.4949 20.6369 22.4653C20.4406 22.4357 20.2641 22.3293 20.1462 22.1696C20.0282 22.01 19.9785 21.81 20.0079 21.6136L21.0066 14.9869L11.421 19.4804C11.2411 19.5647 11.0351 19.5741 10.8483 19.5066C10.6615 19.439 10.5092 19.3 10.4249 19.1201C10.3406 18.9403 10.3312 18.7343 10.3988 18.5475C10.4663 18.3607 10.6053 18.2084 10.7852 18.1241L20.3708 13.6306L14.6383 10.1592C14.4703 10.0554 14.3502 9.88945 14.3039 9.69749C14.2577 9.50553 14.2891 9.30307 14.3914 9.13417C14.4936 8.96526 14.6585 8.84357 14.85 8.79557C15.0415 8.74756 15.2442 8.77713 15.4141 8.87784L22.7715 13.3323Z"
                            fill="white" />
                    </svg>

                </div>
                <div class="relative -z-10">
                    <img src="@/assets/images/about/AboutUsVision.png" class="object-cover" />
                    <img src="@/assets/images/about/AboutUsVisionOverlay.png" class="object-cover absolute inset-0" />
                </div>
            </div>
            <div class="lg:max-w-[620px]">
                <h3 class="text-[22px] font-merriweather lg:text-[32px]">Our Values</h3>
                <div class="grid grid-cols-2 gap-x-3 gap-y-[14px] mt-6 lg:mt-[54px] lg:grid-cols-3 lg:gap-10">
                    <div class="bg-[#F4F4F44D] rounded-[5px] px-[18px] py-4 lg:px-6"
                        v-for="(value, index) in ourValues">
                        <p class="text-xs font-medium lg:text-lg">{{ value.title }}</p>
                        <p class="text-[9px] lg:text-[10px] leading-6 mt-[11px] lg:mt-4">{{ value.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>