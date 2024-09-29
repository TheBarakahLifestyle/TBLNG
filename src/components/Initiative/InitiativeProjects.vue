<template>
    <section class="px-4 mt-[53px]">
        <div class="mx-auto max-w-container">
            <div class="text-xs flex flex-col gap-y-[25px]">
                <div>
                    <h2 class="text-[22px] font-merriweather">Projects</h2>
                    <p class="mt-[30px] font-medium leading-7">We are committed to uplifting communities through
                        meaningful projects that inspire positive change.</p>
                </div>
                <div>
                    <p class=" font-medium leading-7">This projects aims to provide essential resources and
                        support
                        to those in need, focusing on
                        education, health, and sustainable development.</p>
                    <button
                        class="rounded-[5px] mt-[33px] lg:mt-14 bg-custom-yellow text-white font-roboto font-medium  h-[30px] lg:h-10 px-4 lg:px-[22px]">Join
                        Us</button>
                </div>
            </div>
            <div class="mt-[30px] grid grid-cols-2 gap-x-5 gap-y-9">
                <InitiativeProjectCard donation-purpose="Food Drive Initaitive" @donate="">
                    <img src="@/assets/images/initiative/initiative-project-1.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Widow Skill Program" @donate="">
                    <img src="@/assets/images/initiative/initiative-project-2.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Thrive Symposium" @donate="">
                    <img src="@/assets/images/initiative/initiative-project-3.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Water Projects" @donate="">
                    <img src="@/assets/images/initiative/initiative-project-4.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Uni-Student Food" @donate="">
                    <img src="@/assets/images/initiative/initiative-project-5.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Medical Outreaches" @donate="">
                    <img src="@/assets/images/initiative/initiative-project-6.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
            </div>
        </div>
    </section>
</template>