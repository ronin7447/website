import { notFound, redirect } from "next/navigation";

// Add or update short links here. Slugs should always be lowercase.
const shortLinks: Readonly<Record<string, string>> = {
    "26summer":
        "https://docs.google.com/forms/d/1Gg2_57JvcSnMVuMJUVDpC8i-08o6sbNrZ2HtDxJ7eFQ/viewform",
    join: "https://docs.google.com/forms/d/e/1FAIpQLScR8Jg2eoymheiHkNBgr9woUJ89dXIIbB43Q2MxCFcslyB_aA/viewform",
    summercode:
        "https://docs.google.com/forms/d/e/1FAIpQLSeFWeVbFdE244pgKsGDuXRAWA7_wQG95xU3yYO69JP-8Oq8wg/viewform?usp=dialog",
    "banquet-rsvp":
        "https://docs.google.com/forms/d/e/1FAIpQLSehcnUWC1tCz6PSSeqpT3Eev9fnxytomBltgOTeBkAa-azCdg/viewform?usp=dialog",
    signin26:
        "https://docs.google.com/forms/d/e/1FAIpQLSfHJdfjzsDlUjAR81whK885AHRdo1ViCYNChNBCdpKoGSUVgA/viewform?usp=sharing&ouid=109424922547981011055",
    merch: "https://docs.google.com/forms/d/e/1FAIpQLSd_ukbMF7mj8eGRADFuwVkJVwK1R3q_x2jCkVSoOxdmdW6khA/viewform?usp=dialog",
};

type ShortLinkPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ShortLinkPage({ params }: ShortLinkPageProps) {
    const { slug } = await params;
    const destination = shortLinks[slug.toLowerCase()];

    if (!destination) {
        notFound();
    }

    redirect(destination);
}
