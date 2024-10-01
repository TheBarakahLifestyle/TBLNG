<script setup lang="ts">
const form = reactive({
    access_key: "e115105a-6b1c-40a0-9b4b-07abd7feba47",
    subject: "Message From The Barakah Lifestyle Website",
    name: "",
    email: "",
    phone: "",
    message: "",
})

const pending = ref(false)
const result = ref("");
const status = ref("");

async function submitForm() {
    result.value = "Please wait...";
    pending.value = true
    try {
        const response = await $fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: form,
        });
        result.value = response.message;

        if (response.status === 200) {
            status.value = "success";
        } else {
            status.value = "error";
        }
    } catch (error) {
        console.log(error); // Log for debugging, can be removed
        status.value = "error";
        result.value = "Something went wrong!";
    } finally {
        // Reset form after submission
        form.name = "";
        form.email = "";
        form.message = "";
        form.phone = ""
        pending.value = false

        // Clear result and status after 5 seconds
        setTimeout(() => {
            result.value = "";
            status.value = "";
        }, 3000);
    }
}

</script>
<template>
    <div>
        <section class="px-4">
            <div
                class="mx-auto max-w-container flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-10 lg:px-[28px] lg:py-5 lg-bg-white lg:shadow-[1px_1px_5px_1px_#0000001A]">
                <!-- image here -->
                <div class="hidden lg:block rounded-[5px] relative overflow-clip grow max-w-[574px]">
                    <div class="absolute inset-0 bg-custom-blue/40" />
                    <img src="@/assets/images/contact/ContactUs.png" class="object-cover -z-10 w-full" />
                </div>
                <div class="lg:max-w-[436px]">
                    <h1 class="text-[22px] lg:text-[28px] text-custom-blue font-merriweather">Connect With Us</h1>
                    <p class="mt-5 lg:mt-[30px] leading-6 text-xs lg:text-sm">We look forward to hearing from you and
                        collaborating on impactful
                        projects!</p>
                    <form @submit.prevent="submitForm" class="flex flex-col w-full gap-y-12 lg:gap-y-11 mt-10 lg:mt-12">
                        <div class="flex flex-col gap-y-6 lg:gap-y-[30px]">
                            <input v-model="form.name" placeholder="Name" required
                                class="outline-none w-full h-10 lg:h-12 px-6 bg-[#F4F4F4] text-[10px] lg:text-xs rounded-[5px]" />
                            <input v-model="form.email" type="email" placeholder="Email Address" required
                                class="outline-none w-full h-10 lg:h-12 px-6 bg-[#F4F4F4] text-[10px] lg:text-xs rounded-[5px]" />
                            <input v-model="form.phone" placeholder="Phone No"
                                class="outline-none w-full h-10 lg:h-12 px-6 bg-[#F4F4F4] text-[10px] lg:text-xs rounded-[5px]" />
                            <textarea v-model="form.message" placeholder="Message" required rows="4"
                                class="outline-none w-full px-6 py-4 bg-[#F4F4F4] text-[10px] lg:text-xs rounded-[5px]"></textarea>
                        </div>
                        <button :disabled="pending"
                            class="font-roboto font-medium text-white rounded-[5px] bg-custom-blue px-[18px] h-7 text-center w-fit">Send</button>
                    </form>
                    <p class="mt-2 text-xs font-medium">{{ result }}</p>
                </div>
            </div>
        </section>
    </div>
</template>