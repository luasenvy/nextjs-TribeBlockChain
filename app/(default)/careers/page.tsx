"use client";

import { motion } from "framer-motion";

import Card from "@/components/Card";
import InteriorContent from "@/components/InteriorContent";
import InterierHero from "@/components/InteriorHero";
import { Tag } from "@/components/Tag";

import ViewTransitionLink from "@/components/ViewTransitionLink";
import positions from "@/lib/data/positions";
import { getColorFromPositionCategory, getColorFromPositionType } from "@/lib/util";

export default function CareerPage() {
  return (
    <>
      <InterierHero>
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Join the team
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
          We are hiring
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 max-w-xl mx-auto text-zinc-400">
          We are always looking for talented individuals passionate about building blockchain
          products that makes a difference
        </p>
      </InterierHero>

      <InteriorContent>
        <div className="flex flex-col gap-12">
          {positions.map(({ metadata: { title, type, description, category, remote } }, i) => (
            <motion.li
              key={`motion-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              <ViewTransitionLink href="/contact">
                <Card color={getColorFromPositionCategory(category)} buttonText="Apply now">
                  <div className="flex items-center gap-3">
                    {remote && <Tag>Remote</Tag>}
                    <Tag color={getColorFromPositionType(type)}>{type}</Tag>
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-black font-heading mt-6">
                    {title}
                  </h2>
                  <p className="text-lg md:text-xl text-zinc-400 mt-4">{description}</p>
                </Card>
              </ViewTransitionLink>
            </motion.li>
          ))}
        </div>
      </InteriorContent>
    </>
  );
}
