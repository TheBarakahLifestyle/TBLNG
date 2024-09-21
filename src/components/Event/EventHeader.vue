<template>
    <header class="px-4">
        <div class="mx-auto max-w-container">
            <div class="rounded-[10px] bg-custom-blue py-4 px-[30px] text-white">
                <h1 class="text-[22px] font-merriweather">Get Notified</h1>
                <p class="text-[10px] mt-[14px] leading-6">Stay informed about our latest events and offerings by signing up for
                    our newsletter.</p>
                <form @submit.prevent class="mt-8 flex flex-col gap-y-10">
                    <div class="flex flex-col w-full gap-y-8">
                        <input placeholder="Name" type="text"
                            class="px-4 outline-none h-[30px] text-xs w-full bg-white/30 rounded-[5px]" />
                        <input placeholder="Email Address" type="email"
                            class="px-4 outline-none h-[30px] text-xs w-full bg-white/30 rounded-[5px]" />
                        <input placeholder="Phone Number" type="text"
                            class="px-4 outline-none h-[30px] text-xs w-full bg-white/30 rounded-[5px]" />
                    </div>
                    <button
                        class="h-8 rounded-[5px] px-4 text-sm font-roboto text-custom-blue bg-white text-center w-fit font-medium">Join
                        Us</button>
                </form>
            </div>
        </div>
    </header>
</template>