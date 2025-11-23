import Banner from "@/components/LandingPageComponents/banner/Banner";
import PopulerCourse from "@/components/LandingPageComponents/PopulerCourse/PopulerCourse";
import WhyLearn from "@/components/LandingPageComponents/WhyLearnSection/WhyLearn";

export default function Home() {
  return (
    <div className=" bg-zinc-50">
      <Banner />
      <WhyLearn />
      <PopulerCourse />
    </div>
  );
}
