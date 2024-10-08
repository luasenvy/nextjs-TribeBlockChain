declare module "*.mdx" {
  import type { Element, MDXProps } from "mdx/types";

  interface AuthorItem {
    name: string;
    title: string;
    image: string;
  }

  interface Frontmatter {
    slug: string;
    title: string;
    description: string;
    category: string;
    pubDate: string;
    author: AuthorItem;
    draft: boolean;
    featured: boolean;

    remote: string;
    type: string;
  }

  function MDXContent(props: MDXProps): Element;
  const metadata: Frontmatter;

  export { metadata, MDXContent as default };
}
