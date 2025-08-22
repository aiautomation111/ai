import Articals from "@/components/web/pages/articals";
import ConterSection from "@/components/web/pages/counter";
import HeroSection from "@/components/web/pages/HeroSection";
import LogoCloud from "@/components/web/pages/logocloud";
import NewsLatter from "@/components/web/pages/newslatter";
import OurServices from "@/components/web/pages/ourServices";
import OurTeme from "@/components/web/pages/ourTeme";
import OurWork from "@/components/web/pages/ourwork";
import QA from "@/components/web/pages/q&a";
import Testimonial from "@/components/web/pages/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <LogoCloud />
      <ConterSection/>
      <OurServices/>
      <OurWork/>
      <OurTeme/>
      <Testimonial/>
      <QA/>
      <Articals/>
      <NewsLatter/>
    </div>
  );
}
