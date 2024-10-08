import Post04, { metadata as metadata04 } from "./frontend-developer/index.mdx";
import Post03, { metadata as metadata03 } from "./marketing-specialist/index.mdx";
import Post02, { metadata as metadata02 } from "./product-manager/index.mdx";
import Post01, { metadata as metadata01 } from "./ux-designer/index.mdx";

const positions = [
  { Component: Post01, metadata: metadata01 },
  { Component: Post02, metadata: metadata02 },
  { Component: Post03, metadata: metadata03 },
  { Component: Post04, metadata: metadata04 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .sort(
    ({ metadata: { pubDate: a } }, { metadata: { pubDate: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type PostItem = (typeof positions)[number];

export const positionsByYear: Map<number, Array<PostItem>> = positions.reduce((map, post) => {
  const year = new Date(post.metadata.pubDate).getFullYear();
  return map.set(year, (map.get(year) ?? []).concat(post));
}, new Map<number, Array<PostItem>>());

export const positionsBySlug: Map<string, PostItem> = positions.reduce(
  (map, post) => map.set(post.metadata.slug, post),
  new Map()
);

export const categories = Array.from(
  new Set(positions.flatMap(({ metadata: { category } }) => category))
);

export const latests = positions.toReversed().slice(0, 4);

export default positions;
