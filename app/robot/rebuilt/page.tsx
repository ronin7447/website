import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import limelightImg from "@/public/reefscape/limelight.png";
import shooterImg from "@/public/reefscape/shooter.jpg";
import swerveImg from "@/public/reefscape/swerve.jpg";
import heroImg from "@/public/robot_images/67A02062-Enhanced-NR.jpg";
import robotOnFieldImg from "@/public/robot_images/67A02955.jpg";

export const metadata: Metadata = {
    title: "Our Robot for the 2026 REBUILT Season - Rōnin Robotics",
    description: "Learn about our robot for the 2026 REBUILT season, featuring a fast MK5N swerve drive, over-the-bumper ground intake, spindexer, 540-degree turret, adjustable-hood shooter, and PhotonVision-based field localization.",
};

const cards = [
    {
        title: "Swerve Drive",
        subtitle: "Fast, Compact, and Omnidirectional.",
        titleColor: "opacity-80 text-sky-600 dark:text-sky-400",
        description: `Our drivetrain uses a true swerve layout, which means every wheel can be driven and steered independently. That gives the robot precise movement in any direction, from quick lateral adjustments to smooth rotation while lining up a shot or recovering in traffic.`,
        details: `We built the system around MK5N compact swerve modules with four Kraken X60 motors handling drive and four Kraken X44 motors handling steer. With the R1 gear ratio, the drivetrain reaches a free speed of 14.9 ft/s, giving us the pace to cycle quickly without giving up fine control.`,
        image: swerveImg,
        imageAlt: "Close-up photo of a swerve module on the robot.",
    },
    {
        title: "Ground Intake",
        subtitle: "Collect FUELS Straight from the Carpet.",
        titleColor: "opacity-80 text-orange-600 dark:text-orange-400",
        description: `An over-the-bumper ground intake lets us pick up FUELS efficiently without needing a perfect approach angle. That shortens cycle times, helps us recover loose game pieces, and gives drivers more freedom to stay aggressive around the field.`,
        details: `The intake is designed to hand pieces off cleanly into the rest of the scoring path, so we can move from collection to indexing without unnecessary delay or unstable transfers.`,
        image: shooterImg,
        imageAlt: "Close-up photo of the robot intake and roller assembly.",
    },
    {
        title: "Spindexer",
        subtitle: "A Controlled Feed into the Shooter.",
        titleColor: "opacity-80 text-blue-600 dark:text-blue-400",
        description: `To keep the scoring path consistent, we use a spinning indexer that settles and stages incoming FUELS before they reach the shooter. That extra control helps reduce jams and keeps the handoff predictable even when we are cycling at speed.`,
        details: `By presenting each game piece in a more repeatable position, the spindexer improves shot consistency and gives the shooter a steadier input instead of relying on whatever orientation the intake happens to deliver.`,
        image: heroImg,
        imageAlt: "Photo of the robot showing its upper scoring structure.",
    },
    {
        title: "Turret",
        subtitle: "Rotation for Auto-Aim and Passing.",
        titleColor: "opacity-80 text-violet-600 dark:text-violet-400",
        description: `A turret with 540 degrees of rotation gives the robot freedom to aim without forcing the drivetrain to face one direction. That makes it easier to track the HUB, keep the chassis mobile, and maintain better scoring angles under pressure.`,
        details: `The extra rotation range also supports passes back from the NEUTRAL ZONE or ALLIANCE ZONE, giving drivers a flexible option when a direct scoring attempt is not the best play.`,
        image: robotOnFieldImg,
        imageAlt: "Photo of the robot competing on the field.",
    },
    {
        title: "Shooter",
        subtitle: "Physics-Tuned for Repeatable Shots.",
        titleColor: "opacity-80 text-indigo-600 dark:text-indigo-400",
        description: `Our shooter pairs an adjustable hood with a tuned flywheel system so we can adapt to different shot locations instead of building around a single release point. The goal is to make scoring repeatable from a wider range of positions.`,
        details: `The hood adjusts from 60 to 90 degrees, and our software uses physics-based calculations to determine both hood angle and flywheel velocity. That tuning lets us approach each shot with a measured setup rather than rough presets.`,
        image: shooterImg,
        imageAlt: "Close-up photo of the robot shooter rollers and hood assembly.",
    },
    {
        title: "PhotonVision",
        subtitle: "Vision Support for Faster Alignment.",
        titleColor: "opacity-80 text-green-600 dark:text-green-400",
        description: `PhotonVision provides the robot with the target information needed for automatic aiming assistance. By turning camera data into usable measurements, it helps reduce the amount of manual alignment required during fast scoring cycles.`,
        details: `That vision feedback can be blended with driver control so the robot stays responsive while still benefiting from automatic corrections when lining up to shoot or pass.`,
        image: limelightImg,
        imageAlt: "Promotional image of a Limelight vision camera used for robot vision.",
    },
    {
        title: "Field Localization",
        subtitle: "Know Where We Are, Not Just What We See.",
        titleColor: "opacity-80 text-emerald-600 dark:text-emerald-400",
        description: `Beyond target detection, our vision stack helps estimate the robot's position on the field. That broader awareness makes it easier to line up repeatable shots, return to key scoring locations, and give autonomous routines better context.`,
        details: `Using PhotonVision-based measurements alongside drivetrain data, we can maintain a more stable pose estimate and hand more trustworthy localization information to the rest of the robot software.`,
        image: robotOnFieldImg,
        imageAlt: "Photo of the robot positioned on the competition field.",
    },
];

export default function RebuiltPage() {
    return (
        <div>
            <div className="max-w-[120rem] mx-auto mb-10 md:mb-16">
                <div className="mx-auto min-w-full">
                    <div
                        className="relative mx-auto overflow-hidden bg-gray-400 text-white min-h-[60vh] h-full max-h-screen"
                        style={{ aspectRatio: "4/1", maxWidth: "100%" }}
                    >
                        <Image
                            src={heroImg}
                            alt="Rōnin Robotics robot competing during a match."
                            fill
                            priority
                            quality={75}
                            sizes="100vw"
                            className="object-cover"
                        />
                        <div className="relative z-10 flex w-full min-h-[60vh] h-full max-h-screen items-center justify-start bg-[rgba(0,0,0,0.40)]">
                            <div className="w-full">
                                <div className="max-w-screen-xl mx-auto px-6">
                                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Take a closer look at our REBUILT robot</h1>
                                    <p className="mt-4 text-lg sm:text-xl">Learn more about our robot for the 2026 REBUILT season, from the drivetrain and intake to the shooter, turret, and vision stack.</p>
                                </div>
                                <div className="absolute bottom-1 right-2 select-none text-sm opacity-25">
                                    <p>&copy; Jun Yu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {cards.map((card, index) => (
                <div key={card.title} className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
                    <h1 className={`text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 ${card.titleColor}`}>{card.title}</h1>
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">{card.subtitle}</h1>

                    {index === 0 ? (
                        <>
                            <p className="text-xl px-6 sm:px-0">{card.description}</p>
                            <Image
                                src={card.image}
                                alt={card.imageAlt}
                                className="bg-gray-300 dark:bg-gray-800 h-[50vh] sm:h-[70vh] sm:rounded-3xl mt-6 object-cover"
                                quality={50}
                            />
                            <p className="mt-6 text-xl px-6 sm:px-0">{card.details}</p>
                        </>
                    ) : (
                        <>
                            <div className="hidden sm:flex">
                                <div className="w-1/2">
                                    <p className="text-xl px-6 sm:px-0">
                                        {card.description}
                                        <br />
                                        <br />
                                        {card.details}
                                    </p>
                                </div>
                                <Image
                                    src={card.image}
                                    alt={card.imageAlt}
                                    className="bg-gray-300 dark:bg-gray-800 h-[50vh] sm:rounded-3xl ml-8 object-cover w-1/2"
                                    quality={50}
                                />
                            </div>

                            <div className="block sm:hidden">
                                <p className="text-xl px-6 sm:px-0">{card.description}</p>
                                <Image
                                    src={card.image}
                                    alt={card.imageAlt}
                                    className="bg-gray-300 dark:bg-gray-800 h-[50vh] sm:h-[70vh] sm:rounded-3xl mt-6 object-cover"
                                    quality={50}
                                />
                                <p className="mt-6 text-xl px-6 sm:px-0">{card.details}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}

            <div className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 opacity-80 text-orange-600 dark:text-orange-400">&apos;26 REBUILT</h1>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">Built for fast cycles and controlled shots.</h1>

                <p className="text-xl px-6 sm:px-0">
                    Our 2026 robot is built around efficient collection, stable indexing, flexible aiming, and reliable scoring. With a fast swerve drivetrain, over-the-bumper intake, 540-degree turret, adjustable-hood shooter, and a PhotonVision-backed localization stack, the design is focused on moving quickly while keeping every shot setup deliberate and repeatable.
                </p>

                <Image
                    src={robotOnFieldImg}
                    alt="Rōnin Robotics robot during a competition match."
                    className="bg-gray-300 dark:bg-gray-800 h-[98vh] sm:rounded-3xl mt-6 object-cover"
                    quality={85}
                />
                <p className="mt-6 text-xl px-6 sm:px-0">
                    Each subsystem was chosen to support the same idea: shorten the path from pickup to score while giving drivers and software enough information to stay accurate under match pressure.
                </p>
            </div>

            <div className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 opacity-80 text-purple-700">Resources</h1>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">Follow the rest of the season.</h1>

                <p className="text-xl px-6 sm:px-0 ui-content">
                    Explore more robots from our team on <Link href="/robot" className="a-link">The Robots We Built</Link>.
                    <br />
                    <br />
                    Follow our Instagram (<Link href="https://www.instagram.com/frc7447/" className="a-link">@frc7447</Link>) for more updates on our robot and the 2026 season.
                </p>
                <div className="mb-48"></div>
            </div>
        </div>
    );
}
