import Image from "next/image";
import bannerImg from "@/public/team-avr.jpg"
import { Metadata } from "next";
// import BotIntroCard from "../components/BotIntroCard";

export const metadata: Metadata = {
  title: "Explore Your FIRST® Experience with Rōnin Robotics (FRC Team 7447)",
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
export default function Home() {
  // const str = await fetchString();



  // New cards data

  return (
   <div>
     <div className="max-w-[120rem] mx-auto mb-10 md:mb-16">
        <div className="mx-auto min-w-full">
            <div className="relative box bg-blend-overlay mx-auto text-white bg-gray-400 min-h-[60vh] h-full max-h-screen" style={{aspectRatio: "4/1", maxWidth: "100%"}}>
                {/* <div className="abis= z-[-10] w-full min-h-[60vh] h-full max-h-screen bg-black"></div> */}
                <Image src={bannerImg} sizes="546px" alt="" quality={85} className="object-cover top-0 right-0 w-full h-auto z-0"
                style={{ aspectRatio: "3/2", minHeight: "60vh", maxHeight: "100vh", backgroundPosition: "center", backgroundSize: "contain", objectFit: "cover"}}
                  placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCABDAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwB+KMVJto21rcgZijbUm2jbRcCPHbFGKk20baQEeKMVJto207gR4oxUm2jbRcCLFGKk20baLgRYoqTFFADDKR6VG0zqN3Y8DNNUyOA+3EQPJJqwu2VASoIqLXK2EeQqF3HGfQVXE0gdwxztBOB1pZEkkmIBGFAIHYUsiIJgTkF+CB3o1DQdHK0gYAkkelMW4ITdIxxnA4qa32WrAZ4Y4p9ygmQLHtUA56UahoVEuJTIVPOeg6Ypz3D/AC7cjPXNPNuNx2vye9LPII4CQoJXgZFGoaDUmkZjkYH15pHlk3Da+PY9zVcXDKvmK3zHqauxMkyq5A3daNwI5XkKjDFRnk07e64DE575qaCeOSTyivIzg+tSXSM6DaBweT7UrgVPNP8AeopxcodpOCKKdwKtm7fdl37PTHBq2ZAnBVgD044qRYEX3+tNmBYkL/CM4FSnYdrjJAfJbacHHWoIyiy43E8/KDUgdtozjmhAI2wh4J5quoug0nMsZfHPGPSpo5VOVIx7nvULxjz92TtIyabNGzg7mPy/d96V2h6Mf5jCUDgrnGe9MveI85PPGKrAgcg06QvNHjOdoLUMCOMBxgnA7Vdgnijj2lsY9qoKcfWg8g0LQGXYbgRztIE47CtASx3EeVJweeOMVig/J71f00fuWPqaQE7W8bHLAk+pNFSHPrRSAWod8ce7LYZjipTyCM4zTEhjUcjcfVuTQMqryD39KazK2FzwT1qZ0CAqG2g8jnpUMQ3RYfDMeAMU7iJNu7c28BcYx3piIwBDyLyMKQc496HhmYrsTAAweRSCzkBJGCT1yMfhRcCoVxx17ZqWJxGH3LkMpWpcbQqgEY4bAqxHEjW7fLkE8YHP4U2BmyhQR5YPPakLB8cAcY4q2LR44hIN29T8qjqPeoFjklcIev06UhkYDbzHxn1zWnp6lbc57mqRsLgHgA+4atOKPy41QdhQIfRSUUgGd6UUUUDAojn5lB+op2B6CiigB1AoooAKKKKACgjmiigBKKKKAEooooA//9k="
                  priority
                  layout="fill"
                  // blurDataURL=""
                />
                <div className="relative z-10 w-full min-h-[60vh] h-full max-h-screen flex justify-start items-center bg-[rgba(0,0,0,0.50)]">
                    <div className="w-full">
                        <div className="max-w-screen-xl mx-auto px-6">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Explore Your FIRST® Robotics Experience,<br/>with Rōnin Robotics.</h1>
                            <p className="mt-4 text-lg sm:text-xl">Join Rōnin Robotics and pursue your passions in STEM. No previous experience is needed.</p>
                        </div>
                        <div className="absolute bottom-1 right-2 select-none opacity-25 text-sm">
                        <p>&copy; Yeeun Ryu</p>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>

    <div className="max-w-screen-xl sm:px-6 mt-4 mb-10 md:mb-16 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">Who are we?</h1>
        <p className="text-lg sm:text-xl px-6 sm:px-0">
          We are Rōnin Robotics, or FRC Team 7447. We have about 30+ members from Portola High School in Irvine, CA, and would participate in FIRST® Robotics Competitions along with thousands of teams and students worldwide.
          Our team strives to provide real-world engineering experiences and FIRST® Robotics experiences within our local community.
          We hope to inspire and empower the next generation of innovators with the skills and confidence to pursue their passions and become future leaders in technology.

        </p>
      </div>
      <div className="max-w-screen-xl sm:px-6 mb-10 md:mb-16 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">What can you learn?</h1>
        <p className="text-lg sm:text-xl px-6 sm:px-0">
            In the off-season, we run a variety of workshops where you can <b>learn the basics of mechanical design, electrical systems, programming, and CAD.</b> These sessions are a great way to get familiar with the tools and skills we use to build our robot.
            Once the competition season starts, the team is divided into different subteams, including mechanical, electrical, programming, and CAD.
            <br/><br/>Each of the subteam has its own role in bringing the robot to life.
            Whether you’re assembling parts, wiring systems, writing code, or designing components, there’s always something hands-on to dive into. It’s an exciting way to explore real engineering and robotics alongside a supportive team.

        </p>
      </div>

      <div className="max-w-screen-xl sm:px-6 mt-4 mb-10 md:mb-16 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">How to join us? Any requirements?</h1>
        <p className="text-lg sm:text-xl px-6 sm:px-0">
        <b>We welcome every students who are interested in robotics and engineering to join our team, and no previous experience is needed!</b><br/><br/>
        If you are interested in FIRST® Robotics Competition, robotics, or engineering, and would like to contribute to our team and robots, please feel free to reach out to us!
        </p>
      </div>

      {/* <div className="mt-8 mb-16 max-w-screen-sm mx-auto">
          <div className="border-t border-stone-200 dark:border-stone-800"></div>
        </div> */}
    

    {/* <BotIntroCard /> */}

        
    {/* <div className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8 md:mb-12">Resources</h1>
      <p className="text-xl px-6 sm:px-0">
        Go to our GitHub for the source code of our robot!
       
      </p>
      </div> */}
      
   </div>
  )
}