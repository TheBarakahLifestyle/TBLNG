<script setup lang="ts">
const { email, name, pending, joinUs } = useJoinUs()

const JoinUsReasons = [
    {
        title: "Spiritual Growth",
        description: "Participate in enriching spiritual programs like Qur’an Reflection with Sr. Samirah and other faith based activities."
    },
    {
        title: "Community Support",
        description: "Connect with like-minded individuals who share your passion for living a purposeful and fulfilling life."
    },
    {
        title: "Holistic Well-Being",
        description: "Access resources that promote physical, mental, and emotional health."
    },
    {
        title: "Exclusive Content",
        description: "Stay informed with our latest blog posts, news-letters, and updates on upcoming events and initiatives."
    },
]
</script>

<template>
    <section class="mx-auto max-w-container px-4 mt-8 lg:mt-[130px] lg:flex lg:items-end lg:justify-between lg:gap-x-5">
        <div>
            <div class="lg:max-w-[600px]">
                <h3 class="font-merriweather text-[22px] lg:text-[32px] leading-10">Join the Barakah Lifestyle Community
                </h3>
                <p class="text-xs lg:text-sm leading-5 mt-5">Embark on a transformative journey with the Barakah
                    Lifestyle
                    Community! We
                    invite you to become a part of a vibrant, supportive network dedicated to holistic well-being,
                    spiritual
                    growth,
                    and meaningful living.</p>

                <div class="flex items-center gap-2.5 mt-10 lg:mt-[54px]">
                    <div
                        class="w-24 flex h-[90px] bg-[#3DADB8] px-4 pt-5 rounded-tr-[20px] rounded-tl-[5px] rounded-bl-[20px] rounded-br-[5px]">
                        <img src="@/assets/images/home-lifestyle-1.png" class="object-cover mx-auto" />
                    </div>
                    <div
                        class="w-24 flex h-[90px] bg-[#FB6305] px-4 pt-5 rounded-tl-[20px] rounded-tr-[5px] rounded-br-[20px] rounded-bl-[5px]">
                        <img src="@/assets/images/home-lifestyle-2.png" class="object-cover mx-auto" />
                    </div>
                    <div
                        class="w-24 flex h-[90px] bg-[#E9AE0A] px-4 pt-5 rounded-tl-[20px] rounded-tr-[5px] rounded-br-[20px] rounded-bl-[5px]">
                        <img src="@/assets/images/home-lifestyle-3.png" class="object-cover mx-auto" />
                    </div>
                </div>
            </div>

            <div class="mt-10 lg:mt-[120px] lg:max-w-[537px]">
                <h3 class="font-semibold text-sm leading-6">Embrace the Barakah Lifestyle and start your journey towards
                    a
                    blessed and abundant life!</h3>
                <p class="text-[10px] lg:text-xs leading-5 mt-5">Become a part of a community that values holistic
                    well-being and
                    positive impact.</p>
                <form @submit.prevent="joinUs" class="flex items-center gap-[30px] mt-[30px] lg:mt-11">
                    <input v-model.trim="email"
                        class="grow h-10 rounded-[5px] px-4 text-xs lg:text-sm outline-none ring-[2px] ring-custom-blue"
                        required type="email" placeholder="Enter your email" />
                    <button
                        class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-yellow text-sm text-white font-roboto font-medium">{{
                            pending ? "loading..." : "Join Us" }}</button>
                </form>
            </div>
        </div>

        <div class="mt-[66px] lg:mt-0 lg:max-w-[493px]">
            <h3 class="text-[22px] lg:text-[24px] font-semibold text-custom-blue">Why Join Us ?</h3>
            <div class="mt-[55px] lg:mt-10 grid auto-rows-fr grid-cols-2 gap-x-8 lg:gap-x-9 gap-y-7 lg:gap-y-10">
                <div v-for="(reason, index) in JoinUsReasons" :key="index"
                    class="border-[2px] border-custom-blue rounded-[5px] px-3 py-4 lg:px-6 lg:py-8">
                    <p class="font-medium text-xs lg:text-base">{{ reason.title }}</p>
                    <p class="mt-[15px] text-[9px] lg:text-xs">{{ reason.description }}</p>
                </div>
            </div>
        </div>

    </section>
</template>