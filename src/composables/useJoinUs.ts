import { TSGhostAdminAPI } from "@ts-ghost/admin-api";

export function useJoinUs() {
  const api = new TSGhostAdminAPI(
    "https://the-barakah-lifestyle-ng.ghost.io",
    "66f4ee27174b7a0001b91a16:84d44023970fdf76ef98d74a30855edb7954bbbe7e96dcb1a08ab7e06c2f1471",
    "v5.0"
  );

  const email = ref("");
  const name = ref("");
  const pending = ref(false);

  // const { data, execute, status } = await useFetch("/api/join", {
  //   method: "POST",
  //   immediate: false,
  //   body: {
  //     email: "jimohsodiq301@gmail.com",
  //     name: "Jimoh Sodiq"
  //   }
  // })

  async function joinUs() {
    try {
      pending.value = true;
      // const res = await api.members.add({ email: email.value });
      const res = await $fetch("/api/join", {
        method: "POST",
        body: { email: email.value, name: name.value },
      });
      if (res.success) {
        useToast().success("Success", "You have been added successfully");
      } else {
        const errors = res.errors.map((e) => e.context ?? e.message).join("\n");
        useToast().error("Something went wrong", errors);
      }
    } catch (error) {
      console.log("ERROR", error);
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
  };
}
