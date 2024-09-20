<script setup lang="ts"></script>

<template>
    <footer class="relative lg:mt-[110px]">
        <section class="px-4">
            <div class="py-6 mx-auto max-w-container relative lg:flex lg:gap-x-[76px] w-full">
                <div class="flex flex-col lg:flex-row lg:items-center gap-x-4 gap-y-[28px]">
                    <img src="@/assets/images/logo.svg" class=" relative -left-2 w-[72px] aspect-square" />
                    <p class="font-merriweather">The Barakah Lifestyle NG</p>
                </div>
                <div class="space-y-5 text-sm mt-[30px] font-medium lg:hidden">
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>

                <div class="flex flex-wrap gap-y-[27px] justify-between mt-[30px] lg:grow lg:justify-around">
                    <div class="flex flex-col gap-y-5">
                        <p class="flex items-center gap-x-2.5">
                            <IconInstagram /><span class="inline-block text-xs">@thebarakahlifestyle</span>
                        </p>
                        <p class="flex items-center gap-x-2.5">
                            <IconInstagram /><span class="inline-block text-xs">@tblInitiative.ng</span>
                        </p>
                    </div>
                    <div class="flex flex-col gap-y-5">
                        <p class="flex items-center gap-x-2.5">
                            <IconPhone /><span class="inline-block text-xs">+234 812 889 8593</span>
                        </p>
                        <p class="flex items-center gap-x-2.5">
                            <IconPhone /><span class="inline-block text-xs">+234 813 523 8117</span>
                        </p>
                    </div>
                    <div class="flex flex-col gap-y-5">
                        <p class="flex items-center gap-x-2.5">
                            <IconMail /><span class="inline-block text-xs">tbarakahlifestyle@gmail.com</span>
                        </p>
                        <p class="flex items-center gap-x-2.5">
                            <IconMail /><span class="inline-block text-xs">@thebarakahlifestyletribe@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="hidden lg:block py-4 bg-custom-blue px-4">
            <div class="mx-auto max-w-container relative text-lg font-medium text-white flex items-center justify-around">
                <span class="grow text-center inline-block">Privacy</span>
                <span class="grow text-center inline-block">Terms and Conditions</span>
                <span class="flex items-center gap-1 justify-end grow"><svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.49996 15.5834C12.3398 15.5834 15.5833 12.34 15.5833 8.50008C15.5833 4.66021 12.3398 1.41675 8.49996 1.41675C4.66008 1.41675 1.41663 4.66021 1.41663 8.50008C1.41663 12.34 4.66008 15.5834 8.49996 15.5834ZM8.49996 2.83341C11.572 2.83341 14.1666 5.42804 14.1666 8.50008C14.1666 11.5721 11.572 14.1667 8.49996 14.1667C5.42792 14.1667 2.83329 11.5721 2.83329 8.50008C2.83329 5.42804 5.42792 2.83341 8.49996 2.83341Z"
                            fill="white" />
                        <path
                            d="M8.50004 12.0416C9.13825 12.0416 10.3282 11.9226 11.1258 11.1264L10.1242 10.1234C9.81046 10.4372 9.20271 10.6249 8.50004 10.6249C7.34829 10.6249 6.37504 9.65167 6.37504 8.49992C6.37504 7.34817 7.34829 6.37492 8.50004 6.37492C9.20342 6.37492 9.81117 6.56263 10.1242 6.87571L11.1258 5.87413C10.329 5.07725 9.13825 4.95825 8.50004 4.95825C6.54717 4.95825 4.95837 6.54704 4.95837 8.49992C4.95837 10.4528 6.54717 12.0416 8.50004 12.0416Z"
                            fill="white" />
                    </svg>

                    2024 The Baraqah Lifestyle
                </span>
            </div>
        </section>
    </footer>
</template>