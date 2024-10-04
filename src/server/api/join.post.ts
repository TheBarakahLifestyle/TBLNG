import { TSGhostAdminAPI } from "@ts-ghost/admin-api";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();

  const { email, name, phone } = await readBody(event);
  const api = new TSGhostAdminAPI(
    "https://the-barakah-lifestyle-ng.ghost.io",
    runtimeConfig.ghostAdminKey,
    "v5.0"
  );

  const res = await api.members.add({
    email: email,
    name: name,
    note: phone,
  });
  return res;
});
