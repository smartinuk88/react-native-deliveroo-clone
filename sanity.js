import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { REACT_APP_SANITY_PROJECTID, REACT_APP_SANITY_DATASET } from "@env";

const client = SanityClient({
  projectId: REACT_APP_SANITY_PROJECTID,
  dataset: REACT_APP_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
