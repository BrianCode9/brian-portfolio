import Link from "next/link";
import NavBar from "@/components/section/navbar";
import AnimatedButton from "@/components/ui/animatedbutton";

export const metadata = {
    title: "CMOS Inverter & Logic Circuit Design",
};

export default function ProjectPage() {
    return (
        <main className="bg-white text-black w-full min-h-screen">
            <NavBar />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">
                        CMOS Inverter & Logic Circuit Design
                    </h1>
                    <div className="h-1 w-16 bg-orange-highlight" />
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">Overview</h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Final project for EE 251 at West Virginia University. A CMOS inverter and multi-input logic circuit were simulated in LTSpice to study how transistor sizing affects voltage transfer curves and noise margins. The project progressed from a basic inverter to a fully optimized clocked CMOS circuit implementing A+BC.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">What I Did</h2>
                    <ul className="list-disc list-inside text-base text-gray-600 space-y-2 leading-relaxed">
                        <li>Simulated a CMOS inverter with two PMOS sizings (W = 20 µm and 40 µm) and compared voltage transfer curves and noise margins.</li>
                        <li>Designed a CMOS logic circuit implementing the complement of A+BC using series/parallel NMOS and PMOS networks.</li>
                        <li>Optimized transistor W/L ratios across multiple simulation runs to balance NMH and NML within a 0.15 V threshold.</li>
                        <li>Extended the design into a clocked CMOS circuit with a precharge transistor, footer transistor, and output inverter.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">What I Learned</h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Transistor sizing directly controls switching symmetry. A PMOS that is too wide pulls the output high too strongly, shifting the transition point and widening the gap between NMH and NML. Iterating on W/L ratios through simulation is the practical method for balancing noise margins in multi-input logic circuits.
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
