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

    <div className="max-w-screen-xl sm:px-6 mt-12 mb-24 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8 ">Our Sponsors</h1>
      <p className="text-lg sm:text-xl px-6 sm:px-0">
      We are incredibly grateful to our sponsors for their generous support and belief in our team.
      Your contributions help us innovate, grow, and compete at the highest level in FIRST® Robotics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 sm:px-0 px-6">
        <Link href="https://iusd.org/" rel="nofollow"><Image src={iusdImg} alt="Irvine Unified School District" className="w-full rounded-lg" width={500} quality={75} placeholder="blur" /></Link>
        <Link href="https://portolahigh.iusd.org/" rel="nofollow"><Image src={portolaImg} alt="Portola High School" className="w-full rounded-lg" width={500} quality={75} placeholder="blur" /></Link>
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