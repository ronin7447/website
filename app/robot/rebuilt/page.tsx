import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import Banner from "@/app/components/Banner";
import buildImg from "@/public/media/2026-season/Export sequence.00_00_59_06.Still011.jpg";
import detailImg from "@/public/media/2026-season/Export sequence.00_00_12_17.Still004.jpg";
import fabricationImg from "@/public/media/2026-season/Export sequence.00_00_45_18.Still009.jpg";
import fieldHeroImg from "@/public/media/2026-season/Export sequence.00_00_36_16.Still007.jpg";
import intakeImg from "@/public/media/2026-season/Export sequence.00_00_08_06.Still003.jpg";
import motionImg from "@/public/media/2026-season/Export sequence.00_01_25_20.Still001.jpg";
import robotOutdoorImg from "@/public/media/2026-season/Export sequence.00_00_01_17.Still001.jpg";
import visionImg from "@/public/media/2026-season/Export sequence.00_00_18_01.Still005.jpg";

export const metadata: Metadata = {
    title: "Our Robot for the 2026 Season - Rōnin Robotics",
    description: "See our 2026 robot through updated build and match photography, plus a closer look at the swerve drivetrain, intake path, turreted shooter, and PhotonVision-backed localization stack.",
};

type OverviewCard = {
    title: string;
    value: string;
    description: string;
    accent: string;
};

type FeatureSection = {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    image: StaticImageData;
    imageAlt: string;
    points: {
        title: string;
        text: string;
    }[];
};

type GalleryCard = {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
};

const overviewCards: OverviewCard[] = [
    {
        title: "Drivetrain",
        value: "14.9 ft/s",
        description: "MK5N compact swerve modules with Kraken X60 drive and Kraken X44 steer motors keep the robot fast and precise.",
        accent: "text-sky-600 dark:text-sky-400",
    },
    {
        title: "Aiming Range",
        value: "540 deg",
        description: "The turret can keep scoring angles open without forcing the chassis to square up to every shot.",
        accent: "text-violet-600 dark:text-violet-400",
    },
    {
        title: "Shot Control",
        value: "60-90 deg",
        description: "An adjustable hood and physics-based shot tuning help keep release conditions deliberate and repeatable.",
        accent: "text-indigo-600 dark:text-indigo-400",
    },
];

const featureSections: FeatureSection[] = [
    {
        eyebrow: "01",
        title: "Move first, collect quickly.",
        subtitle: "Swerve drive and an over-the-bumper intake keep cycles short.",
        description:
            "Our 2026 robot starts with mobility. The drivetrain is designed to strafe, rotate, and recover cleanly, while the intake is built to pull FUELS straight off the carpet without demanding a perfect approach angle from the drivers.",
        accent: "text-sky-600 dark:text-sky-400",
        image: robotOutdoorImg,
        imageAlt: "Our 2026 robot parked outdoors during a 2026-season photo session.",
        points: [
            {
                title: "Swerve drive",
                text: "Each wheel can drive and steer independently, so the robot can translate and rotate at the same time when lining up, dodging traffic, or resetting for the next pickup.",
            },
            {
                title: "Ground intake",
                text: "The intake hands pieces off directly into the scoring path, cutting down the time between acquisition and the next controlled feed.",
            },
        ],
    },
    {
        eyebrow: "02",
        title: "Stage pieces, then score from better angles.",
        subtitle: "The feed path is tuned around controlled handoff, rotation, and shot setup.",
        description:
            "A spinning indexer settles game pieces before they reach the shooter, which gives the rest of the robot a steadier starting point. From there, the turret and adjustable hood let the software choose better release geometry instead of forcing every shot to come from the same pose.",
        accent: "text-orange-600 dark:text-orange-400",
        image: detailImg,
        imageAlt: "Top-down view of our 2026 robot showing its turret and staged game pieces.",
        points: [
            {
                title: "Spindexer",
                text: "The indexer keeps incoming pieces more predictable, reducing messy transfers and making the shooter input more consistent when the robot is cycling at speed.",
            },
            {
                title: "Turreted shooter",
                text: "With 540 degrees of turret rotation and a hood that adjusts from 60 to 90 degrees, the robot can aim more flexibly while the drivetrain keeps moving.",
            },
        ],
    },
    {
        eyebrow: "03",
        title: "Use vision to tighten the whole loop.",
        subtitle: "PhotonVision supports both aiming help and broader field awareness.",
        description:
            "Vision is not just for spotting targets. PhotonVision gives the robot measurements that can support auto-aim behavior and also help stabilize the robot's field pose when combined with drivetrain data.",
        accent: "text-green-600 dark:text-green-400",
        image: visionImg,
        imageAlt: "Our 2026 robot competing on the field during a match with yellow game pieces in flight.",
        points: [
            {
                title: "PhotonVision targeting",
                text: "Camera measurements reduce the amount of manual alignment needed during fast scoring cycles while still leaving the drivers in control.",
            },
            {
                title: "Field localization",
                text: "A steadier pose estimate makes it easier to revisit known shooting spots and gives autonomous or assistive routines more trustworthy context.",
            },
        ],
    },
];

const galleryCards: GalleryCard[] = [
    {
        title: "Subsystem detail",
        description: "A tighter look at the intake path, storage volume, and upper structure.",
        image: intakeImg,
        imageAlt: "Close-up of the robot packed with yellow game pieces during the 2026 season.",
    },
    {
        title: "Fabrication",
        description: "Machining and assembly work that turned the concept into a competition-ready structure.",
        image: fabricationImg,
        imageAlt: "A team member drilling into a robot panel during fabrication.",
    },
    {
        title: "Build season",
        description: "Turret and upper-assembly work in progress during the 2026 build season.",
        image: buildImg,
        imageAlt: "A student working on the upper portion of our 2026 robot.",
    },
    {
        title: "Drive testing",
        description: "Outdoor reps to validate motion, packaging, and how the robot behaves at speed.",
        image: motionImg,
        imageAlt: "Our 2026 robot driving outdoors during testing.",
    },
];

function SectionHeading({
    eyebrow,
    title,
    accentClass = "text-orange-600 dark:text-orange-400",
}: {
    eyebrow: string;
    title: string;
    accentClass?: string;
}) {
    return (
        <>
            <h1
                className={`text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 opacity-80 ${accentClass}`}
            >
                {eyebrow}
            </h1>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">
                {title}
            </h1>
        </>
    );
}

export default function RebuiltPage() {
    return (
        <div>
            <Banner
                title={
                    <>
                        Take a closer look at{" "}
                        <span className="whitespace-nowrap">our 2026 robot</span>
                    </>
                }
                subtitle="A refreshed look at our 2026 robot, built around fast collection, staged feeding, flexible aiming, and PhotonVision-backed localization."
                imageSources={{
                    default: {
                        src: fieldHeroImg,
                    },
                }}
                imageAlt="Our 2026 robot competing on the field during the 2026 season."
                imagePriority
                minHeight="68vh"
                overlayOpacity={0.42}
                useBlur={false}
            />

            <section className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] px-6 sm:px-0">
                    <div>
                        <SectionHeading
                            eyebrow="'26 REBUILT"
                            title="Fast cycles, controlled feeds, repeatable shots."
                        />
                        <p className="text-xl text-stone-700 dark:text-stone-300 px-6 sm:px-0">
                            Our 2026 robot is centered on shortening the
                            path from pickup to score. The chassis is tuned to
                            move aggressively, the feed path is designed to keep
                            pieces settled before release, and the aiming stack
                            is built so drivers and software can share the work
                            of making each shot cleaner.
                        </p>
                        <p className="mt-6 text-xl text-stone-700 dark:text-stone-300 px-6 sm:px-0">
                            The rebuild process followed the same priorities as
                            the final robot: keep the architecture clear,
                            validate subsystems early, and turn that iteration
                            into a machine that could move quickly without
                            giving up control.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        {overviewCards.map((card) => (
                            <div
                                key={card.title}
                                className="rounded-lg border border-stone-200/80 bg-stone-50 p-5 dark:border-stone-800 dark:bg-stone-900/70"
                            >
                                <p
                                    className={`text-sm font-semibold uppercase tracking-[0.22em] ${card.accent}`}
                                >
                                    {card.title}
                                </p>
                                <p className="mt-3 text-3xl font-[590] tracking-tighter">
                                    {card.value}
                                </p>
                                <p className="mt-3 text-base text-stone-700 dark:text-stone-300">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {featureSections.map((section, index) => {
                const imageOrderClass = index % 2 === 1 ? "lg:order-2" : "";
                const textOrderClass = index % 2 === 1 ? "lg:order-1" : "";

                return (
                    <section
                        key={section.title}
                        className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto"
                    >
                        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] px-6 sm:px-0">
                            <div
                                className={`overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-900 ${imageOrderClass}`}
                            >
                                <Image
                                    src={section.image}
                                    alt={section.imageAlt}
                                    className="h-[320px] w-full object-cover sm:h-[420px] lg:h-full"
                                    quality={80}
                                />
                            </div>

                            <div
                                className={`rounded-lg border border-stone-200/80 bg-white p-6 sm:p-8 dark:border-stone-800 dark:bg-stone-950 ${textOrderClass}`}
                            >
                                <p
                                    className={`text-sm font-semibold uppercase tracking-[0.22em] ${section.accent}`}
                                >
                                    {section.eyebrow}
                                </p>
                                <h2 className="mt-3 text-3xl sm:text-4xl font-[590] tracking-tighter">
                                    {section.title}
                                </h2>
                                <p className="mt-3 text-lg sm:text-xl text-stone-700 dark:text-stone-300">
                                    {section.subtitle}
                                </p>
                                <p className="mt-6 text-lg text-stone-700 dark:text-stone-300">
                                    {section.description}
                                </p>

                                <div className="mt-8 grid gap-4">
                                    {section.points.map((point) => (
                                        <div
                                            key={point.title}
                                            className="rounded-lg bg-stone-50 p-5 dark:bg-stone-900/70"
                                        >
                                            <h3 className="text-xl font-[550] tracking-tighter">
                                                {point.title}
                                            </h3>
                                            <p className="mt-2 text-base text-stone-700 dark:text-stone-300">
                                                {point.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            <section className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
                <SectionHeading
                    eyebrow="Process"
                    title="From workshop to field."
                    accentClass="text-sky-600 dark:text-sky-400"
                />

                <div className="grid gap-6 px-6 sm:px-0 md:grid-cols-2">
                    {galleryCards.map((card) => (
                        <div
                            key={card.title}
                            className="overflow-hidden rounded-lg border border-stone-200/80 bg-white dark:border-stone-800 dark:bg-stone-950"
                        >
                            <Image
                                src={card.image}
                                alt={card.imageAlt}
                                className="h-[280px] w-full object-cover"
                                quality={80}
                            />
                            <div className="p-6">
                                <h2 className="text-2xl sm:text-3xl font-[550] tracking-tighter">
                                    {card.title}
                                </h2>
                                <p className="mt-3 text-lg text-stone-700 dark:text-stone-300">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
                <SectionHeading
                    eyebrow="Resources"
                    title="Follow the rest of the season."
                    accentClass="text-purple-700 dark:text-purple-400"
                />

                <p className="text-xl px-6 sm:px-0 ui-content">
                    Explore more robots from our team on{" "}
                    <Link href="/robot" className="a-link">
                        The Robots We Built
                    </Link>
                    .
                    <br />
                    <br />
                    Follow our Instagram (
                    <Link
                        href="https://www.instagram.com/frc7447/"
                        className="a-link"
                    >
                        @frc7447
                    </Link>
                    ) for more updates on our robot and the 2026 season.
                </p>
                <div className="mb-48" />
            </section>
        </div>
    );
}
