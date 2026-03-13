'use client'
import dynamic from "next/dynamic";

const TravelMap = dynamic(() => import("@/components/ui/TravelMap"), { ssr: false });
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import AnimatedLink from "@/components/ui/animatedlink";
import { SiGithub } from "react-icons/si";


export default function ProjectsPage() {
    return (
        <main>
            <nav className='w-full h-16 p-4 bg-slate-300 text-black border'>
                <div className='flex items-center justify-between'>
                    <div className='flex space-x-10 text-lg items-center'>
                        <AnimatedLink href="/">Home</AnimatedLink>
                        <AnimatedLink href="/projects">Projects</AnimatedLink>
                        <AnimatedLink href="#contact">Contact</AnimatedLink>
                        <AnimatedLink href="/brian_ngo_software.pdf" target='_blank' rel="noopener noreferrer">
                            Resume
                        </AnimatedLink>
                        <Link href="https://github.com/BrianCode9" target="_blank" rel="noopener noreferrer">
                            <SiGithub size={25} />
                        </Link>
                    </div>
                </div>
            </nav >
            {/* My Life Section */}
            <div className="bg-white">
                <div className="w-300 mx-auto p-8 text-black">
                    <div className='grid grid-cols-1 gap-y-12 text-xl'>
                        <div className="flex flex-row">
                            <img className="w-75 h-100 border-2 mt-1" src="cmu.JPG" alt="Profile" />
                            <div className="flex flex-col gap-y-8 ml-6">
                                <h1 className="text-6xl font-bold underline decoration-orange-highlight">My Start</h1>
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
            </div>

            {/* WVU Section */}
            <div className="bg-suit-teal">
                <div className="w-300 mx-auto p-8 text-white">
                    <div className='grid grid-cols-1 gap-y-12 text-xl'>
                        <h2 className="text-6xl font-bold underline decoration-orange-highlight">At WVU</h2>
                        <p>
                            At WVU, I have been able to continue creating cool projects in classes and outside of them.
                            My favorite project has been my CPE 271 Digital Logic project, where I built and simulated a CPU on a DE10-Lite FPGA board using VHDL.
                            I also travel to a few university hackathons each year to compete and build projects.
                            So far, I have participated and submitted projects at Georgetown University, the University of Delaware, OSU, UMD College Park, Pitt, and CMU.
                            Besides traveling for hackathons, I enjoy traveling in general and experiencing new places.
                            Here is a map of the places I have been. My favorite place I have visited has been Vietnam. Peep the map below to see some other places I've been to.
                        </p>
                        <p>
                            Other than competing at hackathons and working on projects. I also founded and am the President of the Software Development Club at WVU (SoftwareWVU), the Vice President of SASE (Society of Asian
                            Scientists and Engineers) and an IEEE member. Through SASE I was able to attend the Southwest Regional SASE Conference in Orlando, Florida.
                        </p>
                        <div className="flex justify-center">
                            <TravelMap />
                        </div>
                    </div>
                </div>
            </div>

            {/* Future Plans */}
            {/* <div className="bg-slate-300">
                <div className="w-300 mx-auto p-8 text-black">
                    <div className='grid grid-cols-1 gap-y-12 text-xl'>
                        <div className="flex flex-row">
                            <img className="w-75 h-100 border-2 mt-1" src="chillpic.jpeg" alt="Profile" />
                            <div className="flex flex-col gap-y-8 ml-6">
                                <h1 className="text-6xl font-bold underline decoration-orange-highlight">Future Plans</h1>
                                <p>
                                    My journey begins in Michigan, where I was able to learn Vietnamese as my first language.
                                    However, after five years my family moved to West Virginia, where I did most of my growing up.
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
                    <div className='flex justify-end pt-10'>
                        <a href="#">
                            <Button className='bg-orange-600 text-white'>Back Up</Button>
                        </a>
                    </div>
                </div>
            </div> */}

        </main>
    )
}
