import Image from "next/image";
import bannerImg from "@/public/robot_images/67A02955.jpg";
import bannerImg2 from "@/public/robot_images/67A02062-Enhanced-NR.jpg"
// import iusdImg from "@/public/sponsors/iusd.png";
// import portolaImg from "@/public/sponsors/portola.png";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Team Banquet 2025 - Rōnin Robotics (FRC Team 7447)",
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
    <div className="w-full h-[92vh] justify-center items-center flex">
        <Image src={bannerImg} alt="Team Banquet 2025" className="w-full h-[100vh] object-cover object-center fixed -z-20 top-0 left-0" quality={80} placeholder="blur" priority />
        <div className="-z-10 bg-black/60 w-full h-full fixed top-0 left-0"></div>
        <div className="max-w-screen-xl mx-auto mb-[12vh] px-6 z-10">
            <h1 className="text-[5.25rem] tracking-[-0.5rem] sm:text-9xl sm:tracking-[-0.6rem] lg:text-[9rem] lg:tracking-[-0.7rem] font-semibold leading-none dark:text-blue-200 text-sky-300">Rōnin</h1>
            <h1 className="text-[5.25rem] tracking-[-0.5rem] sm:text-9xl sm:tracking-[-0.6rem] lg:text-[9rem] lg:tracking-[-0.7rem] font-medium leading-none text-white">Team Banquet</h1>
            <p className="mt-8 sm:mt-12 md:mt-16 text-xl sm:text-2xl md:text-3xl tracking-tighter sm:px-0 opacity-90 text-white">
            We would like to invite you to our annual team banquet to celebrate the hard work and achievements of this year’s FIRST® Robotics Competition season!

            </p>
        </div>
    </div>
    
  <div className="bg-white dark:bg-stone-950 pb-24">
    <div className="w-full justify-center items-start flex bg-stone-200 text-stone-800">
        <div className="w-full max-w-[1920px] mx-auto mb-32 px-6 z-10 mt-[4vh]">
            {/* <h1 className="text-8xl tracking-[-0.4rem] sm:text-9xl sm:tracking-[-0.5rem] lg:text-[9rem] lg:tracking-[-0.6rem] font-semibold leading-none dark:text-blue-200 text-sky-500">Event Details</h1> */}
            <h1 className="text-8xl tracking-[-0.4rem] sm:text-9xl sm:tracking-[-0.5rem] lg:text-[9rem] lg:tracking-[-0.7rem] font-medium leading-none">Event Details</h1>
            <div className="w-full  mt-16 ">
    <div className="w-full">
    <p className="text-2xl sm:text-3xl md:text-4xl tracking-tighter sm:px-0 opacity-90 ">
                Location: <b>Portola High School Student Union</b><br/><br/>
                Address: <b>1001 Cadence, Irvine, CA 92618.</b><br/><br/>
                Date: <b>Thursday, May 29th, 2025.</b><br/><br/>
                Time: <b>5:30 p.m. - 7:00 p.m.</b><br/><br/>
                <i>Thank you so much for taking the time to celebrate with us at the banquet this year. We cannot wait to see you in next year&apos;s game season!</i>
                </p>
                
                <button className="mt-16 text-2xl sm:text-3xl md:text-4xl tracking-tighter opacity-90 text-white cursor-pointer bg-sky-700 rounded-full px-6 py-4 md:px-12 md:py-8">
                    <Link href="https://maps.app.goo.gl/NQte9BkHCWHjua9m8">Navigation (Google Maps)</Link></button><br />
                    {/* <button className="mt-8 text-2xl sm:text-3xl md:text-4xl tracking-tighter opacity-90 text-white cursor-pointer bg-amber-700 rounded-full px-6 py-4 md:px-12 md:py-8 disabled">
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLScR1_k5hkGpDt3DPYoR2aqCYoSrAb0UP0Sl0BJ0YW3WuB7z2w/viewform">Sign-up Form (RSVP)</Link></button> */}
                     <button className="mt-8 text-2xl sm:text-3xl md:text-4xl tracking-tighter opacity-90 text-white cursor-pointer bg-gray-700 rounded-full px-6 py-4 md:px-12 md:py-8 disabled">
                    <Link href="#">Sign-up Form (Closed)</Link></button>
                </div>
                
        
            </div>
            
        </div>
    </div>
      <div className="w-full h-[92vh] justify-center items-center flex relative">
        <Image src={bannerImg2} alt="Team Banquet 2025" className="w-full h-[92vh] object-cover object-center absolute  top-0 left-0" quality={80} placeholder="blur" priority />
        <div className=" bg-black/60 w-full h-full absolute top-0 left-0"></div>
        <div className="max-w-screen-xl mx-auto mb-[12vh] px-6 z-10">
            <h1 className="text-[5.25rem] tracking-[-0.5rem] sm:text-9xl sm:tracking-[-0.6rem] lg:text-[9rem] lg:tracking-[-0.7rem] font-semibold leading-none dark:text-blue-200 text-sky-300">Celebrate</h1>
            <h1 className="text-[5.25rem] tracking-[-0.5rem] sm:text-9xl sm:tracking-[-0.6rem] lg:text-[9rem] lg:tracking-[-0.7rem] font-medium leading-none text-white">with us</h1>
            <p className="mt-8 sm:mt-12 md:mt-16 text-xl sm:text-2xl md:text-3xl tracking-tighter sm:px-0 opacity-90 text-white">
            Follow our Instagram (@frc7447) for updates and more information about our team and events, and we would love to see you there!
            </p>
        </div>
    </div>
      <div className="max-w-screen-xl sm:px-6 mx-auto bg-white  dark:bg-stone-950">
      
      
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

      


   </div>
  )
}