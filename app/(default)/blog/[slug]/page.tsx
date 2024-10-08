"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";

import InteriorContent from "@/components/InteriorContent";
import InterierHero from "@/components/InteriorHero";
import { Tag } from "@/components/Tag";
import posts from "@/lib/data/posts";

import { getPostColorFromCategory } from "@/lib/util";

export default function PostViewer() {
  const { slug } = useParams();

  const post = posts.find(({ metadata }) => slug === metadata.slug);

  return (
    post && (
      <>
        <InterierHero>
          <div className="relative">
            <div className="flex justify-center">
              <Tag color={getPostColorFromCategory(post.metadata.category)}>
                {post.metadata.category}
              </Tag>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
              {post.metadata.title}
            </h1>
            <p className="text-center text-xl mt-8 text-zinc-400 max-w-2xl mx-auto">
              {post.metadata.description}
            </p>
            <div className="flex flex-col items-center mt-8">
              <div className="size-16 rounded-full bg-zinc-700 bg-cover bg-center"></div>
              <div className="font-extrabold text-lg mt-3">{post.metadata.author.name}</div>
              <div className="text-zinc-500">{post.metadata.author.title}</div>
            </div>
          </div>
        </InterierHero>

        <InteriorContent>
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.32 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <div className="prose prose-invert prose-lg prose-zinc prose-headings:font-heading prose-headings:font-black prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:lg:text-5xl mx-auto prose-h3:text-2xl prose-h3:md:text-3xl  prose-h3:lg:text-4xl">
              {post?.Component && <post.Component />}
            </div>
          </motion.div>
        </InteriorContent>
      </>
    )
  );
}
