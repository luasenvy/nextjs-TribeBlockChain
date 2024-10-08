import { CallToActionSection } from "@/components/sections/CallToAction";
import { FooterSection } from "@/components/sections/Footer";
import { HeaderSection } from "@/components/sections/Header";
import { Testimonials } from "@/components/sections/Testimonials";

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <HeaderSection />
      {children}
      <Testimonials />
      <CallToActionSection />
      <FooterSection />
    </>
  );
}
