import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";

import assemblyImg from "@/public/media/2026-season/Export sequence.00_00_38_09.Still008.jpg";
import drillingImg from "@/public/media/2026-season/Export sequence.00_00_45_18.Still009.jpg";
import wiringImg from "@/public/media/2026-season/Export sequence.00_00_59_06.Still011.jpg";

export const metadata: Metadata = {
    title: "Engineering Workshops - Rōnin Robotics (FRC Team 7447)",
    description:
        "Free, student-led programming, electrical, mechanical, and CAD workshops for students of all experience levels from Rōnin Robotics.",
    keywords: [
        "engineering workshops",
        "student engineering",
        "robotics workshops",
        "programming workshops",
        "CAD workshops",
        "Rōnin Robotics",
        "FRC Team 7447",
        "Portola High School",
    ],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        title: "Rōnin Engineering Workshops",
        description:
            "Free, student-led engineering workshops in programming, electrical systems, mechanical fabrication, and CAD.",
        url: "https://7447.team/workshops",
        siteName: "Rōnin Robotics: FRC Team 7447",
    },
    metadataBase: new URL("https://7447.team"),
};

const impactStats = [
    {
        value: "Since 2025",
        label: "Student-led engineering education",
    },
    {
        value: "90+",
        label: "Instructional sessions during 2025-26",
    },
    {
        value: "55+",
        label: "Active participants served",
    },
    {
        value: "85%+",
        label: "Students reported little or no prior engineering experience",
    },
];

const programs = [
    {
        number: "01",
        title: "Programming",
        description:
            "Java fundamentals, robot control, PID, swerve-drive programming, and autonomous routines",
        accent: "bg-sky-400",
    },
    {
        number: "02",
        title: "Electrical",
        description: "Robot wiring and CAN bus communication",
        accent: "bg-orange-500",
    },
    {
        number: "03",
        title: "Mechanical",
        description: "Basic tool use, fabrication, and CNC machining",
        accent: "bg-amber-300",
    },
    {
        number: "04",
        title: "CAD",
        description:
            "3D modeling and mechanical design using Autodesk Fusion",
        accent: "bg-blue-600",
    },
];

const faqs = [
    {
        question: "What subjects do the workshops cover?",
        answer: "Workshops cover programming, electrical systems, mechanical fabrication, and CAD at both introductory and advanced levels.",
    },
    {
        question: "Who teaches the workshops?",
        answer: "Sessions are led by experienced Rōnin Robotics members who have worked directly on the team’s competition robot. Instructors share practical skills through demonstrations, guided exercises, and hands-on activities.",
    },
    {
        question: "Are the workshops free?",
        answer: "Yes. Rōnin Engineering Workshops are offered at no cost to participants.",
    },
    {
        question: "Do I have to attend every session?",
        answer: "No. Participants may attend the sessions that match their interests and experience levels. However, attending consistently is recommended because many workshops build on skills introduced in earlier sessions.",
    },
    {
        question: "Are workshops offered in person or online?",
        answer: "Workshops are primarily held in person during the school year. Virtual sessions may also be offered during the summer to make the program accessible to students who cannot attend on campus.",
    },
    {
        question: "Do I need to bring equipment?",
        answer: "Most tools and equipment are provided during in-person workshops. Participants may be asked to bring a laptop for programming or CAD sessions.",
    },
];

const participationNotes = [
    "Use of tools, machinery, and electrical equipment requires the advisor’s approval and compliance with all school and workshop safety procedures.",
    "Photos or videos may be taken during workshops for team documentation and outreach. Participants who do not wish to appear in published media should notify the team before the session.",
    "Workshop topics, schedules, locations, and availability may change based on instructor, facility, and equipment availability.",
];

export default function WorkshopsPage() {
    return (
        <main className="overflow-hidden bg-white text-stone-950 tracking-normal dark:bg-stone-950 dark:text-white">
            <Banner
                title="Rōnin Engineering Workshops"
                subtitle="Making engineering accessible to everyone in our community."
                imageSources={{
                    default: {
                        src: assemblyImg,
                    },
                }}
                imageAlt="A Rōnin Robotics student assembling a belt-driven robot mechanism at a workshop table."
                imagePriority
                minHeight="64vh"
                overlayOpacity={0.42}
                heroButton={{
                    text: "Join summer sessions",
                    link: "/summercode",
                    color: "sky",
                    enable: true,
                }}
                // heroSubButton={{
                //     text: "Summer programming",
                //     link: "/summercode",
                //     enable: true,
                // }}
            />

            <section className="border-b border-stone-950/10 px-6 pb-16 dark:border-white/10 sm:px-8 sm:pb-20">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="grid grid-cols-2 border-y border-stone-950/20 dark:border-white/20 lg:grid-cols-4">
                        {impactStats.map((stat, index) => (
                            <div
                                key={stat.value}
                                className={`py-7 pr-5 sm:py-9 ${
                                    index % 2 === 1
                                        ? "border-l border-stone-950/20 pl-5 dark:border-white/20"
                                        : ""
                                } ${
                                    index >= 2
                                        ? "border-t border-stone-950/20 dark:border-white/20 lg:border-t-0"
                                        : ""
                                } ${
                                    index > 0
                                        ? "lg:border-l lg:border-stone-950/20 lg:pl-7 lg:dark:border-white/20"
                                        : ""
                                }`}
                            >
                                <p className="text-3xl font-[560] tracking-[-0.035em] sm:text-5xl">
                                    {stat.value}
                                </p>
                                <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 dark:bg-stone-950 sm:px-8 ">
                <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-[0.82fr_1.18fr]">
                    <div>
                        <p className="text-lg font-[550] text-sky-700 dark:text-sky-300">
                            Open engineering education
                        </p>
                        <h2 className="mt-4 max-w-3xl text-4xl font-[560] leading-none tracking-[-0.035em] sm:text-6xl sm:tracking-[-0.045em]">
                            Free, student-led instruction.
                        </h2>
                    </div>

                    <div className="max-w-4xl space-y-7 text-xl leading-relaxed text-stone-800 dark:text-stone-200 sm:text-2xl">
                        <p>
                            Since 2025, Rōnin Robotics has offered student-led
                            engineering workshops in which experienced members
                            teach programming, electrical systems, mechanical
                            design and fabrication, and CAD to students of all
                            experience levels, regardless of whether they are
                            members of the team.
                        </p>
                        <p>
                            During the 2025-26 school year, Rōnin members
                            delivered more than 90 instructional sessions. Our
                            workshops grew from a simple belief: engineering
                            should be accessible to everyone. By offering free,
                            student-led instruction, we aim to lower barriers
                            and expand access to hands-on engineering education
                            throughout our community.
                        </p>
                        <p>
                            The program served more than 55 active participants,
                            over 85% of whom reported having little or no prior
                            engineering experience.
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-20 grid max-w-screen-2xl gap-5 md:grid-cols-[1.25fr_0.75fr] md:items-start">
                    <div className="overflow-hidden border border-stone-950 bg-stone-950 p-2 shadow-xl shadow-stone-950/10 dark:border-white/15">
                        <Image
                            src={drillingImg}
                            alt="A Rōnin Robotics student drilling an aluminum robot component in the workshop."
                            className="aspect-[16/9] w-full object-cover object-[48%_center]"
                            sizes="(min-width: 768px) 63vw, 100vw"
                        />
                    </div>
                    <div className="overflow-hidden border border-stone-950 bg-stone-950 p-2 shadow-xl shadow-stone-950/10 dark:border-white/15 md:mt-20">
                        <Image
                            src={wiringImg}
                            alt="A Rōnin Robotics student working on wiring inside a competition robot."
                            className="aspect-[4/5] w-full object-cover object-[55%_center]"
                            sizes="(min-width: 768px) 37vw, 100vw"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 ">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="grid gap-10 border-t border-white/25 pt-6 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <p className="text-sm font-[550] uppercase text-sky-300">
                                Program overview
                            </p>
                        </div>
                        <h2 className="max-w-5xl text-4xl font-[560] leading-none tracking-[-0.035em] sm:text-6xl sm:tracking-[-0.045em]">
                            Practical skills, from first principles to a working
                            robot.
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-px bg-white/20 md:grid-cols-2">
                        {programs.map((program) => (
                            <article
                                key={program.title}
                                className="relative min-h-72 bg-stone-950 p-7 sm:p-9"
                            >
                                <div
                                    className={`absolute left-0 top-0 h-2 w-24 ${program.accent}`}
                                />
                                <div className="flex items-start justify-between gap-8">
                                    <h3 className="text-3xl font-[560] tracking-[-0.03em] sm:text-4xl">
                                        {program.title}
                                    </h3>
                                    <span className="text-sm font-[520] text-stone-500">
                                        {program.number}
                                    </span>
                                </div>
                                <p className="mt-16 max-w-xl text-xl leading-relaxed text-stone-300 sm:text-2xl">
                                    {program.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 grid gap-10 bg-sky-400 p-7 text-stone-950 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <p className="text-sm font-[560] uppercase">
                                Summer 2026
                            </p>
                            <p className="mt-4 max-w-5xl text-2xl font-[570] leading-snug tracking-[-0.025em] sm:text-4xl">
                                Beginning in summer 2026, Rōnin expanded its
                                programming workshops through an online summer
                                series.
                            </p>
                        </div>
                        <Link
                            href="/summercode"
                            className="inline-flex justify-center bg-stone-950 px-6 py-4 text-base font-[560] text-white transition-colors hover:bg-white hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 focus:ring-offset-sky-400"
                            data-umami-event="workshops-summer-series-clicked"
                        >
                            Sign up for the summer series
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 dark:bg-stone-950 sm:px-8 md:py-28">
                <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-[1fr_0.8fr]">
                    <div className="border-t border-stone-950/25 pt-6 dark:border-white/25">
                        <p className="text-sm font-[550] uppercase text-stone-500 dark:text-stone-400">
                            Who can attend?
                        </p>
                        <h2 className="mt-5 max-w-4xl text-4xl font-[560] leading-none tracking-[-0.035em] sm:text-6xl sm:tracking-[-0.045em]">
                            Open to all interested students.
                        </h2>
                        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-700 dark:text-stone-300 sm:text-2xl">
                            Our workshops are open to all interested students,
                            regardless of whether they are members of Rōnin
                            Robotics or have an engineering background. Students
                            from Portola High School and neighboring high schools
                            are welcome to participate.
                        </p>
                    </div>

                    <aside className="bg-orange-500 p-7 text-stone-950 sm:p-10">
                        <p className="text-sm font-[560] uppercase">
                            How can I sign up?
                        </p>
                        <h2 className="mt-5 text-4xl font-[560] leading-none tracking-[-0.035em] sm:text-5xl">
                            Join the next workshop.
                        </h2>
                        <p className="mt-7 text-lg leading-relaxed sm:text-xl">
                            Students who filled out the Rōnin Robotics Interest
                            Form will be automatically signed up.
                        </p>
                        <Link
                            href="/JoinWorkshop"
                            className="mt-9 inline-flex bg-stone-950 px-6 py-4 text-base font-[560] text-white transition-colors hover:bg-white hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 focus:ring-offset-orange-500"
                            data-umami-event="workshops-signup-card-clicked"
                        >
                            Sign up at 7447.team/JoinWorkshop
                        </Link>
                    </aside>
                </div>
            </section>

            <section className="bg-stone-100 px-6 py-20 text-stone-950 dark:bg-stone-900 dark:text-white sm:px-8 md:py-28">
                <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-[0.62fr_1.38fr]">
                    <div>
                        <p className="text-sm font-[550] uppercase text-sky-700 dark:text-sky-300">
                            Frequently asked questions
                        </p>
                        <h2 className="mt-4 text-4xl font-[560] leading-none tracking-[-0.035em] sm:text-6xl sm:tracking-[-0.045em]">
                            Before you arrive.
                        </h2>
                    </div>

                    <div className="border-b border-stone-950/20 dark:border-white/20">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group border-t border-stone-950/20 py-6 dark:border-white/20"
                            >
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-xl font-[550] leading-snug marker:content-none sm:text-2xl">
                                    <span>{faq.question}</span>
                                    <span
                                        aria-hidden="true"
                                        className="mt-0.5 text-3xl font-light leading-none transition-transform group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </summary>
                                <p className="max-w-4xl pr-12 pt-5 text-lg leading-relaxed text-stone-700 dark:text-stone-300 sm:text-xl">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 dark:bg-stone-950 sm:px-8 md:py-20">
                <div className="mx-auto max-w-screen-2xl border-t border-stone-950/25 pt-6 dark:border-white/25">
                    <p className="text-sm font-[550] uppercase text-stone-500 dark:text-stone-400">
                        Safety and participation notes
                    </p>
                    <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
                        {participationNotes.map((note, index) => (
                            <div key={note}>
                                <p className="text-sm font-[540] text-sky-700 dark:text-sky-300">
                                    0{index + 1}
                                </p>
                                <p className="mt-3 text-base italic leading-relaxed text-stone-600 dark:text-stone-400">
                                    {note}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
