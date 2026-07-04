import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

export const metadata = {
  title: "Simple 8-Bit CPU",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      <NavBar />
      <div className="h-16" />
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">
            Simple 8-Bit CPU
          </h1>
          <div className="bg-orange-highlight h-1 w-16" />
        </header>

        <section className="mb-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded border-2 border-gray-300">
              <Image
                src="/images/projects/cpu-diagram.png"
                alt="CPU block diagram"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded border-2 border-gray-300">
              <Image
                src="/images/projects/finite-state-machine.jpeg"
                alt="Control unit finite state machine"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded border-2 border-gray-300">
              <Image
                src="/images/projects/cpu-wave-simulation.png"
                alt="Quartus waveform simulation"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Overview</h2>
          <p className="text-base leading-relaxed text-gray-600">
            Final project for my digital logic lab (CPE 271L) at West Virginia
            University. An 8-bit CPU was designed in VHDL and implemented on a DE-10 Lite FPGA. The processor supports
            three instructions — load, add, and store — and executes them
            through a multi-state fetch-decode-execute cycle driven by a state
            machine Control Unit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>
              Wrote individual VHDL modules for the ALU, Program Counter,
              Instruction Register, Control Unit, two-to-one MUX, RAM, and
              registers.
            </li>
            <li>
              Implemented a state machine Control Unit that decodes a 3-bit
              opcode and sequences all control signals through each instruction
              cycle.
            </li>
            <li>
              Connected all components in a top-level CPU file using port map
              statements and internal signal wiring.
            </li>
            <li>
              Verified correct operation by running a test program through RAM
              and checking accumulator values at each instruction step.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            How It Works
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Building the CPU component by component made it clear how critical
            signal routing and timing are — one missing state transition in the
            Control Unit was enough to stall the entire processor. Debugging
            waveforms in Quartus also reinforced the importance of correct clock
            generation and signal width matching when integrating multiple
            hardware modules.
          </p>
        </section>

        <footer className="mt-12 flex justify-end">
          <Link href="/projects">
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </footer>
      </div>
    </main>
  );
}
