import Seamailer from "@seamailer/seamailer-js";

export function useJoinUs() {
  const runtimeConfig = useRuntimeConfig();

  const seamailer = new Seamailer(runtimeConfig.public.seamailerKey);

  const email = ref("");
  const name = ref("");
  const pending = ref(false);
  const phone = ref("");

  async function joinUs() {
    try {
      pending.value = true;
      // const res = await $fetch("/api/join", {
      //   method: "POST",
      //   body: { email: email.value, name: name.value, phone: phone.value },
      // });
      const res = await seamailer.contacts.createContact({
        email: email.value,
        firstName: name.value,
        lastName: "",
        phoneNumber: phone.value,
        customFields: {},
      });
      console.log("RESPONSE SEA", res);
      useToast().success("Success", "You have been added successfully");
    } catch (error: any) {
      console.log("Error", error);
      useToast().error(
        "Something went wrong",
        "Please check your details or contact support"
      );
    } finally {
      email.value = "";
      name.value = "";
      pending.value = false;
    }
  }

  return {
    email,
    name,
    pending,
    joinUs,
    phone,
  };
}
