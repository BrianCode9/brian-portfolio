import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

export const metadata = {
    title: "Simple 8-Bit CPU",
};

export default function ProjectPage() {
    return (
        <main className="bg-white text-black w-full min-h-screen">
            <NavBar />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">
                        Simple 8-Bit CPU
                    </h1>
                    <div className="h-1 w-16 bg-orange-highlight" />
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">Overview</h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Final project for CPE 271L at West Virginia University, completed with Connor Cahill. An 8-bit CPU was designed in VHDL and implemented on a DE-10 Lite FPGA. The processor supports three instructions — load, add, and store — and executes them through a multi-state fetch-decode-execute cycle driven by a state machine Control Unit.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">What I Did</h2>
                    <ul className="list-disc list-inside text-base text-gray-600 space-y-2 leading-relaxed">
                        <li>Wrote individual VHDL modules for the ALU, Program Counter, Instruction Register, Control Unit, two-to-one MUX, RAM, and registers.</li>
                        <li>Implemented a state machine Control Unit that decodes a 3-bit opcode and sequences all control signals through each instruction cycle.</li>
                        <li>Connected all components in a top-level CPU file using port map statements and internal signal wiring.</li>
                        <li>Verified correct operation by running a test program through RAM and checking accumulator values at each instruction step.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">What I Learned</h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Building the CPU component by component made it clear how critical signal routing and timing are — one missing state transition in the Control Unit was enough to stall the entire processor. Debugging waveforms in Quartus also reinforced the importance of correct clock generation and signal width matching when integrating multiple hardware modules.
                    </p>
                </section>

                <footer className="flex justify-end mt-12">
                    <Link href="/projects">
                        <AnimatedButton variant="white">Back</AnimatedButton>
                    </Link>
                </footer>
            </div>
        </main>
    );
}
