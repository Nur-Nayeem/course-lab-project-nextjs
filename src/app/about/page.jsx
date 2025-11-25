import CoreValues from "@/components/aboutComponents/CoreValues";
import Mission from "@/components/aboutComponents/Mission";
import TeamSection from "@/components/aboutComponents/TeamSection";
import CtaBanner from "@/components/LandingPageComponents/CTABanner/CtaBanner";

const AboutPage = () => {
  return (
    <div className="px-2.5 sm:px-8 lg:px-10 py-5">
      <div className="container flex flex-col flex-1 mx-auto">
        {/* About Section Hero */}
        <div className="w-full">
          <div className="flex min-h-[400px] flex-col gap-6 items-center justify-center p-8 rounded-lg text-center mt-20">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1 className="text-4xl font-black sm:text-5xl">
                About CourseHub
              </h1>
              <h2 className="text-base font-normal text-slate-600 sm:text-lg">
                We are dedicated to providing accessible, high-quality education
                for everyone, everywhere. Discover our story and the passionate
                team behind our mission.
              </h2>
            </div>
          </div>
        </div>

        <div className="py-12 sm:py-16 space-y-12 sm:space-y-16">
          <Mission />

          <CoreValues />

          <TeamSection />

          <CtaBanner buttonText={"Exlplore Course"} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
