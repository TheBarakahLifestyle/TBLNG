<template>
    <section class="relative mx-auto max-w-container mt-14 lg:mt-[130px] after:bg-custom-blue/50">
        <div class="w-full h-full px-4 pt-[97px] pb-[22px] lg:px-[90px] lg:py-[71px] bg-custom-blue/50">
            <div
                class="px-4 py-[14px] lg:px-[28px] lg:py-[31px] rounded-[10px] bg-white max-w-[264px] md:max-w-[477px]">
                <h3 class="font-semibold text-sm lg:text-[20px] text-custom-blue">Volunteer With us </h3>
                <p class="text-[8px] lg:text-sm font-medium mt-4 lg:mt-6">By volunteering with us, you'll be part of a
                    dedicated team working
                    towards positive change and supporting our various projects and initiatives.</p>
                <form @submit.prevent class="mt-5 lg:mt-[35px]">
                    <input
                        class="w-full h-[30px] lg:h-10 rounded-[5px] px-[6px] lg:px-4 text-[8px] lg:text-xs outline-none bg-[#F4F4F4]"
                        required placeholder="Name" />
                    <input
                        class="w-full h-[30px] lg:h-10 rounded-[5px] mt-[7px] lg:mt-[22px] px-[6px] lg:px-4 text-[8px] lg:text-xs outline-none bg-[#F4F4F4]"
                        required type="email" placeholder="Enter your email" />
                    <button
                        class="shrink-0 block rounded-[5px] mt-[19px] lg:mt-[31px] px-2.5 lg:px-10 h-8 lg:h-9 bg-custom-blue text-sm lg:text-base text-white font-roboto font-medium">Volunteer</button>
                </form>
            </div>
        </div>
        <img class="w-full h-full object-cover object-right absolute inset-0 -z-10"
            src="@/assets/images/home-volunteer.png" />
    </section>
</template>