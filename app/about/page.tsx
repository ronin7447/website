import bannerImg from "@/public/team-avr.jpg";
import { Metadata } from "next";
import ContentLayout from "../components/ContentLayout";
import Banner from "../components/Banner"; // Import the Banner component
// import BotIntroCard from "../components/BotIntroCard";
import { MapPinIcon, TrophyIcon } from "@heroicons/react/24/outline";
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
      description: `Rōnin Robotics Team 7447 consists of 40+ members from Portola High School in Irvine, CA, who participate in FIRST® Robotics Competitions along with thousands of teams and students worldwide. Our team strives to provide real-world engineering experiences through competitive robotics and values a sense of community and teamwork while implementing various innovative techniques to challenge young minds. We hope to inspire and empower students with the skills for them to pursue passions in STEM and become leaders of innovation.`,
      imgUrl: null,
    },
    {
      title: "Our Mission",
      titleColor: "",
      subtitle: "",
      description: `Formed in 2019, Rōnin Robotics is dedicated to providing real-world engineering and FIRST® Robotics experiences within our local community. As a high school team, we offer students the opportunity to explore STEM and robotics through hands-on learning and teamwork. Our goal is to inspire and empower the next generation of innovators with the skills and confidence to pursue their passions and become future leaders in technology.`,
      imgUrl: null,
    },
    {
      title: "Our Team Members",
      titleColor: "",
      subtitle: "",
      description: `Our team members are mostly from Portola High School in our local community. To make contributiosn to our robot efficiently, we are divided into different subteams to contribute to our robot. Each subteam will focus on a different aspect of the robot, such as programming, mechanical, electrical, and design. Students can learn different advanced skills in each subteam, and contribute to the robot with collaboration and teamwork.`,
      imgUrl: null,
    }
  ]
}

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
            src: bannerImg,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCABDAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwB+KMVJto21rcgZijbUm2jbRcCPHbFGKk20baQEeKMVJto207gR4oxUm2jbRcCLFGKk20baLgRYoqTFFADDKR6VG0zqN3Y8DNNUyOA+3EQPJJqwu2VASoIqLXK2EeQqF3HGfQVXE0gdwxztBOB1pZEkkmIBGFAIHYUsiIJgTkF+CB3o1DQdHK0gYAkkelMW4ITdIxxnA4qa32WrAZ4Y4p9ygmQLHtUA56UahoVEuJTIVPOeg6Ypz3D/AC7cjPXNPNuNx2vye9LPII4CQoJXgZFGoaDUmkZjkYH15pHlk3Da+PY9zVcXDKvmK3zHqauxMkyq5A3daNwI5XkKjDFRnk07e64DE575qaCeOSTyivIzg+tSXSM6DaBweT7UrgVPNP8AeopxcodpOCKKdwKtm7fdl37PTHBq2ZAnBVgD044qRYEX3+tNmBYkL/CM4FSnYdrjJAfJbacHHWoIyiy43E8/KDUgdtozjmhAI2wh4J5quoug0nMsZfHPGPSpo5VOVIx7nvULxjz92TtIyabNGzg7mPy/d96V2h6Mf5jCUDgrnGe9MveI85PPGKrAgcg06QvNHjOdoLUMCOMBxgnA7Vdgnijj2lsY9qoKcfWg8g0LQGXYbgRztIE47CtASx3EeVJweeOMVig/J71f00fuWPqaQE7W8bHLAk+pNFSHPrRSAWod8ce7LYZjipTyCM4zTEhjUcjcfVuTQMqryD39KazK2FzwT1qZ0CAqG2g8jnpUMQ3RYfDMeAMU7iJNu7c28BcYx3piIwBDyLyMKQc496HhmYrsTAAweRSCzkBJGCT1yMfhRcCoVxx17ZqWJxGH3LkMpWpcbQqgEY4bAqxHEjW7fLkE8YHP4U2BmyhQR5YPPakLB8cAcY4q2LR44hIN29T8qjqPeoFjklcIev06UhkYDbzHxn1zWnp6lbc57mqRsLgHgA+4atOKPy41QdhQIfRSUUgGd6UUUUDAojn5lB+op2B6CiigB1AoooAKKKKACgjmiigBKKKKAEooooA//9k="
          }
        }}
        imageAlt="Ronin Robotics Team Photo at AVR 2024"
        imageCredit="Yeeun Ryu"
        imagePriority={true} // Assuming this is LCP for the about page
        useBlur={true}
        overlayOpacity={0.50} // Match the previous inline style
        imageAspectRatio="3/2" // Match the previous inline style
      />

      <div className="max-w-screen-xl mx-auto px-6  tracking-tighter md:tracking-[-0.16rem]">
         <h1 className={`text-3xl sm:text-4xl font-semibold tracking-tighter sm:px-0 mb-8 sm:mb-12`}>About Rōnin Robotics</h1>
        <div className="grid grid-cols-1 sm:flex">
          <div className="grid grid-cols-1 gap-2 sm:mr-2 sm:w-3/5">
          <div className="bg-sky-100 dark:bg-sky-950 dark:text-blue-100 text-sky-900 md:px-8 md:py-12 p-6 rounded-3xl flex items-center">
            <p className="text-2xl md:text-4xl font-semibold leading-none ">
              Provide real-world engineering experience within our <span className="whitespace-nowrap">local community</span>.
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
              <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-purple-700 dark:text-purple-200 tracking-[-0.3rem] lg:tracking-[-0.60rem] transform-[scale(1,0.94)]">40+</p>
            <p className="text-2xl md:text-4xl font-semibold leading-none mt-1">
              members from our local high school.
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
      </div>

      <ContentLayout content={pageContent.content} />
      <div className="pb-16 md:pb-24"></div>

    </div>
  )
}