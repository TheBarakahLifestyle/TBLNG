import { TSGhostAdminAPI } from "@ts-ghost/admin-api";

export default defineEventHandler(async (event) => {
  const { email, name, phone } = await readBody(event);
  const api = new TSGhostAdminAPI(
    "https://the-barakah-lifestyle-ng.ghost.io",
    "66f4ee27174b7a0001b91a16:84d44023970fdf76ef98d74a30855edb7954bbbe7e96dcb1a08ab7e06c2f1471",
    "v5.0"
  );

  const res = await api.members.add({
    email: email,
    name: name,
    note: phone,
  });
  return res;
});
