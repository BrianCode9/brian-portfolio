'use client'
import dynamic from "next/dynamic";
import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

const TravelMap = dynamic(() => import("@/components/ui/TravelMap"), { ssr: false });

export default function AboutPage() {
    return (
        <main>
            <NavBar />

            {/* My Start Section */}
            <div className="bg-white">
                <div className="max-w-5xl w-full mx-auto px-6 py-10 text-black">
                    <div className='flex flex-col md:flex-row gap-6 md:gap-10 text-lg md:text-xl'>
                        <img
                            className="w-full md:w-56 lg:w-72 h-auto object-cover border-2 self-start"
                            src="/images/profile/cmu.JPG"
                            alt="Profile"
                        />
                        <div className="flex flex-col gap-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                                My Start
                            </h1>
                            <div className="h-1 w-16 bg-orange-highlight mb-2" />
                            <p>
                                My story starts in Michigan where I was born. There I learned how to walk and speak my first language (Vietnamese).
                                After about five years my family and I moved to West Virginia, where I did most of my growing up.
                                I went to Notre Dame High School in Clarksburg, where I participated in a ton of sports and clubs.
                                My favorite sport was swimming, and now I am able to share that interest as a coach.
                            </p>
                            <p>
                                High school is also where I got my start with engineering/computer science.
                                During my junior year, I started to teach myself coding, beginning with Python after watching a few YouTube videos about engineering.
                                One of my first projects was recreating Pong using the Pygame library.
                                After learning the basics of Python, I decided to move on and take an online computer science class, AP CSA, which gave me a foundation in Java.
                                My positive experience with the subject led me to major in engineering, specifically Electrical and Computer Engineering at WVU.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* WVU Section */}
            <div className="bg-suit-teal">
                <div className="max-w-5xl w-full mx-auto px-6 py-10 text-white">
                    <div className='flex flex-col gap-6 text-lg md:text-xl'>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                            At WVU
                        </h2>
                        <div className="h-1 w-16 bg-orange-highlight mb-2" />
                        <p>
                            At WVU, I have been able to continue creating cool projects in classes and outside of them.
                            My favorite project has been my CPE 271 Digital Logic project, where I built and simulated a CPU on a DE10-Lite FPGA board using VHDL.
                            I also travel to a few university hackathons each year to compete and build projects.
                            So far, I have participated and submitted projects at Georgetown University, the University of Delaware, OSU, UMD College Park, Pitt, and CMU.
                            Besides traveling for hackathons, I enjoy traveling in general and experiencing new places.
                            Peep the map below to see some places I've been to.
                        </p>
                        <p>
                            Other than competing at hackathons and working on projects, I'm also the President of the Software Development
                            Club at WVU (SoftwareWVU), the Vice President of SASE (Society of Asian Scientists and Engineers) and a Statler Ambassador. My future plans
                            include going to graduate school for electrical engineering and working towards becoming a hardware engineer.
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-6xl mx-auto px-6 pb-6">
                    <TravelMap />
                </div>
                <div className="flex justify-center pb-12">
                    <Link href="/experiences">
                        <AnimatedButton variant="teal">Curious about my travels? Go deeper.</AnimatedButton>
                    </Link>
                </div>
            </div>
        </main>
    );
}
