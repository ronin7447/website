import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import assemblyImg from "@/public/media/2026-season/Export sequence.00_00_38_09.Still008.jpg";
import banquetHeroImg from "@/public/media/2026-season/Export sequence.00_00_36_16.Still007.jpg";
import fabricationImg from "@/public/media/2026-season/Export sequence.00_00_45_18.Still009.jpg";
import workshopImg from "@/public/media/2026-season/Export sequence.00_00_59_06.Still011.jpg";

export const metadata: Metadata = {
    title: "Team Banquet 2026 - Rōnin Robotics (FRC Team 7447)",
    description:
        "Join Rōnin Robotics for the 2026 annual team banquet on Friday, May 22, from 5:00 to 7:00 PM at the Portola High School Student Union.",
    keywords: [
        "robotics",
        "FIRST Robotics",
        "FRC",
        "team 7447",
        "ronin robotics",
        "ronin 7447",
        "7447",
        "FRC 7447",
        "Portola High School",
        "team banquet",
    ],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        title: "Team Banquet 2026 - Rōnin Robotics",
        description:
            "Members, families, mentors, sponsors, school staff, and FRC community guests are invited to celebrate the 2026 season with Rōnin Robotics.",
        url: "https://7447.team/banquet",
        siteName: "Rōnin Robotics: FRC Team 7447",
    },
    metadataBase: new URL("https://7447.team"),
};

const details = [
    {
        label: "Location",
        value: "Portola High School Student Union",
    },
    {
        label: "Address",
        value: "1001 Cadence, Irvine, CA 92618",
    },
    {
        label: "Date",
        value: "Friday, May 22, 2026",
    },
    {
        label: "Time",
        value: "5:00 PM - 7:00 PM",
    },
    {
        label: "Dress code",
        value: "Semi-formal",
    },
    {
        label: "RSVP by",
        value: "Sunday, May 10, 2026",
    },
];

const invitedGuests = [
    "Members",
    "Families",
    "Mentors",
    "Sponsors",
    "School staff",
    "FRC community guests",
];

const communityPhotos = [
    {
        image: workshopImg,
        alt: "A Rōnin Robotics team member working on the 2026 robot in the workshop.",
        className: "md:col-span-2",
        imageClassName: "aspect-[16/9] object-[50%_42%]",
    },
    {
        image: fabricationImg,
        alt: "A Rōnin Robotics team member drilling a robot panel during fabrication.",
        className: "",
        imageClassName: "aspect-[16/11] object-[52%_44%]",
    },
    {
        image: assemblyImg,
        alt: "A Rōnin Robotics team member assembling a 2026 robot mechanism.",
        className: "md:col-start-2 md:col-span-2",
        imageClassName: "aspect-[16/8] object-[54%_45%]",
    },
];

export default function BanquetPage() {
    return (
        <main className="overflow-hidden bg-white text-stone-950 tracking-normal dark:bg-stone-950 dark:text-white">
            <section className="relative border-b border-stone-950/10 px-6 pb-12 pt-6 dark:border-white/10 sm:px-8 sm:pb-16 sm:pt-8">
                <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.58fr)] lg:items-start">
                    <div>
                        <div className="grid gap-4 border-t border-stone-950/25 pt-5 text-sm font-semibold uppercase dark:border-white/25 sm:grid-cols-3">
                            <p>Rōnin Robotics</p>
                            <p className="text-stone-500 dark:text-stone-400">
                                Annual Team Banquet
                            </p>
                            <p className="sm:text-right">2026</p>
                        </div>

                        <div className="mt-10 max-w-5xl sm:mt-12 lg:mt-16">
                            <h1 className="text-6xl font-[680] leading-[0.86] tracking-[-0.055em] sm:text-8xl sm:tracking-[-0.07em] lg:text-9xl xl:text-[10.5rem]">
                                Team
                                <br />
                                Banquet
                            </h1>
                            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-stone-700 dark:text-stone-300 sm:text-2xl">
                                Thank you for supporting Rōnin Robotics
                                throughout this year and helping make our
                                team&apos;s growth and achievements possible.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/banquet-rsvp"
                                    className="inline-flex justify-center bg-stone-950 px-6 py-4 text-base font-bold text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-white dark:text-stone-950 dark:hover:bg-sky-300"
                                    data-umami-event="banquet-hero-rsvp-clicked"
                                >
                                    RSVP by May 10
                                </Link>
                                <Link
                                    href="https://maps.app.goo.gl/NQte9BkHCWHjua9m8"
                                    className="inline-flex justify-center border border-stone-950/25 px-6 py-4 text-base font-bold text-stone-950 transition-colors hover:border-sky-700 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:border-white/30 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-umami-event="banquet-hero-map-clicked"
                                >
                                    Open Google Maps
                                </Link>
                            </div>
                        </div>
                    </div>

                    <aside className="relative">
                        <div className="absolute -left-10 top-8 hidden h-24 w-24 bg-sky-400 lg:block" />
                        <div className="absolute -right-5 bottom-28 hidden h-20 w-36 bg-orange-500 lg:block" />
                        <div className="relative overflow-hidden border border-stone-950 bg-stone-950 p-2 shadow-2xl shadow-stone-950/20 dark:border-white/20">
                            <Image
                                src={banquetHeroImg}
                                alt="Rōnin Robotics 2026 robot competing on the field."
                                className="aspect-[4/5] w-full object-cover object-center"
                                priority
                                sizes="(min-width: 1024px) 38vw, 100vw"
                            />
                        </div>
                        <div className="mt-6 grid grid-cols-2 border-y border-stone-950/20 py-4 text-sm font-semibold uppercase dark:border-white/20">
                            <p>Friday, May 22</p>
                            <p className="text-right text-stone-500 dark:text-stone-400">
                                5:00 - 7:00 PM
                            </p>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="px-6 py-20 dark:bg-stone-950 sm:px-8 md:py-28">
                <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-[0.82fr_1.18fr]">
                    <div>
                        <p className="text-lg font-semibold text-sky-700 dark:text-sky-300">
                            Dinner will be provided.
                        </p>
                        <h2 className="mt-4 max-w-3xl text-4xl font-[650] leading-none tracking-[-0.035em] sm:text-6xl sm:tracking-[-0.045em]">
                            A season closing evening for the people who built
                            it with us.
                        </h2>
                    </div>

                    <div className="max-w-4xl">
                        <p className="text-2xl leading-relaxed text-stone-800 dark:text-stone-200">
                            We are excited to hold our annual team banquet on
                            Friday, May 22, from 5:00 to 7:00 PM in the
                            Portola High School Student Union. Members,
                            families, mentors, sponsors, school staff, and FRC
                            community guests are warmly invited to attend.
                        </p>

                        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {invitedGuests.map((guest) => (
                                <div
                                    key={guest}
                                    className="border-t border-stone-950/20 pt-3 text-lg font-[560] dark:border-white/20"
                                >
                                    {guest}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-20 grid max-w-screen-2xl gap-4 md:grid-cols-3 md:gap-6">
                    {communityPhotos.map((photo) => (
                        <div
                            key={photo.alt}
                            className={`self-start overflow-hidden border border-stone-950 bg-stone-950 p-2 shadow-xl shadow-stone-950/10 dark:border-white/15 ${photo.className}`}
                        >
                            <Image
                                src={photo.image}
                                alt={photo.alt}
                                className={`w-full object-cover ${photo.imageClassName}`}
                                sizes="(min-width: 768px) 50vw, 100vw"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-stone-950 px-6 py-20 text-white sm:px-8 md:py-28">
                <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
                    <div className="flex flex-col justify-between gap-12">
                        <div>
                            <p className="text-lg font-semibold text-orange-400">
                                Please RSVP by Sunday, May 10.
                            </p>
                            <h2 className="mt-4 text-5xl font-[680] leading-none tracking-[-0.055em] sm:text-7xl sm:tracking-[-0.065em] lg:text-8xl">
                                May 22
                            </h2>
                            <p className="mt-5 max-w-md text-xl leading-relaxed text-stone-300">
                                Semi-formal attire. Dinner, seating, and event
                                preparation will be finalized from RSVP counts.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                            <Link
                                href="/banquet-rsvp"
                                className="inline-flex justify-center border border-white bg-white px-6 py-4 text-base font-bold text-stone-950 transition-colors hover:bg-sky-300 hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-stone-950"
                                data-umami-event="banquet-rsvp-clicked"
                            >
                                RSVP for the banquet
                            </Link>
                            <Link
                                href="https://maps.app.goo.gl/NQte9BkHCWHjua9m8"
                                className="inline-flex justify-center border border-white/40 px-6 py-4 text-base font-bold text-white transition-colors hover:border-orange-400 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-stone-950"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-umami-event="banquet-map-clicked"
                            >
                                Open Google Maps
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-white/25">
                        {details.map((detail) => (
                            <div
                                key={detail.label}
                                className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-baseline"
                            >
                                <p className="text-sm font-semibold uppercase text-stone-400">
                                    {detail.label}
                                </p>
                                <p className="text-2xl font-[600] leading-tight text-white sm:text-3xl">
                                    {detail.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 sm:px-8 md:py-24">
                <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 border-t border-stone-950/20 pt-8 dark:border-white/20 md:flex-row md:items-end md:justify-between">
                    <p className="max-w-4xl text-3xl font-[620] leading-tight tracking-[-0.035em] sm:text-5xl sm:tracking-[-0.045em]">
                        We look forward to gathering with the community that
                        made this season possible.
                    </p>
                    <Link
                        href="/banquet-rsvp"
                        className="inline-flex shrink-0 justify-center bg-stone-950 px-6 py-4 text-base font-bold text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-white dark:text-stone-950 dark:hover:bg-sky-300"
                        data-umami-event="banquet-footer-rsvp-clicked"
                    >
                        RSVP by May 10
                    </Link>
                </div>
            </section>
        </main>
    );
}
