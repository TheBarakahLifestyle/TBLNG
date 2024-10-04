<script setup lang="ts">
import PaystackPop from '@paystack/inline-js';
import { warn } from 'vue';

const runtimeConfig = useRuntimeConfig()

const paystackInstance = new PaystackPop();

const props = defineProps<{
    showAsModal?: boolean
    projectPurpose?: string
}>()

const emit = defineEmits<{
    (event: "close"): void
}>()


async function onSuccess(transaction) {
    useToast().success(`Successful! Ref: ${transaction.reference}`, "Your donation is received")
    await nextTick()
    emit('close')
}


async function onError(error) {
    useToast().error(error?.message)
}

function onCancel() {
    useToast().warn("Alert", "You have cancelled your donation")
}


function makeDonation() {
    paystackInstance.newTransaction({
        key: runtimeConfig.public.paystackKey,
        email: form.email,
        amount: +form.amount * 100, // in kobo * 100 = naira
        firstName: form.firstName,
        phone: form.phone,
        metadata: {
            "donation purpose": form.purpose
        },
        onSuccess,
        onError,
        onCancel
    });
}

const form = reactive({
    firstName: "",
    email: "",
    amount: "",
    purpose: props.projectPurpose || "",
    phone: "",
})

</script>

<template>
    <form @submit.prevent="makeDonation"
        class="px-[30px] lg:px-[38px] py-4 pb-[33px] lg:py-5 lg:pb-[42px] rounded-[10px] shadow-[1px_1px_5px_1px_#0000001A]">
        <h2 class="font-merriweather text-[22px] lg:text-2xl">Donate</h2>
        <p class="leading-7 mt-[15px] lg:mt-5 text-[10px] lg:text-xs">Your contributions will directly improve lives,
            foster growth,
            and
            create a
            sustainable future for communities in need.</p>
        <div class="mt-[35px] lg:mt-[49px] space-y-[33px] lg:space-y-[42px] text-xs font-medium">
            <input v-model="form.firstName" required placeholder="Name" type="text"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
            <input v-model="form.email" required placeholder="Email Address" type="email"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
            <input v-model="form.phone" placeholder="Phone Number" type="tel" inputmode="numeric"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
            <input v-model="form.purpose" :readonly="showAsModal" required placeholder="Donation" type="text"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
            <input v-model="form.amount" required placeholder="Donation Amount" type="number" inputmode="numeric"
                class="outline-none bg-[#F4F4F4] rounded-[5px] px-4 w-full h-[31px] lg:h-10" />
        </div>
        <div class="flex gap-x-2 items-center">
            <button
                class="rounded-[5px] mt-14 lg:mt-[71px] bg-custom-yellow text-white font-roboto font-medium  h-[30px] lg:h-10 px-2.5 lg:px-[22px]">Donate</button>
            <button @click.prevent="emit('close')" v-if="showAsModal"
                class="rounded-[5px] mt-14 lg:mt-[71px] bg-red-600 text-white font-roboto font-medium  h-[30px] lg:h-10 px-2.5 lg:px-[22px]">Close</button>
        </div>
    </form>
</template>