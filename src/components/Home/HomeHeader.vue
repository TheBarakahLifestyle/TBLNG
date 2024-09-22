<template>
    <header class="mx-auto max-w-container flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-[130px]">
        <section class="lg:w-1/2">
            <div class="px-4">
                <h1 class="font-merriweather text-[22px]">The Barakah Lifestyle NG</h1>
                <p class="text-[13px] lg:text-sm font-medium leading-6 mt-4">A vibrant and supportive
                    community
                    dedicated
                    to fostering spiritual growth, personal development, and sisterhood among Muslim women</p>

                <p class="hidden lg:block text-[13px] lg:text-sm font-medium leading-6 mt-9"><span
                        class="font-semibold">Our
                        mission</span> is to create a safe and nurturing space where
                    sisters can
                    come together to learn, share and grow in their faith.</p>
                <form @submit.prevent class="flex items-center gap-[30px] mt-[35px]">
                    <input class="grow h-10 rounded-[5px] px-4 text-xs outline-none drop-shadow-lg drop" required
                        type="email" placeholder="Enter your email" />
                    <button
                        class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-blue text-sm text-white font-roboto font-medium">Join
                        Us</button>
                </form>
            </div>
            <HomeTestimonial class="mt-[71px] lg:mt-[127px] hidden lg:block lg:max-w-[475px]" />
        </section>
        <section class="mt-[45px]  px-4 lg:mt-0 lg:px-0 lg:w-1/2">
            <div class="relative">
                <div class="hidden lg:block absolute bottom-0 right-3.5 h-fit">
                    <NuxtLink class="flex items-center gap-1 font-medium border-b-[1px] border-b-custom-blue py-1"><span
                            class="text-[7px] lg:text-base text-custom-blue font-medium">Building a brighter future
                        </span>
                        <svg class="w-[7px] aspect-square lg:w-[14px]" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.405594 3.5002C0.405594 3.69001 0.559353 3.84395 0.749344 3.84395H5.60818L3.90218 6.40327C3.79679 6.56122 3.83942 6.77472 3.99751 6.87994C4.05629 6.91906 4.12239 6.93769 4.18788 6.93769C4.29897 6.93769 4.40808 6.88397 4.47422 6.78462L6.66394 3.5002L4.47422 0.215767C4.36913 0.0576418 4.15632 0.014845 3.99754 0.120445C3.83942 0.225701 3.79679 0.43917 3.90222 0.597123L5.60818 3.15645H0.749344C0.559353 3.15645 0.405594 3.31038 0.405594 3.5002Z"
                                fill="#254166" />
                        </svg>

                    </NuxtLink>
                </div>
                <!-- <img src="@/assets/images/home_header.jpg" class="w-full lg:hidden" /> -->
                <img src="@/assets/images/home/HomeHeaderGroup.png" class="w-full lg:hidden" />
                <img src="@/assets/images/large-home-header.png" class="w-full hidden lg:block" />
            </div>
            <p class="lg:hidden text-[13px] lg:text-sm font-medium leading-6 mt-10 line-clamp-3"><span
                    class="font-semibold">Our
                    mission</span> is to create a safe and nurturing space where
                sisters can
                come together to learn, share and grow in their faith.</p>
        </section>
        <HomeTestimonial class="mt-[71px] lg:hidden" />
    </header>
</template>