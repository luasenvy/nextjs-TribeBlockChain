"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import AvatarEricaWyatt from "@/public/assets/images/avatar-erica-wyatt.jpg";
import AvatarHarryBender from "@/public/assets/images/avatar-harry-bender.jpg";
import AvatarNoelBaldwin from "@/public/assets/images/avatar-noel-baldwin.jpg";

const testimonials = [
  {
    text: "The user team is very supportive and they are always there to help. Amazing UI and design.",
    name: "Erica Johnson",
    title: "Product Manager - BlockLink",
    avatarImage: AvatarEricaWyatt,
  },
  {
    text: "Our productivity and performance has increased a lot since we started using BlockForge.",
    name: "Noel Baldwind",
    title: "Lead Developer - Dowski Inc",
    avatarImage: AvatarNoelBaldwin,
  },
  {
    text: "High quality process integration, with the performance improving our own platofrom.",
    name: "Harry Bender",
    title: "CTO - CryptoPepe",
    avatarImage: AvatarHarryBender,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial, testimonialIndex) => (
            <motion.blockquote
              key={testimonialIndex}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: testimonialIndex * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              className={twMerge(testimonialIndex === 2 && "md:hidden lg:block")}
            >
              <p className="font-heading text-3xl lg:text-4xl font-black">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{ backgroundImage: `url(${testimonial.avatarImage.src})` }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">{testimonial.name}</div>
                    <div className="text-zinc-400 not-italic">{testimonial.title}</div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
