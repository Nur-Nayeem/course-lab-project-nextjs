import Banner from "@/components/LandingPageComponents/banner/Banner";
import CtaBanner from "@/components/LandingPageComponents/CTABanner/CtaBanner";
import PopulerCourse from "@/components/LandingPageComponents/PopulerCourse/PopulerCourse";
import Testimonials from "@/components/LandingPageComponents/Testimonials/Testimonials";
import WhyLearn from "@/components/LandingPageComponents/WhyLearnSection/WhyLearn";

export default function Home() {
  return (
    <div className=" bg-zinc-50">
      <Banner />
      <div className="px-2.5 sm:px-0">
        <WhyLearn />
        <PopulerCourse />
        <Testimonials />
        <CtaBanner />
      </div>
    </div>
  );
}
