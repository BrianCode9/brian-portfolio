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
            University. Starting from a provided VHDL template with the ALU,
            RAM, MUX, and registers already built, I completed the Program
            Counter, designed the Control Unit, and wired everything together
            into a working 8-bit CPU on a DE10-Lite FPGA. The finished processor
            supports three instructions (load, add, and store) and executes them
            through a multi-state fetch, decode, and execute cycle driven
            entirely by the clock signal.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>
              Implemented the Program Counter&apos;s increment logic in VHDL
              using a variable and the := assignment operator.
            </li>
            <li>
              Diagrammed the full CPU datapath, labeling every connection with
              the signal names used in the VHDL (cuToMarLoad, pcToMarMux, irOut,
              marToRamReadAddr, and others).
            </li>
            <li>
              Wrote out the STOREA sequence in plain English, then mapped the
              Fetch, LOADA, ADDA, and STOREA sequences to enumerated states in
              the Control Unit&apos;s finite state machine.
            </li>
            <li>
              Transcribed the finite state machine into VHDL case statements,
              defining which control signals go high or low and which ALU opcode
              is active at each state.
            </li>
            <li>
              Instantiated and connected every component in a top-level entity
              through port mapping, following the CPU diagram.
            </li>
            <li>
              Verified correct operation in the Quartus waveform simulator,
              confirming the clk, aOut, irOut, pcOut, and increment signals as
              the CPU ran entirely off the clock with no external inputs.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            How It Works
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Building the Control Unit component by component made it clear how
            critical signal routing and timing are: one missing state transition
            was enough to stall the entire processor. Debugging waveforms in
            Quartus also reinforced the importance of correct clock generation
            and signal width matching when integrating multiple hardware
            modules.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Quartus Prime Lite", "DE10-Lite", "VHDL"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
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
