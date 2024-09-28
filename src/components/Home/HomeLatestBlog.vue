<script setup lang="ts">
import GhostContentAPI, { type PostsOrPages } from '@tryghost/content-api'

const api = new GhostContentAPI({
    url: 'https://the-barakah-lifestyle-ng.ghost.io',
    key: 'cb8c634fd302e8514841747317',
    version: "v5.0"
});

async function getLatestBlogPosts() {
    try {
        const res = await api.posts.browse({ limit: 4 })
        posts.value = res
    } catch (error) {
        console.log("ERROR", error)
    }

}

const posts = ref<PostsOrPages>()

onMounted(() => {
    if (!posts.value) {
        getLatestBlogPosts()
    }
})
</script>

<template>
    <NuxtErrorBoundary>
        <section class="mt-[70px] px-4 lg:bg-[#F4F4F4] lg:py-[47px] lg:mt-[120px]">
            <div class=" mx-auto max-w-container ">
                <h2 class="text-center font-merriweather text-[22px] lg:text-[32px]">Latest Blog Posts</h2>
                <p class="mt-4 text-xs lg:text-base text-center">We're excited to share our latest blog post with you!
                </p>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14 mt-11 lg:mt-[100px]">
                    <div v-for="post in posts" :key="post.id" class="group flex flex-col gap-5">
                        <div class="space-y-4 group-even:order-2">
                            <h3
                                class="font-roboto font-medium leading-5 lg:text-2xl lg:leading-8 capitalize line-clamp-2">
                                {{ post.title }}
                            </h3>
                            <p v-if="post.excerpt" class="text-[10px] lg:text-xs lg:leading-6 line-clamp-3">{{
                                post.excerpt }}</p>
                            <p v-else class="text-[10px] lg:text-xs lg:leading-6 line-clamp-3">Dedicated to empowering
                                individuals and
                                communities to lead
                                lives filled with purpose
                                and spiritual fulfillment.</p>
                        </div>
                        <div class="relative w-full h-[200%] min-h-[225px] lg:h-[382px]">
                            <img v-if="post.feature_image" :src="post.feature_image"
                                class="rounded-[10px] w-full h-full lg:h-[382px] object-cover" />
                            <img v-else src="@/assets/images/blog-image.jpg"
                                class="rounded-[10px] w-full h-[200%] lg:h-[382px] object-cover" />
                            <a :href="post.url" target="_blank"
                                class="rounded-full bg-[#D9D9D9]/90 w-7 h-7 lg:w-[46px] lg:h-[46px] shrink-0 absolute bottom-4 right-4 grid place-items-center">
                                <svg class="w-[13px] h-[13px] lg:w-[22px] lg:h-[22px]" viewBox="0 0 13 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.84291 6.50023C2.84291 6.72456 3.02462 6.90648 3.24916 6.90648H8.99142L6.97524 9.93113C6.85069 10.1178 6.90106 10.3701 7.0879 10.4945C7.15736 10.5407 7.23549 10.5627 7.31288 10.5627C7.44418 10.5627 7.57312 10.4992 7.65128 10.3818L10.2391 6.50023L7.65128 2.61863C7.52709 2.43176 7.27558 2.38118 7.08794 2.50598C6.90106 2.63037 6.85069 2.88266 6.97528 3.06933L8.99142 6.09398H3.24916C3.02462 6.09398 2.84291 6.2759 2.84291 6.50023Z"
                                        fill="#313131" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </NuxtErrorBoundary>
</template>