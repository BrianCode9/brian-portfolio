import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../ui/animatedbutton";

const AboutSection = () => {
  return (
    <div className="bg-white pt-10 md:pt-20">
      <div className="bg-[#0a1f2b] py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-8 md:px-16">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
            <div className="flex flex-1 flex-col gap-5">
              <div>
                <div className="mb-2 text-3xl font-bold text-white md:text-4xl">
                  About Me
                </div>
                <div className="bg-orange-highlight h-1 w-12" />
              </div>
              <div className="space-y-4 text-lg text-white md:text-xl">
                <p>
                  I&apos;m a computer and electrical engineering dual degree
                  student at West Virginia University. Right now I&apos;m a
                  Software Engineer Intern at WVU&apos;s Cyber-Resilience
                  Resource Center, building a cybersecurity compliance platform,
                  and I TA the digital logic lab. In my free time, I enjoy
                  starting projects, cooking, and traveling.
                </p>
              </div>
              <div>
                <Link href={"/about"}>
                  <AnimatedButton variant="teal">More</AnimatedButton>
                </Link>
              </div>
            </div>
            <div className="flex shrink-0 justify-center">
              <div className="relative h-56 w-56 overflow-hidden rounded-full md:h-80 md:w-80 lg:h-90 lg:w-90">
                <Image
                  src="/images/profile/NgoBucklews.jpg"
                  alt="Profile"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
