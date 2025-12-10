import bannerImg from "@/public/team_photo/IMG_8375_2-4.jpg";
import bannerTmImg from "@/public/media/67A03021_crop.jpg";
import avrImg from "@/public/team-avr.jpg";
import { Metadata } from "next";
import ContentLayout from "../components/ContentLayout";
import Banner from "../components/Banner"; // Import the Banner component
// import BotIntroCard from "../components/BotIntroCard";
import Image from "next/image";
// import { MapPinIcon, TrophyIcon } from "@heroicons/react/24/outline";
import InfoCard1 from "@/public/infocard/card1.png";
import InfoCard1Dark from "@/public/infocard/card1-dark.png";
export const metadata: Metadata = {
  title: "About Rōnin Robotics - Rōnin Robotics (FRC Team 7447)",
  description: "Ronin Robotics (FRC Team 7447) is a high school robotics team from Portola High School, Irvine, CA consisting of 30+ members that participate in FIRST® Robotics Competitions along with thousands of teams and students worldwide. Our team strives to provide real-world engineering experiences through competitive robotics. Our team values a sense of community and teamwork while implementing various innovative techniques to challenge young minds. We hope to empower students with the skills they need to pursue their passion in STEM and become leaders of innovation.",
  keywords: ["robotics", "FIRST Robotics", "FRC", "team 7447", "ronin robotics", "ronin 7447", "7447", "FRC 7447", "portola high frc", "portola high robotics"],
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

const pageContent = {
  content: [
    {
      title: "",
      titleColor: "",
      subtitle: "",
      description: `Rōnin Robotics Team 7447 consists of 65+ members from Portola High School in Irvine, CA, who participate in FIRST® Robotics Competitions along with thousands of teams and students worldwide. Our team strives to provide real-world engineering experiences through competitive robotics and values a sense of community and teamwork while implementing various innovative techniques to challenge young minds. We hope to inspire and empower students with the skills for them to pursue passions in STEM and become leaders of innovation.`,
      imgUrl: null,
    },
    {
      title: "Our Mission",
      titleColor: "text-blue-500 dark:text-blue-400",
      subtitle: "Empowering students through STEM and hands-on innovation.",
      description: `Formed in 2019, Rōnin Robotics is dedicated to providing real-world engineering experiences through FIRST® Robotics Competition within our local community. As a high school team, we are quickly growing to offer students the opportunity to explore STEM and robotics through hands-on learning and teamwork. Our goal is to inspire and empower the next generation of innovators with the skills and confidence to pursue their passions and become future leaders in technology.`,
      imgUrl: null,
    },
    {
      title: "Our Team Members",
      titleColor: "text-sky-600 dark:text-sky-500",
      subtitle: "Collaborating through specialized subteams to build and innovate.",
      description: `Our team members are from multiple public high schools in Irvine, California, including Portola High School and Northwood High School. To make contributiosn to our robot efficiently, we are divided into different subteams to contribute to our robot. Each subteam will focus on a different aspect of the robot, such as programming, mechanical, electrical, and design. Students can learn different advanced skills in each subteam, and contribute to the robot with collaboration and teamwork.`,
      imgUrl: null,
      imgBelow: bannerImg,
      altText: "Rōnin Robotics 2025-26 Team Photo",
    },
    {
      title: "",
      titleColor: "",
      subtitle: "",
      description: ``,
      imgUrl: null,
      imgBelow: avrImg,
      altText: "Rōnin Robotics at FIRST® Robotics Competition Aerospace Valley Regional 2025.",
    }
  ]
}

const subteamContent = {
  content: [
    {
      title: "Mechanical Engineering Team",
      titleSize: "text-2xl sm:text-3xl",
      titleColor: "",
      subtitle: "",
      description: `The mechanical team is responsible for building and assembling the robot’s structural and moving parts. From the drivetrain to the intake and scoring mechanisms, they turn designs into functional components through hands-on fabrication and testing. They collaborated with the CAD team closely to ensure precise part integration. Members learn how to use tools, work with different materials, and ensure the robot is competition-ready. They also need to conduct repairs, maintenance, and upgrades throughout the season to keep the robot in top condition.`,
      imgUrl: null,
    },
    {
      title: "Electrical Engineering Team",
      titleSize: "text-2xl sm:text-3xl",
      titleColor: "",
      subtitle: "",
      description: `The electronics team handles all wiring, power distribution, and electrical components on the robot. They install motor controllers, sensors, and the RoboRIO, ensuring that everything is safely and cleanly connected. Members learn to troubleshoot hardware issues and keep the robot running reliably during matches. Their work is critical to linking hardware and software together. They also need to maintain the electrical board and resolve hardware issues during competitions.`,
      imgUrl: null,
    },
    {
      title: "Software Team",
      titleSize: "text-2xl sm:text-3xl",
      titleColor: "",
      subtitle: "",
      description: `The software team is responsible for the software of the robot. They write the code that makes the robot function. Using Java and tools including WPILib, they develop autonomous plans, teleoperated control systems, and integrate feedback from sensors. They collaborate closely with mechanical and electronics teams to test and refine robot behavior. Members also learn software development practices and real-world problem solving through iteration and debugging.`,
      imgUrl: null,
    },
    {
      title: "Design and CAD Team",
      titleSize: "text-2xl sm:text-3xl",
      titleColor: "",
      subtitle: "",
      description: `The CAD and Design team creates digital 3D models of the robot using professional software. These designs guide the mechanical team during fabrication and help prevent issues before building begins. They’re responsible for ensuring precision and compatibility between all subsystems. Members gain experience in design thinking, geometry, and translating concepts into build-ready plans.`,
      imgUrl: null,
    },
    {
      title: "Business Team",
      titleSize: "text-2xl sm:text-3xl",  
      titleColor: "",
      subtitle: "",
      description: `The Social Media and Business team manages the team’s branding, community outreach, and sponsor relations. They run social media accounts, create content, and help tell the story of Rōnin Robotics. On the business side, they assist with fundraising, grant writing, and organizing team events. Their work helps sustain the team financially and build connections beyond robotics.`,
      imgUrl: null,
    }
  ]
}

// const endContent = {
//   content: [
//     {
//       title: "To learn more about Rōnin Robotics?",
//       titleColor: "",
//       subtitle: "yes ",
//       description: `The Social Media and Business team manages the team’s branding, community outreach, and sponsor relations. They run social media accounts, create content, and help tell the story of Rōnin Robotics. On the business side, they assist with fundraising, grant writing, and organizing team events. Their work helps sustain the team financially and build connections beyond robotics.`,
//       imgUrl: null,
//     }
//   ]
// }

export default function Home() {
  // const str = await fetchString();



  // New cards data

  return (
    <div>
      {/* Replace the old banner div with the Banner component */}
      <Banner
        title={<>About <span className="whitespace-nowrap">Our Team</span></>}
        subtitle="FIRST® Robotics Team from Portola High School, Irvine, CA since 2019."
        imageSources={{
          default: {
            src: bannerTmImg,
          }
        }}
        imageAlt="Ronin Robotics Team Photo at AVR 2024"
        imageCredit="Jun Yu"
        imagePriority={true} // Assuming this is LCP for the about page
        useBlur={true}
        overlayOpacity={0.55} // Match the previous inline style
        imageAspectRatio="3/2" // Match the previous inline style
      />

      {/* <div className="max-w-screen-xl mx-auto px-6 tracking-tighter md:tracking-[-0.13rem]">
         <h1 className={`text-3xl sm:text-4xl font-semibold tracking-tighter sm:px-0 mb-8 sm:mb-12`}>Meet Rōnin Robotics</h1>
         <div className="max-w-screen-xl mx-auto pb-4 sm:pb-8 tracking-tighter md:tracking-[-0.12rem] mt-2">
          <div className="w-full flex gap-2 ">
             <div className="bg-slate-100 dark:bg-sky-950 dark:text-blue-100 text-sky-900 md:px-6 md:py-6 p-4 rounded-3xl flex items-center w-3/7">
            <p className="text-2xl md:text-4xl font-medium leading-none ">
              Provide real-world engineering experience across Irvine public <span className="whitespace-nowrap">high schools</span>.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-purple-950 dark:text-purple-100 text-purple-900 p-6 rounded-3xl flex items-center w-1/7">
            <div className="-mt-1">
              <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-purple-700 dark:text-purple-200 tracking-[-0.3rem] lg:tracking-[-0.50rem] transform-[scale(1,0.94)]">65+</p>
            <p className="text-2xl md:text-4xl font-semibold leading-none mt-1">
              members
            </p>
            </div>
          </div>
           <div className="bg-sky-100 dark:bg-sky-950 dark:text-blue-100 text-sky-900 md:px-6 md:py-6 p-4 rounded-3xl flex items-center w-3/7">
            <p className="text-2xl font-medium leading-none ">
              Growing impact in the community.

            </p>
          </div>
          </div>

         </div>
        {/* <div className="grid grid-cols-1 sm:flex">
          <div className="grid grid-cols-1 gap-2 sm:mr-2 sm:w-3/5">
          <div className="bg-sky-100 dark:bg-sky-950 dark:text-blue-100 text-sky-900 md:px-8 md:py-12 p-6 rounded-3xl flex items-center">
            <p className="text-2xl md:text-4xl font-semibold leading-none ">
              Provide real-world engineering experience across Irvine public <span className="whitespace-nowrap">high schools</span>.
            </p>
          </div>
          <div className="bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-950 text-indigo-900 md:px-8 md:py-12 p-6 rounded-3xl flex items-center">
            <p className="text-2xl md:text-4xl font-semibold leading-none">
              Inspire and empower the next generation of innovators to pursue their passions <span className="whitespace-nowrap">in STEM</span>.
            </p>
          </div>
          
        </div>
        <div className="mt-2 sm:mt-0 grid grid-cols-1 gap-2 sm:w-2/5">
          <div className="bg-purple-100 dark:bg-purple-950 dark:text-purple-100 text-purple-900 p-6 rounded-3xl flex items-center">
            <div className="-mt-1">
              <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-purple-700 dark:text-purple-200 tracking-[-0.3rem] lg:tracking-[-0.50rem] transform-[scale(1,0.94)]">65+</p>
            <p className="text-2xl md:text-4xl font-semibold leading-none mt-1">
              members
            </p>
            </div>
          </div>
          <div className="bg-blue-100 dark:bg-blue-950 dark:text-blue-100 text-blue-900 p-6 rounded-3xl flex items-center space-x-3">
           
            <div className="md:mb-1">
               <MapPinIcon className="size-8 sm:size-10 md:size-12 text-blue-700 dark:text-blue-200 mb-2 -ml-1" strokeWidth={2}/>
                <p className="text-2xl md:text-3xl font-semibold tracking-tighter flex items-center">
                  Irvine, California.
                </p>
            
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 pb-4 sm:pb-8 tracking-tighter md:tracking-[-0.16rem] mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          <div className="grid grid-cols-1 gap-2">
           <div className="bg-yellow-100 dark:bg-yellow-950 dark:text-yellow-100 text-yellow-900 p-6 rounded-3xl flex items-center space-x-3">
           
            <div className="md:mb-1">
               <TrophyIcon className="size-8 sm:size-10 md:size-12 text-yellow-700 dark:text-yellow-200 mb-2 -ml-1" strokeWidth={2}/>
                <p className="text-2xl md:text-3xl font-semibold tracking-tighter flex items-center leading-none">
                  2023 Orange County Regional<br/>
                  Judges’ Award
                </p>
            
            </div>
          </div>
          
        </div>
        <div className="sm:mt-0 grid grid-cols-1 gap-2">
          <div className="bg-amber-100 dark:bg-amber-950 dark:text-amber-100 text-amber-900 p-6 rounded-3xl flex items-center space-x-3">
           
            <div className="md:mb-1">
               <TrophyIcon className="size-8 sm:size-10 md:size-12 text-amber-700 dark:text-amber-200 mb-2 -ml-1" strokeWidth={2}/>
                <p className="text-2xl md:text-3xl font-semibold tracking-tighter flex items-center leading-none">
                  2019 Orange County Regional<br/>
                  Rookie All-Star Award
                </p>
            
            </div>
          </div>
        </div>
        </div> 
      </div> */}

      <Image src={InfoCard1} alt="Info Card" className="max-w-7xl w-full px-6 mx-auto mb-8 h-auto block dark:hidden"/>
      <Image src={InfoCard1Dark} alt="Info Card" className="max-w-7xl w-full px-6 mx-auto mb-8 h-auto hidden dark:block"/>


      <ContentLayout content={pageContent.content} /> 
      <div className="pb-8"></div>
      <ContentLayout content={subteamContent.content} />
      <div className="pb-12 md:pb-16"></div>
      {/* <ContentLayout content={endContent.content} />  */}
      <div className="pb-16 md:pb-24"></div>

    </div>
  )
}