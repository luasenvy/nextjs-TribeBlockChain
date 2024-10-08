"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

import Card from "@/components/Card";
import { CutCornerButton } from "@/components/CutCornerButton";
import { Tag } from "@/components/Tag";
import { latests } from "@/lib/data/posts";
import { getPostColorFromCategory } from "@/lib/util";

export const LatestPosts = () => {
  // We use Ref to see what position the specific div is in
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="py-60"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your portal to everything BlockChain
          </h2>
          <p className="text-xl lg:2xl text-center text-zinc-400 mt-8">
            Keep up with the newest trends, updates and insights in the BlockChain world, updated
            weekly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-28">
          <div className="flex flex-col gap-8">
            {latests.map(({ metadata: { title, description, category } }, postIndex) => (
              <Card
                key={postIndex}
                color={getPostColorFromCategory(category)}
                buttonText="Read More"
                className={twMerge((postIndex === 1 || postIndex === 3) && "md:hidden")}
              >
                <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                <p className="text-lg text-zinc-400 mt-6">{description}</p>
              </Card>
            ))}
          </div>

          <motion.div
            className="hidden md:flex flex-col gap-8 mt-16"
            style={{
              marginTop,
            }}
            ref={targetRef}
          >
            {latests.map(({ metadata: { title, description, category } }, postIndex) => (
              <Card
                key={postIndex}
                color={getPostColorFromCategory(category)}
                buttonText="Read More"
                className={twMerge((postIndex === 0 || postIndex === 2) && "md:hidden")}
              >
                <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                <p className="text-lg text-zinc-400 mt-6">{description}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </motion.section>
  );
};
