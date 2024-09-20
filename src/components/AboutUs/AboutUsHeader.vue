<template>

    <header class="mx-auto max-w-container flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-[130px]">
        <section class="lg:w-1/2">
            <div class="px-4">
                <h1 class="font-merriweather text-[22px]">The Barakah Lifestyle NG</h1>
                <p class="text-[13px] lg:text-sm font-semibold leading-6 mt-4">Embrace the Barakah Lifestyle and
                    start
                    your journey towards a blessed and abundant life!</p>

                <p class="text-[11px] lg:text-sm font-medium leading-6 mt-5">Become a part of a
                    community that values holistic well- being and positive impact.</p>
                <form @submit.prevent class="flex items-center gap-[30px] mt-[35px]">
                    <input class="grow h-10 rounded-[5px] px-4 text-xs outline-none ring-[2px] ring-custom-blue"
                        required type="email" placeholder="Enter your email" />
                    <button
                        class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-blue text-sm text-white font-roboto font-medium">Join
                        Us</button>
                </form>
                <!-- <p class="mt-[53px] text-xs font-medium leading-6">A Muslim Lifestyle Platform driven by faith to serve
                    humanity by educating, Inspiring and empowering
                    Muslims most especially women through the
                    teachings and values of Islam.</p> -->
            </div>
        </section>
        <section class="mt-[45px]  px-4 lg:mt-0 lg:px-0 lg:w-1/2">
            <div class="relative">
                <div class="absolute bottom-0 right-3.5 h-fit">
                    <NuxtLink class="flex items-center gap-1 font-medium border-b-[1px] border-b-custom-blue py-1">
                        <span class="text-[7px] lg:text-base text-custom-blue font-medium">Building a brighter
                            future
                        </span>
                        <svg class="w-[7px] aspect-square lg:w-[14px]" viewBox="0 0 7 7" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.405594 3.5002C0.405594 3.69001 0.559353 3.84395 0.749344 3.84395H5.60818L3.90218 6.40327C3.79679 6.56122 3.83942 6.77472 3.99751 6.87994C4.05629 6.91906 4.12239 6.93769 4.18788 6.93769C4.29897 6.93769 4.40808 6.88397 4.47422 6.78462L6.66394 3.5002L4.47422 0.215767C4.36913 0.0576418 4.15632 0.014845 3.99754 0.120445C3.83942 0.225701 3.79679 0.43917 3.90222 0.597123L5.60818 3.15645H0.749344C0.559353 3.15645 0.405594 3.31038 0.405594 3.5002Z"
                                fill="#254166" />
                        </svg>

                    </NuxtLink>
                </div>
                <img src="@/assets/images/home_header.jpg" class="w-full lg:hidden" />
                <img src="@/assets/images/large-home-header.png" class="w-full hidden lg:block" />
            </div>
            <p class="mt-[53px] text-xs font-medium leading-6">A Muslim Lifestyle Platform driven by faith to serve
                humanity by educating, Inspiring and empowering
                Muslims most especially women through the
                teachings and values of Islam.</p>
        </section>
        <!-- Start here -->

        <div class="px-4 mt-[86px] lg:mt-[166px] ">
            <div
                class="rounded-[5px] relative flex bg-white drop-shadow-lg  gap-x-6  px-3 pr-[42px] lg:pl-[28px] pt-[30px] pb-2.5 lg:py-5 h-fit">

                <p class="text-xs font-medium leading-6">Spiritual growth is the foundation of a fulfilling
                    life. Nourish your soul, and everything else will
                    fall into place.</p>
                <img src="@/assets/images/about/AboutUsHeaderTwo.png"
                    class="w-[91px] lg:w-[122px] aspect-square rounded-full absolute top-1/4 right-0 -translate-y-[100%]" />

            </div>
        </div>
        <!-- End here -->
    </header>
</template>