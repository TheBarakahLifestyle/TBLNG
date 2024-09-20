<template>
    <section class="mt-[70px] px-4 lg:bg-[#F4F4F4] lg:py-[47px] lg:mt-[120px]">
        <div class=" mx-auto max-w-container ">
            <h2 class="text-center font-merriweather text-[22px] lg:text-[32px]">Latest Blog Posts</h2>
            <p class="mt-4 text-xs lg:text-base text-center">We're excited to share our latest blog post with you!</p>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14 mt-11 lg:mt-[100px]">
                <div class="group flex flex-col gap-5" v-for="i in 4" :key="i">
                    <div class="space-y-4 group-even:order-2">
                        <h3 class="font-roboto font-medium leading-5 lg:text-2xl lg:leading-8">A Journey Towards
                            Holistic
                            Well-being
                        </h3>
                        <p class="text-[10px] lg:text-xs lg:leading-6">Dedicated to empowering individuals and
                            communities to lead
                            lives filled with purpose
                            and spiritual fulfillment.</p>
                    </div>
                    <img src="@/assets/images/blog-image.jpg"
                        class="rounded-[10px] w-full h-[200%] lg:h-[382px] object-cover" />
                </div>
            </div>
        </div>
    </section>
</template>