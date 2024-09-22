<template>
    <header class="px-4">
        <div
            class="mx-auto max-w-container h-fit relative lg:flex lg:items-center lg:justify-end lg:py-[50px] lg:px-[88px]">
            <img class="hidden lg:block lg:absolute inset-0 -z-10 h-full w-full object-cover"
                src="@/assets/images/event/EventHeader.png" />
            <div
                class="rounded-[10px] bg-custom-blue py-4 px-[30px] lg:px-[38px] lg:py-5 text-white lg:max-w-[449px] lg:shadow-[1px_1px_5px_1px_#00000033]">
                <h1 class="text-[22px] lg:text-2xl font-merriweather">Get Notified</h1>
                <p class="text-[10px] mt-[14px] lg:mt-5 lg:text-xs leading-6">Stay informed about our latest events and
                    offerings by
                    signing up for
                    our newsletter.</p>
                <form @submit.prevent class="mt-8 lg:mt-[50px] flex flex-col gap-y-10 lg:gap-y-16">
                    <div class="flex flex-col w-full gap-y-8">
                        <input placeholder="Name" type="text"
                            class="px-4 outline-none h-[30px] lg:h-10 text-xs w-full bg-white/30 rounded-[5px]" />
                        <input placeholder="Email Address" type="email"
                            class="px-4 outline-none h-[30px] lg:h-10 text-xs w-full bg-white/30 rounded-[5px]" />
                        <input placeholder="Phone Number" type="text"
                            class="px-4 outline-none h-[30px] lg:h-10 text-xs w-full bg-white/30 rounded-[5px]" />
                    </div>
                    <button
                        class="h-8 lg:h-[38px] rounded-[5px] px-4 text-sm lg:text-base font-roboto text-custom-blue bg-white text-center w-fit font-medium">Join
                        Us</button>
                </form>
            </div>
        </div>
    </header>
</template>