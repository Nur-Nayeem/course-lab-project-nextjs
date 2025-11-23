import Banner from "@/components/LandingPageComponents/banner/Banner";
import WhyLearn from "@/components/LandingPageComponents/WhyLearnSection/WhyLearn";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-zinc-50">
      <Banner />
      <WhyLearn />
    </div>
  );
}
