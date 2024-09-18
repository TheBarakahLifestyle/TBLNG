<script setup lang="ts">

</script>

<template>
  <div class="">
    <HomeHeader />

    <!-- Upcoming Events -->
    <section class="mx-auto max-w-container mt-[90px] px-4 flex flex-col gap-y-[110px]">
      <div>
        <h1 class="font-merriweather text-[22px]">Upcoming Events</h1>
        <p class="text-[13px] lg:text-sm font-medium leading-6 lg:leading-8 mt-4">Stay connected and be the first to
          know
          about
          our exciting upcoming events!</p>

        <div class="mt-12 grid grid-cols-2 gap-x-[18px] gap-y-[42px]">
          <div v-for="n in 4"
            class="group font-roboto flex flex-col justify-between gap-y-4 border-[1px] border-custom-blue rounded-[5px] px-2 py-4 transition-colors duration-300 hover:bg-custom-blue hover:text-white">
            <div class="space-y-4">
              <h3 class="text-xs font-medium">Series discussion with Sr. Rabi’ah</h3>
              <p class="text-[10px]">Don't miss this opportunity to engage in meaningful conversations and be inspired
                by
                experience and wisdom.</p>
            </div>
            <p class="text-xs font-semibold text-custom-blue group-hover:text-white">Every Friday 8:30 pm</p>
          </div>
        </div>
      </div>

      <div class="rounded-[9px] bg-[#F4F4F4] px-2.5 pb-4 relative pt-[100px]">
        <img src="@/assets/images/home-event-round-image.jpg"
          class="w-[141px] bg-red-500 aspect-square rounded-full absolute top-0 -translate-y-1/2 -left-2.5" />
        <h3 class="text-xs font-medium text-custom-blue">Sign Up to Be Notified for Upcoming Events</h3>
        <p class="text-[9px] leading-5 mt-4">Stay connected and be the first to know about our exciting upcoming events!
          Join
          us on this journey of personal growth, spiritual enrichment and community building.</p>

        <form @submit.prevent class="flex items-center gap-[30px] mt-[30px]">
          <input class="grow h-10 rounded-[5px] px-4 text-xs outline-none drop-shadow-lg drop" required type="email"
            placeholder="Enter your email" />
          <button
            class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-blue text-sm text-white font-roboto font-medium">Join
            Us</button>
        </form>
      </div>
    </section>


    <!-- Latest Blog Posts -->
    <section class="mt-[70px] mx-auto max-w-container px-4">
      <h2 class="text-center font-merriweather text-[22px] lg:text-[32px]">Latest Blog Posts</h2>
      <p class="mt-4 text-xs lg:text-base text-center">We're excited to share our latest blog post with you!</p>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14 mt-11">
        <div class="group flex flex-col gap-5" v-for="i in 4" :key="i">
          <div class="space-y-4 group-even:order-2">
            <h3 class="font-roboto font-medium leading-5 lg:text-2xl lg:leading-8">A Journey Towards Holistic Well-being
            </h3>
            <p class="text-[10px] lg:text-xs lg:leading-6">Dedicated to empowering individuals and communities to lead
              lives filled with purpose
              and spiritual fulfillment.</p>
          </div>
          <img src="@/assets/images/blog-image.jpg" class="rounded-[10px] w-full h-[200%] lg:h-[382px] object-cover" />
        </div>
      </div>
    </section>

    <!-- Volunteer With Us -->
    <section class="mx-auto max-w-container mt-14 after:bg-custom-blue/50">
      <img class="w-full h-[357px] object-cover object-right" src="@/assets/images/home-volunteer.png" />
    </section>

    <section class="mx-auto max-w-container px-4 mt-8">
      <div>
        <div>
          <h3 class="font-merriweather text-[22px] leading-10">Join the Barakah Lifestyle Community</h3>
          <p class="text-xs leading-5 mt-5">Embark on a transformative journey with the Barakah Lifestyle Community! We
            invite you to become a part of a vibrant, supportive network dedicated to holistic well-being, spiritual
            growth,
            and meaningful living.</p>

          <div class="flex items-center gap-2.5 mt-10">
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

        <div class="mt-10">
          <h3 class="font-semibold text-sm leading-6">Embrace the Barakah Lifestyle and start your journey towards a
            blessed and abundant life!</h3>
          <p class="text-[10px] leading-5 mt-5">Become a part of a community that values holistic well-being and
            positive impact.</p>
          <form @submit.prevent class="flex items-center gap-[30px] mt-[30px]">
            <input class="grow h-10 rounded-[5px] px-4 text-xs outline-none ring-[2px] ring-custom-blue" required
              type="email" placeholder="Enter your email" />
            <button
              class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-blue text-sm text-white font-roboto font-medium">Join
              Us</button>
          </form>
        </div>
      </div>

      <div class="mt-[66px]">
        <h3 class="text-[22px] font-semibold text-custom-blue">Why Join Us ?</h3>
        <div class="mt-[55px] grid grid-cols-2 gap-x-8 gap-y-7">
          <div v-for="n in 4" :key="n" class="border-[2px] border-custom-blue rounded-[5px] px-3 py-4">
            <p class="font-medium text-xs">Spiritual Growth</p>
            <p class="mt-[15px] text-[9px] ">Participate in enriching spiritual programs like Qur’an Reflection with Sr.
              Samirah and other faith based activities.</p>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>
