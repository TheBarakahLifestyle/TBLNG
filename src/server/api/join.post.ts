import { TSGhostAdminAPI } from "@ts-ghost/admin-api";
import GhostAdminAPI from "@tryghost/admin-api";

export default defineEventHandler(async (event) => {
  const { email, name } = await readBody(event);
  const api = new TSGhostAdminAPI(
    "https://the-barakah-lifestyle-ng.ghost.io",
    "66f4ee27174b7a0001b91a16:84d44023970fdf76ef98d74a30855edb7954bbbe7e96dcb1a08ab7e06c2f1471",
    "v5.0"
  );
  const api2 = new GhostAdminAPI({
    url: "https://the-barakah-lifestyle-ng.ghost.io",
    key: "66f4ee27174b7a0001b91a16:84d44023970fdf76ef98d74a30855edb7954bbbe7e96dcb1a08ab7e06c2f1471",
    version: "v5.0",
  });

  const res = await api.members.add({
    email: email,
    name: name,
  });
  return res;
});
