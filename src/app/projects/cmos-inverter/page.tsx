import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

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
            CMOS Inverter & Logic Circuit Design
          </h1>
          <div className="bg-orange-highlight h-1 w-16" />
        </header>

        <section className="mb-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded border border-gray-200">
              <Image
                src="/images/projects/cmos-inverter.png"
                alt="CMOS inverter schematic"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded border border-gray-200">
              <Image
                src="/images/projects/cmos-logic-only.png"
                alt="Unclocked A+BC logic circuit schematic"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded border border-gray-200">
              <Image
                src="/images/projects/clocked-cmos.png"
                alt="Clocked CMOS logic circuit schematic"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded border border-gray-200">
              <Image
                src="/images/projects/cmos-iv-characteristic.png"
                alt="Inverter voltage transfer and IV characteristic curve"
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
            Final project for EE 251 at West Virginia University. A CMOS
            inverter and multi-input logic circuit were simulated in LTSpice to
            study how transistor sizing affects voltage transfer curves and
            noise margins. The project progressed from a basic inverter to a
            fully optimized clocked CMOS circuit implementing A+BC.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            What I Did
          </h2>
          <ul className="list-inside list-disc space-y-2 text-base leading-relaxed text-gray-600">
            <li>
              Simulated a CMOS inverter with two PMOS sizings (W = 20 µm and 40
              µm) and compared voltage transfer curves and noise margins.
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
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
            How It Works
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            Transistor sizing directly controls switching symmetry. A PMOS that
            is too wide pulls the output high too strongly, shifting the
            transition point and widening the gap between NMH and NML. Iterating
            on W/L ratios through simulation is the practical method for
            balancing noise margins in multi-input logic circuits.
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
