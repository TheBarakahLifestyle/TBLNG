<script setup lang="ts">
import GhostContentAPI, { type PostsOrPages } from '@tryghost/content-api'
import blog1 from "@/assets/images/home/blog-1.jpg"
import blog2 from "@/assets/images/home/blog-2.jpg"
import blog3 from "@/assets/images/home/blog-3.jpg"
import blog4 from "@/assets/images/home/blog-4.jpg"

const runtimeConfig = useRuntimeConfig()

const api = new GhostContentAPI({
    url: 'https://the-barakah-lifestyle-ng.ghost.io',
    key: runtimeConfig.public.ghostClientKey,
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

const blogPosts = [
    {
        title: "The little Bounties from my Rabb",
        excerpt: 'During a casual conversation with one of my dear sisters about how to stay fit and healthy without overcomplicating things, she said something that resonated deeply with me: "Just because you weren’t directly given something doesn’t mean Allah didn’t want it for you. There are countless ways to interpret this, but it made me reflect on the provisions Allah has granted us—particularly when it comes to maintaining a healthy lifestyle. It reminded me of the importance of avoiding what Allah has forbidden, things that may be harmful to both our body and soul, and instead using what He has made permissible for us.',
        feature_image: blog1,
        url: "https://the-barakah-lifestyle-ng.ghost.io/the-little-bounties-from-my-rabb"
    },
    {
        title: "Here’s What Happens When You Don’t Take Action...",
        excerpt: 'Doubt and fear begin to grow—it’s that simple. Every time I get inspired to start something, the "what ifs" somehow creep in. That inner voice can be so strong and overwhelming that I end up thinking, Yeah, maybe I shouldn’t even bother. All I can hear is, Fear, fear, fear.',
        feature_image: blog2,
        url: "https://the-barakah-lifestyle-ng.ghost.io/heres-what-happens-when-you-dont-take-action"
    },
    {
        title: "The Broken Clay, The Relentless Potter",
        excerpt: "Even on the days our minds can't submit, our bodies should still make their way to Allah.I battle with major depression. Unlike sadness, I do not need a reason. I can be content with my haves and patient in my have-nots, and my trigger can be as mundane as a conversation gone wrong, with the effect as damaging as a fall into the deepest depressive episode, from the highest cliff of happiness I have climbed in a while. It sucks all joy, all connection from everything I hold dear. I become detached from everything, and that includes my Islam.",
        feature_image: blog3,
        url: "https://the-barakah-lifestyle-ng.ghost.io/the-broken-clay-the-relentless-potter"
    },
    {
        title: "Bismillah: A Fresh Start",
        excerpt: "By the will of Allah, we’ve made a significant move, and we couldn’t be more excited and hopeful for what lies ahead.It’s been a remarkable journey with The Barakah Lifestyle Initiative (TBL). From its early days as Sr. Bk’s university blog, transitioning through ‘Barakah’s Thoughts’ to TBLT, and now evolving into TBL NG, we’ve seen incredible growth and transformation. As we expanded, it became clear that we needed to implement more robust systems, structures, and proper representation to support our new direction.",
        feature_image: blog4,
        url: "https://the-barakah-lifestyle-ng.ghost.io/bismillah-a-fresh-start"
    }
]
</script>

<template>
    <NuxtErrorBoundary>
        <section class="mt-[70px] px-4 lg:bg-[#F4F4F4] lg:py-[47px] lg:mt-[120px]">
            <div class=" mx-auto max-w-container ">
                <h2 class="text-center font-merriweather text-[22px] lg:text-[32px]">Latest Blog Posts</h2>
                <p class="mt-4 text-xs lg:text-base text-center">We're excited to share our latest blog post with you!
                </p>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14 mt-11 lg:mt-[100px]">
                    <div v-for="(post, index) in blogPosts" :key="index" class="group flex flex-col gap-5">
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
                        <a :href="post.url" target="_blank" class="relative w-full h-[200%] min-h-[225px] lg:h-[382px]">
                            <img v-if="post.feature_image" :src="post.feature_image"
                                class="rounded-[10px] w-full h-full lg:h-[382px] object-cover" />
                            <img v-else src="@/assets/images/blog-image.jpg"
                                class="rounded-[10px] w-full h-[200%] lg:h-[382px] object-cover" />
                            <div
                                class="rounded-full bg-[#D9D9D9]/90 w-7 h-7 lg:w-[46px] lg:h-[46px] shrink-0 absolute bottom-4 right-4 grid place-items-center">
                                <svg class="w-[13px] h-[13px] lg:w-[22px] lg:h-[22px]" viewBox="0 0 13 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.84291 6.50023C2.84291 6.72456 3.02462 6.90648 3.24916 6.90648H8.99142L6.97524 9.93113C6.85069 10.1178 6.90106 10.3701 7.0879 10.4945C7.15736 10.5407 7.23549 10.5627 7.31288 10.5627C7.44418 10.5627 7.57312 10.4992 7.65128 10.3818L10.2391 6.50023L7.65128 2.61863C7.52709 2.43176 7.27558 2.38118 7.08794 2.50598C6.90106 2.63037 6.85069 2.88266 6.97528 3.06933L8.99142 6.09398H3.24916C3.02462 6.09398 2.84291 6.2759 2.84291 6.50023Z"
                                        fill="#313131" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </NuxtErrorBoundary>
</template>