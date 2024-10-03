<script setup lang="ts">
const projectPurpose = ref("")
const showProjectDonationForm = ref(false)

function openProjectDonationForm(purpose: string) {
    projectPurpose.value = purpose
    showProjectDonationForm.value = true
}


/**
 * phone, email, firstname, amount, lastname
 */
</script>

<template>
    <section class="px-4 mt-[53px] lg:mt-[135px]">
        <div class="mx-auto max-w-container">
            <div class="text-xs flex flex-col gap-y-[25px] lg:flex-row lg:justify-between">
                <div class="lg:max-w-[435px]">
                    <h2 class="text-[22px] font-merriweather">Projects</h2>
                    <p class="mt-[30px] font-medium leading-7">We are committed to uplifting communities through
                        meaningful projects that inspire positive change.</p>
                </div>
                <div class="lg:max-w-[635px] ">
                    <p class=" font-medium leading-7">This projects aims to provide essential resources and
                        support
                        to those in need, focusing on
                        education, health, and sustainable development.</p>
                    <a href="https://selar.co/g844y3" target="_blank"
                        class="rounded-[5px] mt-[33px] lg:mt-10 bg-custom-yellow text-white font-roboto font-medium  h-[30px] lg:h-10 px-4 lg:px-[22px] flex items-center justify-center w-fit">Join
                        Us</a>
                </div>
            </div>
            <div
                class="mt-[30px] lg:mt-[116px] grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-3 lg:gap-x-[109px] lg:gap-y-[83px]">
                <InitiativeProjectCard donation-purpose="Food Drive Initaitive"
                    @donate="openProjectDonationForm('Food Drive Initaitive')">
                    <img src="@/assets/images/initiative/initiative-project-1.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Widow Skill Program"
                    @donate="openProjectDonationForm('Widow Skill Program')">
                    <img src="@/assets/images/initiative/initiative-project-2.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Thrive Symposium"
                    @donate="openProjectDonationForm('Thrive Symposium')">
                    <img src="@/assets/images/initiative/initiative-project-3.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Water Projects"
                    @donate="openProjectDonationForm('Water Projects')">
                    <img src="@/assets/images/initiative/initiative-project-4.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Uni-Student Food"
                    @donate="openProjectDonationForm('Uni-Student Food')">
                    <img src="@/assets/images/initiative/initiative-project-5.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
                <InitiativeProjectCard donation-purpose="Medical Outreaches"
                    @donate="openProjectDonationForm('Medical Outreaches')">
                    <img src="@/assets/images/initiative/initiative-project-6.png" class="w-full h-full object-cover" />
                </InitiativeProjectCard>
            </div>
        </div>
        <TheModal v-if="showProjectDonationForm" modalContentClass="p-0">
            <InitiativeDonationForm :projectPurpose="projectPurpose" @close="showProjectDonationForm = false"
                :show-as-modal="true" />
        </TheModal>
    </section>
</template>