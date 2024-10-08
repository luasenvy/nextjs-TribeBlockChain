"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import Card from "@/components/Card";
import { CutCornerButton } from "@/components/CutCornerButton";
import { Hexagon } from "@/components/Hexagon";
import { Tag } from "@/components/Tag";

import ViewTransitionLink from "@/components/ViewTransitionLink";
import posts, { latests } from "@/lib/data/posts";
import { getPostColorFromCategory } from "@/lib/util";

const [latestPost] = latests;

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.32 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="py-60 relative overflow-x-clip"
      >
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <Hexagon size={800} duration={30} />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <Hexagon size={1200} duration={50} reverse />
        </div>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="font-extrabold text-center uppercase text-zinc-500 tracking-wider">
              Latest Post
            </p>
            <h1 className="font-heading font-black text-5xl lg:text-7xl md:text-6xl text-center mt-4">
              {latestPost.metadata.title}
            </h1>
            <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
              {latestPost.metadata.description}
            </p>
            <div className="flex justify-center mt-10">
              <ViewTransitionLink href={`/blog/${latestPost.metadata.slug}`}>
                <CutCornerButton>Read More</CutCornerButton>
              </ViewTransitionLink>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Post Section */}
      <section className="py-32 bg-zinc-900/30 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="flex flex-col gap-8 lg:gap-12">
              {posts.map(({ metadata: { category, title, description, slug } }, postIndex) => (
                <motion.li
                  key={`motion-a-${postIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.32 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                  className={twMerge(postIndex % 2 === 0 ? "" : "block md:hidden")}
                >
                  <ViewTransitionLink href={`/blog/${slug}`}>
                    <Card buttonText="Read More" color={getPostColorFromCategory(category)}>
                      <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                      <h2 className="font-heading font-black text-3xl mt-4">{title}</h2>
                      <p className="text-lg mt-6 text-zinc-400">{description}</p>
                    </Card>
                  </ViewTransitionLink>
                </motion.li>
              ))}
            </ul>
            <ul className="hidden md:flex flex-col gap-8 lg:gap-12 mt-24 ">
              {posts.map(({ metadata: { category, title, description, slug } }, postIndex) => (
                <motion.li
                  key={`motion-b-${postIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.32 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                  className={twMerge(postIndex % 2 === 0 ? "hidden" : "")}
                >
                  <ViewTransitionLink href={`/blog/${slug}`}>
                    <Card buttonText="Read More" color={getPostColorFromCategory(category)}>
                      <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                      <h2 className="font-heading font-black text-3xl mt-4">{title}</h2>
                      <p className="text-lg mt-6 text-zinc-400">{description}</p>
                    </Card>
                  </ViewTransitionLink>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
