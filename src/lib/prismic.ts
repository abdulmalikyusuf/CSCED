import * as prismic from "@prismicio/client";

export const client = prismic.createClient("csced-nigeria", {
  accessToken: import.meta.env.VITE_PRISMIC_CUSTOM_TYPES_BEARER_TOKEN,
});
