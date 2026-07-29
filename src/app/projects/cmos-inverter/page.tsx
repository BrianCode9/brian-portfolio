import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";
import ProjectGallery from "@/components/ui/project-gallery";
import inverterImg from "../../../../public/images/projects/cmos-inverter.png";
import ivCharacteristicImg from "../../../../public/images/projects/cmos-iv-characteristic.png";
import logicOnlyImg from "../../../../public/images/projects/cmos-logic-only.png";
import clockedImg from "../../../../public/images/projects/clocked-cmos.png";

export const metadata = {
  title: "CMOS Inverter & Logic Circuit Design",
};

const project = {
  repoUrl: "",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      <NavBar />
      <div className="h-16" />
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">
            CMOS Inverter & Clocked CMOS Logic Circuit Design
          </h1>
          <div className="bg-orange-highlight h-1 w-16" />
        </header>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Overview</h2>
          <p className="text-base leading-relaxed text-gray-600">
            Final project for EE 251 (Digital Circuits) at West Virginia
            University. Designed a CMOS inverter and multi-input logic circuit.
            Simulated in LTSpice to study how transistor sizing affects voltage
            transfer curves and noise margins. The project progressed from a
            basic inverter to a fully optimized clocked CMOS circuit
            implementing A+BC.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>
              Simulated a CMOS inverter with a PMOS sizing of L = 10 µm and
              analyzed its voltage transfer curve and noise margins.
            </li>
            <li>
              Designed a CMOS logic circuit implementing the complement of A+BC
              using series/parallel NMOS and PMOS networks.
            </li>
            <li>
              Optimized transistor W/L ratios across multiple simulation runs to
              balance NMH and NML within a 0.15 V threshold.
            </li>
            <li>
              Extended the design into a clocked CMOS circuit with a precharge
              transistor, footer transistor, and output inverter.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Procedure</h2>
          <p className="text-base leading-relaxed text-gray-600">
            The proejct had three parts plus a bonus part. In the first part, a
            normal inverter circuit was created with an unoptmized W/L ratio.
            The noise margins were calculated by exporting the IV characteristic
            data from LTspice into Excel. To find the noise margins, the slope
            needs to be calculated, using Vin / Vout. After calculating the
            slope for each data point, slopes of -1 were found. These points
            indicated the VIH, VIL, VOH, and VOL Using these numbers you can get
            the NML and NMH with the equations, NMH = VOH - VIH and NML = VIL -
            VOL. This process was iterated on for each circuit to optimize the
            noise margins for the standard CMOS inverter, the logic circuit, and
            the clocked CMOS circuit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            {["LTSpice", "Excel"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <ProjectGallery
          images={[
            {
              src: inverterImg,
              alt: "CMOS inverter schematic",
              caption: "CMOS Inverter Schematic",
            },
            {
              src: ivCharacteristicImg,
              alt: "Inverter voltage transfer and IV characteristic curve",
              caption: "Inverter Voltage Transfer Characteristic",
            },
            {
              src: logicOnlyImg,
              alt: "Unclocked A+BC logic circuit schematic",
              caption: "Unclocked A+BC Logic Circuit",
            },
            {
              src: clockedImg,
              alt: "Clocked CMOS logic circuit schematic",
              caption: "Clocked CMOS Logic Circuit",
            },
          ]}
        />

        <footer className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                className="text-lg underline"
              >
                View repository
              </Link>
            )}
          </div>
          <Link href="/projects">
            <AnimatedButton variant="white">Back</AnimatedButton>
          </Link>
        </footer>
      </div>
    </main>
  );
}
