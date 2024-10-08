import { FeaturesCards } from "@/components/sections/FeaturesCards";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { HeroSection } from "@/components/sections/Hero";
import { LatestPosts } from "@/components/sections/LatestPosts";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesCards />
      <FeaturesGrid />
      <LatestPosts />
    </>
  );
}
