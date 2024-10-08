import Post10, { metadata as metadata10 } from "./blockchain-in-healthcare-new-frontier/index.mdx";
import Post09, {
  metadata as metadata09,
} from "./blockchain-interoperability-connecting-networks/index.mdx";
import Post08, {
  metadata as metadata08,
} from "./blockchain-role-decentralized-finance-defi/index.mdx";
import Post07, {
  metadata as metadata07,
} from "./blockchain-scalability-challenges-solutions/index.mdx";
import Post06, {
  metadata as metadata06,
} from "./blockchain-security-protecting-digital-assets/index.mdx";
import Post05, { metadata as metadata05 } from "./environmental-impact-of-blockchain/index.mdx";
import Post04, { metadata as metadata04 } from "./how-nfts-changing-digital-ownership/index.mdx";
import Post03, {
  metadata as metadata03,
} from "./regulatory-challenges-facing-blockchain/index.mdx";
import Post02, {
  metadata as metadata02,
} from "./smart-contracts-future-legal-agreements/index.mdx";
import Post01, {
  metadata as metadata01,
} from "./tokenomics-understanding-blockchain-economics/index.mdx";

const posts = [
  { Component: Post01, metadata: metadata01 },
  { Component: Post02, metadata: metadata02 },
  { Component: Post03, metadata: metadata03 },
  { Component: Post04, metadata: metadata04 },
  { Component: Post05, metadata: metadata05 },
  { Component: Post06, metadata: metadata06 },
  { Component: Post07, metadata: metadata07 },
  { Component: Post08, metadata: metadata08 },
  { Component: Post09, metadata: metadata09 },
  { Component: Post10, metadata: metadata10 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .sort(
    ({ metadata: { pubDate: a } }, { metadata: { pubDate: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type PostItem = (typeof posts)[number];

export const postsByYear: Map<number, Array<PostItem>> = posts.reduce((map, post) => {
  const year = new Date(post.metadata.pubDate).getFullYear();
  return map.set(year, (map.get(year) ?? []).concat(post));
}, new Map<number, Array<PostItem>>());

export const postsBySlug: Map<string, PostItem> = posts.reduce(
  (map, post) => map.set(post.metadata.slug, post),
  new Map()
);

export const categories = Array.from(
  new Set(posts.flatMap(({ metadata: { category } }) => category))
);

export const latests = posts.toReversed().slice(0, 4);

export default posts;
