<template>
    <section class="mt-[68px] lg:mt-[120px] relative">
        <div
            class="px-4 mx-auto max-w-container relative w-full lg:bg-[#F4F4F4] lg:pt-[34px] lg:pb-[124px] lg:flex lg:flex-col lg:items-end">
            <h2 class="text-[22px] font-merriweather lg:text-xl lg:max-w-[50%]  w-full">Our Mission</h2>
            <p class="mt-[26px] text-xs lg:mt-[30px] lg:text-sm lg:max-w-[50%] w-full lg:leading-7">To
                eradicate hunger and empower women through education, creating a world where
                every individual has the
                opportunity to thrive.</p>
            <p class="mt-5 text-xs lg:mt-9 lg:text-sm lg:max-w-[50%] w-full lg:leading-7">We are committed to
                providing food security and
                educational resources to those in need, fostering self-
                sufficiency and sustainable development.</p>
            <div class="mt-[38px] relative lg:hidden">
                <img src="@/assets/images/initiative/initiative-mission-image.png" class="object-cover -z-10" />
                <p class="underline absolute bottom-0 right-0 text-[9px] font-medium">Building a brighter future</p>
            </div>
            <div class="mt-[62px] lg:mt-0 lg:absolute lg:top-[10%] lg:h-fit lg:w-fit lg:left-10 lg:bg-white lg:max-w-[440px] lg:rounded-[10px]">
                <InitiativeDonationForm />
            </div>
            <div class="mt-[65px] lg:mt-[110px] lg:max-w-[50%] w-full lg:flex lg:items-center lg:gap-x-[70px]">
                <h3 class="text-xl font-merriweather">Our Values</h3>
                <div class="mt-9 lg:mt-0 grid grid-cols-3 text-[10px] lg:text-base gap-y-5 lg:gap-y-10 gap-x-4">
                    <p>Faith</p>
                    <p>Compassion</p>
                    <p>Integrity</p>
                    <p>Empowerment</p>
                    <p>Sustainability</p>
                    <p>Collaboration</p>
                </div>
            </div>
        </div>
        <div
            class="mx-auto max-w-container px-4 py-5 lg:py-9 text-white text-xs bg-custom-blue mt-[68px] lg:mt-0 lg:flex lg:justify-end">
            <div class="w-full lg:max-w-[50%]">
                <h3 class="text-xl font-merriweather">Our Vision</h3>
                <p class="mt-[30px] leading-7 lg:text-sm lg:mt-9 lg:leading-9">We envision a world where hunger is a thing of the
                    past, and every woman
                    has
                    access to education and the opportunities it brings.</p>
                <p class="leading-7 mt-5 lg:text-sm lg:mt-9 lg:leading-9">By addressing these critical issues, we aim to build
                    stronger, more resilient
                    communities where
                    everyone can lead a fulfilling and prosperous life.</p>
            </div>
        </div>
    </section>
</template>