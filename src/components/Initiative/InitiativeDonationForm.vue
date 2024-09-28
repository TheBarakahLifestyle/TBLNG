<template>
    <form @submit.prevent
        class="px-[30px] lg:px-[38px] py-4 pb-[33px] lg:py-5 lg:pb-[42px] rounded-[10px] shadow-[1px_1px_5px_1px_#0000001A]">
        <h2 class="font-merriweather text-[22px] lg:text-2xl">Donate</h2>
        <p class="leading-7 mt-[15px] lg:mt-5 text-[10px] lg:text-xs">Your contributions will directly improve lives, foster growth,
            and
            create a
            sustainable future for communities in need.</p>
        <div class="mt-[35px] lg:mt-[49px] space-y-[33px] lg:space-y-[42px] text-xs font-medium">
            <input required placeholder="Name" type="text"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
            <input required placeholder="Email Address" type="email"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
            <input required placeholder="Phone Number" type="tel" inputmode="numeric"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
            <input required placeholder="Donation" type="text"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
            <input required placeholder="Donation Amount" type="number" inputmode="numeric"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
        </div>
        <button
            class="rounded-[5px] mt-14 lg:mt-[71px] bg-custom-yellow text-white font-roboto font-medium  h-[30px] lg:h-10 px-2.5 lg:px-[22px]">Donate</button>
    </form>
</template>