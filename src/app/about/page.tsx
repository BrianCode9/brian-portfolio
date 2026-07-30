"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import NavBar from "@/components/section/navbar";

const TravelMap = dynamic(() => import("@/components/ui/TravelMap"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <main>
      <NavBar />
      <div className="h-16" />

      {/* My Start Section */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 py-10 text-black">
          <div className="flex flex-col gap-6 text-lg md:flex-row md:gap-10 md:text-xl">
            <Image
              className="h-auto w-full self-start border-2 object-cover md:w-56 lg:w-72"
              src="/images/profile/cmu.JPG"
              alt="Profile"
              width={4032}
              height={3024}
            />
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
                  My Start
                </h1>
                <div className="bg-orange-highlight h-1 w-16" />
              </div>
              <p>
                My story starts in Michigan where I was born. There I learned
                how to walk and speak my first language (Vietnamese). After
                about five years my family and I moved to West Virginia, where I
                did most of my growing up. I went to Notre Dame High School in
                Clarksburg, where I participated in a ton of sports and clubs.
                My favorite sport was swimming, and now I am able to share that
                interest as a coach.
              </p>
              <p>
                High school is also where I got my start with
                engineering/computer science. During my junior year, I started
                to teach myself coding, beginning with Python after watching a
                few YouTube videos about engineering. One of my first projects
                was recreating Pong using the Pygame library. After learning the
                basics of Python, I decided to move on and take an online
                computer science class, AP CSA, which gave me a foundation in
                Java. My positive experience with the subject led me to major in
                engineering, specifically Electrical and Computer Engineering at
                WVU.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WVU Section */}
      <div className="bg-suit-teal">
        <div className="mx-auto w-full max-w-5xl px-6 py-10 text-white">
          <div className="flex flex-col gap-6 text-lg md:text-xl">
            <div>
              <h2 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
                At WVU
              </h2>
              <div className="bg-orange-highlight h-1 w-16" />
            </div>
            <p>
              At WVU, I have been able to continue creating cool projects in
              classes and outside of them. My favorite project has been my CPE
              271 Digital Logic project, where I built and simulated a CPU on a
              DE10-Lite FPGA board using VHDL. I also travel to a few university
              hackathons each year to compete and build projects. So far, I have
              participated and submitted projects at Georgetown University, the
              University of Delaware, OSU, UMD College Park, Pitt, and CMU.
              Besides traveling for hackathons, I enjoy traveling in general and
              experiencing new places. Peep the map below to see some places
              I&apos;ve been to.
            </p>
            <p>
              Other than competing at hackathons and working on projects,
              I&apos;m also the President of the Software Development Club at
              WVU (SoftwareWVU), the Vice President of SASE (Society of Asian
              Scientists and Engineers) and a Statler Ambassador. My future
              plans include going to graduate school for electrical engineering
              and working towards becoming a hardware engineer.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-6xl px-6 pb-12">
          <TravelMap />
        </div>
      </div>
    </main>
  );
}
