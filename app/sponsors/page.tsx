import Image from "next/image";
import iusdImg from "@/public/sponsors/iusd.png";
import portolaImg from "@/public/sponsors/portola.png";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sponsors - Rōnin Robotics (FRC Team 7447)",
  description: "We are incredibly grateful to our sponsors for their generous support and belief in our team. Your contributions help us innovate, grow, and compete at the highest level in FIRST® Robotics.",
  keywords: ["robotics", "FIRST Robotics", "FRC", "team 7447", "ronin robotics", "ronin 7447", "7447", "FRC 7447", "portola high frc", "portola high robotics", "ronin"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Rōnin Robotics: FRC Team 7447",
    description: "Ronin Robotics (FRC Team 7447) is a high school robotics team from Portola High School, Irvine, CA consisting of 30+ members that participate in FIRST® Robotics Competitions along with thousands of teams and students worldwide. Our team strives to provide real-world engineering experiences through competitive robotics. Our team values a sense of community and teamwork while implementing various innovative techniques to challenge young minds. We hope to empower students with the skills they need to pursue their passion in STEM and become leaders of innovation.",
    url: "https://7447.team",
    siteName: "Rōnin Robotics: FRC Team 7447",
    
  },
  metadataBase: new URL('https://7447.team'),
}
export default function Home() {



  // New cards data

  return (
   <div>
     {/* <div className="max-w-[120rem] mx-auto mb-10 md:mb-16">
        <div className="mx-auto min-w-full">
            <div className="relative box bg-blend-overlay mx-auto text-white bg-gray-400 min-h-[60vh] h-full max-h-screen" style={{aspectRatio: "4/1", maxWidth: "100%"}}>
                <Image src={bannerImg} sizes="546px" alt="" quality={75} className="object-cover top-0 right-0 w-full h-auto z-0"
                style={{ aspectRatio: "3/2", minHeight: "60vh", maxHeight: "100vh", backgroundPosition: "center", backgroundSize: "contain", objectFit: "cover"}}
                  placeholder="data:image/jpeg;base64,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"
                  priority
                  layout="fill"
                  // blurDataURL=""
                />
                <div className="relative z-10 w-full min-h-[60vh] h-full max-h-screen flex justify-start items-center bg-[rgba(0,0,0,0.40)]">
                    <div className="w-full">
                        <div className="max-w-screen-xl mx-auto px-6">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Our Sponsors</h1>
                            <p className="mt-4 text-lg sm:text-xl">Rookie FIRST® Robotics Team from Portola High School, Irvine, CA since 2019.</p>
                        </div>
                        <div className="absolute bottom-1 right-2 select-none opacity-25 text-sm">
                        <p>&copy; Jun Yu</p>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div> */}

        {/* <div className="mt-8 mb-16 max-w-screen-sm mx-auto">
          <div className="border-t border-stone-200 dark:border-stone-800"></div>
        </div> */}
    <div className="max-w-screen-xl sm:px-6 mt-12 mb-24 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8 ">Our Sponsors</h1>
      <p className="text-lg sm:text-xl px-6 sm:px-0">
      We are incredibly grateful to our sponsors for their generous support and belief in our team.
      Your contributions help us innovate, grow, and compete at the highest level in FIRST® Robotics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 sm:px-0 px-6">
        <Link href="https://iusd.org/" rel="nofollow"><Image src={iusdImg} alt="Irvine Unified School District" className="w-full rounded-md" width={500} /></Link>
        <Link href="https://portolahigh.iusd.org/" rel="nofollow"><Image src={portolaImg} alt="Portola High School" className="w-full rounded-md" width={500} /></Link>
      </div>

      
      <div className="block md:flex  mt-16 ">
        <div className="px-6 sm:px-0 mb-12 md:mb-0 md:mr-12 w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8 ">Support Rōnin Robotics</h1>
        <p className="text-lg md:text-xl ">
      We provide FIRST® and real-world engineering experiences to students at our high school and within our local community, offering meaningful opportunities to explore STEM.
      Your support plays a vital role in our growth and helps us fulfill our mission of inspiring and empowering the next generation of innovators.
      In appreciation of your sponsorship, we&apos;re proud to recognize our sponsors through placements on our robot, team apparel, and website to help showcase your support throughout the season.
      </p>
        </div>
      

      <div className="px-6 sm:px-0 w-full md:w-1/2">
        
        <ContactForm />
      </div>
      </div>
    </div>

      


   </div>
  )
}