<template>
    <section class="mx-auto max-w-container mt-[90px] px-4 flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-x-14 gap-y-[110px]">
        <div class="lg:order-2">
            <h1 class="font-merriweather text-[22px] lg:text-[32px]">Upcoming Events</h1>
            <p class="text-[13px] lg:text-sm font-medium leading-6 lg:leading-8 mt-4 lg:max-w-[324px]">Stay connected and be the first to
                know
                about
                our exciting upcoming events!</p>

            <div class="mt-12 grid grid-cols-2 gap-x-[18px] gap-y-[42px] lg:gap-x-[50px] lg:gap-y-[47px] lg:max-w-[632px]">
                <div v-for="n in 4"
                    class="group font-roboto flex flex-col justify-between gap-y-4 border-[1px] border-custom-blue rounded-[5px] px-2 py-4 lg:px-5 lg:py-4 transition-colors duration-300 hover:bg-custom-blue hover:text-white">
                    <div class="space-y-4">
                        <h3 class="text-xs font-medium lg:text-base">Series discussion with Sr. Rabi’ah</h3>
                        <p class="text-[10px] lg:text-sm">Don't miss this opportunity to engage in meaningful conversations and be
                            inspired
                            by
                            experience and wisdom.</p>
                    </div>
                    <p class="text-xs lg:text-base font-semibold text-custom-blue group-hover:text-white">Every Friday 8:30 pm</p>
                </div>
            </div>
        </div>

        <div class="rounded-[9px] bg-[#F4F4F4] px-2.5 lg:px-6 pb-4 relative pt-[100px] lg:pt-[152px] h-fit lg:max-w-[524px]">
            <img src="@/assets/images/home-event-round-image.jpg"
                class="w-[141px]  aspect-square rounded-full absolute top-0 -translate-y-1/2 -left-2.5" />
            <h3 class="text-xs lg:text-base font-medium text-custom-blue">Sign Up to Be Notified for Upcoming Events</h3>
            <p class="text-[9px] lg:text-[13px] leading-5 mt-4">Stay connected and be the first to know about our exciting upcoming
                events!
                Join
                us on this journey of personal growth, spiritual enrichment and community building.</p>

            <form @submit.prevent class="flex items-center gap-[30px] mt-[30px] lg:mt-[87px]">
                <input class="grow h-10 rounded-[5px] px-4 text-xs outline-none drop-shadow-lg drop" required
                    type="email" placeholder="Enter your email" />
                <button
                    class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-blue text-sm text-white font-roboto font-medium">Join
                    Us</button>
            </form>
        </div>
    </section>
</template>