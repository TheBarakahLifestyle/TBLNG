<script setup lang="ts">
const { email, name, pending, joinUs } = useJoinUs()
</script>

<template>
    <div>
        <div class="mx-auto max-w-container">
            <div class="flex flex-col gap-y-[52px] lg:flex-row lg:items-end lg:gap-x-14">
                <div class="px-4 lg:px-0 lg:w-[60%]">
                    <img class="w-full" src="@/assets/images/community/Community.png" />
                </div>
                <div class="pl-4 lg:p-0 lg:w-[40%]">
                    <h3 class="font-medium pr-0 lg:pr-0 lg:px-0 lg:text-[30px] lg:max-w-[318px]">UNITY in Faith, Growth
                        in <span class="text-custom-blue">PURPOSE</span></h3>
                    <div
                        class="px-4 py-8 lg:py-[30px] lg:px-[52px] mt-6 bg-custom-blue text-white rounded-tl-[10px] rounded-bl-[10px]">
                        <p class="font-merriweather lg:text-2xl">Welcome to the Barakah Lifestyle Community!</p>
                        <p class="text-[10px] mt-6 lg:mt-4 lg:text-base leading-6">We cherish the vibrant and diverse
                            community that makes
                            our journey truly
                            special.</p>
                        <p class="text-[10px] mt-5 lg:mt-4 lg:text-base leading-6">Our community is a space for
                            connection, growth, and
                            support, where each
                            member plays a vital
                            role in enriching our collecti- ve experience.</p>
                    </div>

                </div>
            </div>
        </div>


        <!-- What we offer -->
        <section class="mt-[53px] lg:mt-[110px] px-4">
            <div class="mx-auto max-w-container">
                <div class="flex flex-col gap-y-[27px] lg:flex lg:justify-between lg:gap-x-10">
                    <h3 class="text-[22px] lg:text-[32px] font-merriweather">What We Offer</h3>
                    <p class="text-xs  lg:text-base leading-6">Become a part of a community that values compassion,
                        collaboration, and growth. Together, we can create a brighter future and make a meaningful
                        difference in the world.</p>
                </div>
                <div
                    class="mt-[50px] lg:mt-[81px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[30px] lg:gap-x-8 gap-y-11">
                    <div class="group rounded-[5px] overflow-clip relative">
                        <img src="@/assets/images/community/quran.png" />
                        <div
                            class="text-white lg:text-xl flex items-center justify-center px-2.5 bg-custom-yellow lg:group-even:bg-custom-blue lg:group-odd:bg-custom-yellow rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                            Qur'an</div>
                    </div>
                    <div class="group rounded-[5px] overflow-clip relative">
                        <img src="@/assets/images/community/discussion.png" />
                        <div
                            class="text-white lg:text-xl flex items-center justify-center px-2.5 bg-custom-blue lg:group-even:bg-custom-blue lg:group-odd:bg-custom-yellow rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                            Discussion</div>
                    </div>
                    <div class="group rounded-[5px] overflow-clip relative">
                        <img src="@/assets/images/community/tajweed.png" />
                        <div
                            class="text-white lg:text-xl flex items-center justify-center px-2.5 bg-custom-blue lg:group-even:bg-custom-blue lg:group-odd:bg-custom-yellow rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                            Tajweed</div>
                    </div>
                    <div class="group rounded-[5px] overflow-clip relative">
                        <img src="@/assets/images/community/hangout.png" />
                        <div
                            class="text-white lg:text-xl flex items-center justify-center px-2.5 bg-custom-yellow lg:group-even:bg-custom-blue lg:group-odd:bg-custom-yellow rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                            Hangouts</div>
                    </div>
                    <div class="group rounded-[5px] overflow-clip relative">
                        <img src="@/assets/images/community/tafsir.png" />
                        <div
                            class="text-white lg:text-xl flex items-center justify-center px-2.5 bg-custom-yellow lg:group-even:bg-custom-blue lg:group-odd:bg-custom-yellow rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                            Tafsir</div>
                    </div>
                </div>
            </div>
        </section>

        <div
            class="mt-[63px] lg:mt-[150px] mx-auto max-w-container flex flex-col gap-y-[84px] lg:gap-x-10 lg:flex-row lg:justify-between lg:items-center">
            <div class="px-4 lg:order-2">
                <div class="lg:max-w-[537px]">
                    <h3 class="font-merriweather text-[22px] lg:text-[32px] leading-10">Join the Community</h3>

                    <div class="mt-10">
                        <h3 class="font-semibold text-sm leading-6">Embrace the Barakah Lifestyle and start your journey
                            towards
                            a
                            blessed and abundant life!</h3>
                        <p class="text-[10px] lg:text-xs leading-5 mt-5">Become a part of a community that values
                            holistic
                            well-being and
                            positive impact.</p>
                        <form @submit.prevent="joinUs" class="flex items-center gap-[30px] mt-[30px] lg:mt-11">
                            <input v-model.trim="email"
                                class="grow h-10 rounded-[5px] px-4 text-xs lg:text-sm outline-none ring-[2px] ring-custom-blue"
                                required type="email" placeholder="Enter your email" />
                            <button
                                class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-blue text-sm text-white font-roboto font-medium">{{
                                    pending ? "loading..." : "Join Us" }}</button>
                        </form>
                    </div>
                </div>
            </div>
            <HomeTestimonial class="mb-[50px] lg:mb-0 lg:max-w-[475px]" />
        </div>

    </div>
</template>
