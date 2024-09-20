<template>
    <div>
        <div class="mx-auto max-w-container">
            <div class="flex flex-col gap-y-[52px]">
                <div class="px-4 lg:px-0">
                    <img class="w-full" src="@/assets/images/community/Community.png" />
                </div>
                <div class="pl-4 lg:p-0">
                    <h3 class="font-medium pr-0 lg:pr-0 lg:px-0">UNITY in Faith, Growth in PURPOSE</h3>
                    <div class="px-4 py-8 mt-6 bg-custom-blue text-white rounded-tl-[10px] rounded-bl-[10px]">
                        <p class="font-merriweather">Welcome to the Barakah Lifestyle Community!</p>
                        <p class="text-[10px] mt-6 leading-6">We cherish the vibrant and diverse community that makes
                            our journey truly
                            special.</p>
                        <p class="text-[10px] mt-5 leading-6">Our community is a space for connection, growth, and
                            support, where each
                            member plays a vital
                            role in enriching our collecti- ve experience.</p>
                    </div>

                </div>
            </div>
        </div>


        <!-- What we offer -->
        <div class="mx-auto max-w-container mt-[53px]">
            <div class="px-4 lg:px-0">
                <h3 class="text-[22px] font-merriweather">What We Offer</h3>
                <p class="mt-[27px] text-xs leading-6">Become a part of a community that values compassion,
                    collaboration, and growth. Together, we can create a brighter future and make a meaningful
                    difference in the world.</p>
            </div>
            <div class="px-4 lg:px-0 mt-[50px] grid grid-cols-2 gap-x-[30px] gap-y-11">
                <div class="rounded-[5px] overflow-clip relative">
                    <img src="@/assets/images/community/quran.png" />
                    <div
                        class="text-white flex items-center justify-center px-2.5 bg-custom-yellow rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                        Qur'an</div>
                </div>
                <div class="rounded-[5px] overflow-clip relative">
                    <img src="@/assets/images/community/discussion.png" />
                    <div
                        class="text-white flex items-center justify-center px-2.5 bg-custom-blue rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                        Discussion</div>
                </div>
                <div class="rounded-[5px] overflow-clip relative">
                    <img src="@/assets/images/community/tajweed.png" />
                    <div
                        class="text-white flex items-center justify-center px-2.5 bg-custom-blue rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                        Tajweed</div>
                </div>
                <div class="rounded-[5px] overflow-clip relative">
                    <img src="@/assets/images/community/hangout.png" />
                    <div
                        class="text-white flex items-center justify-center px-2.5 bg-custom-yellow rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                        Hangouts</div>
                </div>
                <div class="rounded-[5px] overflow-clip relative">
                    <img src="@/assets/images/community/tafsir.png" />
                    <div
                        class="text-white flex items-center justify-center px-2.5 bg-custom-yellow rounded-[5px] font-semibold h-10 absolute bottom-0 inset-x-0">
                        Tafsir</div>
                </div>
            </div>
        </div>

        <div class="mt-[63px]">
            <div class="px-4 mx-auto max-w-container lg:px-0">
                <h3 class="font-merriweather text-[22px] lg:text-[32px] leading-10">Join the Community</h3>

                <div class="mt-10 lg:mt-[120px] lg:max-w-[537px]">
                    <h3 class="font-semibold text-sm leading-6">Embrace the Barakah Lifestyle and start your journey
                        towards
                        a
                        blessed and abundant life!</h3>
                    <p class="text-[10px] lg:text-xs leading-5 mt-5">Become a part of a community that values holistic
                        well-being and
                        positive impact.</p>
                    <form @submit.prevent class="flex items-center gap-[30px] mt-[30px] lg:mt-11">
                        <input class="grow h-10 rounded-[5px] px-4 text-xs outline-none ring-[2px] ring-custom-blue"
                            required type="email" placeholder="Enter your email" />
                        <button
                            class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-blue text-sm text-white font-roboto font-medium">Join
                            Us</button>
                    </form>
                </div>
            </div>
            <HomeTestimonial class="mt-[84px] mb-[50px]" />
        </div>

    </div>
</template>
