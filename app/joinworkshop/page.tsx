import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "2026-27 Engineering Workshops - Rōnin Robotics",
    description:
        "The schedule for Rōnin Robotics' 2026-27 engineering workshop sessions will be announced soon.",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        title: "2026-27 Engineering Workshops",
        description:
            "The schedule for Rōnin Robotics' 2026-27 engineering workshop sessions will be announced soon.",
        url: "https://7447.team/joinworkshop",
        siteName: "Rōnin Robotics: FRC Team 7447",
    },
    metadataBase: new URL("https://7447.team"),
};

export default function JoinWorkshopPage() {
    return (
        <main className="bg-white px-6 py-16 text-stone-950 dark:bg-stone-950 dark:text-white sm:px-8 sm:py-24">
            <section className="mx-auto flex min-h-[58vh] max-w-screen-xl flex-col justify-between border-t border-stone-950/25 pt-6 dark:border-white/25">
                <div className="grid gap-3 text-sm font-[540] uppercase sm:grid-cols-2">
                    <p>Rōnin Engineering Workshops</p>
                    <p className="text-stone-500 dark:text-stone-400 sm:text-right">
                        2026-27
                    </p>
                </div>

                <div className="max-w-5xl py-20 sm:py-24">
                    <p className="text-lg font-[550] text-sky-700 dark:text-sky-300">
                        Check back soon
                    </p>
                    <h1 className="mt-4 text-5xl font-[560] leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
                        Workshop sessions TBA.
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-stone-700 dark:text-stone-300 sm:text-2xl">
                        The schedule for our 2026-27 engineering workshop
                        sessions will be announced soon.
                    </p>
                    <Link
                        href="/workshops"
                        className="mt-9 inline-flex border border-stone-950/25 px-6 py-4 text-base font-[560] text-stone-950 transition-colors hover:border-sky-700 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:border-white/30 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-300"
                    >
                        Explore the workshop program
                    </Link>
                </div>

                <div className="h-3 w-full bg-sky-400" aria-hidden="true" />
            </section>
        </main>
    );
}
