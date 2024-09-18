<script setup lang="ts">

const testimonials = [
  {
    by: "Halima",
    text: "Alhamdulilah, it is just what my soul needs. I’m more conscious of Allah in my day to day life because of the constant reminders from the reflections.",
  },
  {
    by: "Sodiq",
    text: "Alhamdulilah, for everything",
  },
  {
    by: "Aisha",
    text: "Alhamdulilah, it is just what my soul needs. I’m more conscious of Allah in my day to day life because of the constant reminders from the reflections.",
  }
]

const testimonyToShowIndex = ref(0)

function handleNextTestimony() {
  const next = testimonyToShowIndex.value + 1
  if (testimonials[next]) {
    testimonyToShowIndex.value = next
  } else {
    testimonyToShowIndex.value = 0
  }
}

function handlePrevTestimony() {
  const prev = testimonyToShowIndex.value - 1
  if (prev >= 0 && testimonials[prev]) {
    testimonyToShowIndex.value = prev
  } else {
    testimonyToShowIndex.value = testimonials.length - 1
  }
}

const currentTestimony = computed(() => {
  return testimonials[testimonyToShowIndex.value]
})
</script>

<template>
  <div class="">
    <header class="mx-auto max-w-container">
      <section>
        <div class="px-4">
          <h1 class="font-merriweather text-[22px]">The Barakah Lifestyle NG</h1>
          <p class="text-[13px] lg:text-sm font-medium leading-6 lg:leading-8 mt-4">A vibrant and supportive community
            dedicated
            to fostering spiritual growth, personal development, and sisterhood among Muslim women</p>

          <p class="hidden lg:block text-[13px] lg:text-sm font-medium leading-6 lg:leading-8 mt-9"><span
              class="font-semibold">Our
              mission</span> is to create a safe and nurturing space where
            sisters can
            come together to learn, share and grow in their faith.</p>
          <form @submit.prevent class="flex items-center gap-[30px] mt-[35px]">
            <input class="grow h-10 rounded-[5px] px-4 text-xs outline-none drop-shadow-lg drop" required type="email"
              placeholder="Enter your email" />
            <button
              class="shrink-0 inline-block rounded-[5px] px-[14px] h-8 bg-custom-blue text-sm text-white font-roboto font-medium">Join
              Us</button>
          </form>
        </div>
      </section>
      <section class="mt-[45px]  px-4 lg:px-0">
        <div class="relative">
          <div class="absolute bottom-0 right-3.5 h-fit">
            <NuxtLink class="flex items-center gap-1 font-medium border-b-[1px] border-b-custom-blue py-1"><span
                class="text-[7px]">Building a brighter future
              </span>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.405594 3.5002C0.405594 3.69001 0.559353 3.84395 0.749344 3.84395H5.60818L3.90218 6.40327C3.79679 6.56122 3.83942 6.77472 3.99751 6.87994C4.05629 6.91906 4.12239 6.93769 4.18788 6.93769C4.29897 6.93769 4.40808 6.88397 4.47422 6.78462L6.66394 3.5002L4.47422 0.215767C4.36913 0.0576418 4.15632 0.014845 3.99754 0.120445C3.83942 0.225701 3.79679 0.43917 3.90222 0.597123L5.60818 3.15645H0.749344C0.559353 3.15645 0.405594 3.31038 0.405594 3.5002Z"
                  fill="#254166" />
              </svg>

            </NuxtLink>
          </div>
          <img src="@/assets/images/home_header.jpg" class="w-full bg-blue-500" />
        </div>
        <p class="text-[13px] lg:text-sm font-medium leading-6 lg:leading-8 mt-10 line-clamp-3"><span
            class="font-semibold">Our
            mission</span> is to create a safe and nurturing space where
          sisters can
          come together to learn, share and grow in their faith.</p>
      </section>
      <div class="px-4 relative mt-[71px]">
        <div
          class="w-[170px] aspect-square bg-custom-blue rounded-full absolute top-[50%] -translate-x-[50%] left-0 -translate-y-[50%]" />
        <div
          class="py-4 my-9 flex w-full justify-between flex-col pb-2.5 drop-shadow-md bg-white px-4 lg:px-11 rounded-[10px] min-h-[110px]">
          <p class="text-[10px] lg:text-sm leading-5">{{ currentTestimony.text }}</p>
          <div class="mt-4 flex items-center justify-between">
            <p class="font-medium text-[11px] lg:text-sm">{{ currentTestimony.by }}</p>
            <div class="flex items-center gap-3 shrink-0">
              <button @click="handlePrevTestimony">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.375 4.05703L11.6473 3.375L5.625 9L11.6473 14.625L12.375 13.9465L7.08398 9L12.375 4.05703Z"
                    fill="black" />
                </svg>
              </button>
              <button @click="handleNextTestimony">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.625 4.05703L6.35273 3.375L12.375 9L6.35273 14.625L5.625 13.9465L10.916 9L5.625 4.05703Z"
                    fill="black" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

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
