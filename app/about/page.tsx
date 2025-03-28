import Image from "next/image";
import bannerImg from "@/public/67A02359.jpg"
import BotIntroCard from "../components/BotIntroCard";
export default function Home() {
  // const str = await fetchString();



  // New cards data

  return (
   <div>
     <div className="max-w-[120rem] mx-auto mb-10 md:mb-16">
        <div className="mx-auto min-w-full">
            <div className="relative box bg-blend-overlay mx-auto text-white bg-gray-400 min-h-[60vh] h-full max-h-screen" style={{aspectRatio: "4/1", maxWidth: "100%"}}>
                {/* <div className="abis= z-[-10] w-full min-h-[60vh] h-full max-h-screen bg-black"></div> */}
                <Image src={bannerImg} sizes="546px" alt="" quality={75} className="object-cover top-0 right-0 w-full h-auto z-0"
                style={{ aspectRatio: "3/2", minHeight: "60vh", maxHeight: "100vh", backgroundPosition: "center", backgroundSize: "contain", objectFit: "cover"}}
                  placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCABDAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCgzmKTMZKH2NIm52PAY9eRmllQqxDDB9TSIxRwyrknjFDBFhVLKuxVDDrkVK8JdTsxn8qQNIgG2HORz1om8wxZCkZALc0JtA0mIgBViVG1cZODSKu0hn+4xqDOVJyeKki+UcsSp54quZk8qJVQCRkByp5X6UCI793lnP8AvCoppNpJXK+lRCaQn75qSi9GjRyb1iGR0ywpQGVjJsUufVulUDNIf+WhxTfNc9ZGx9aALbRM7ZZP/H6BAR0QH/gVVfNf++1AmcD77fnTAtrBkcqAfTdRVXzW/vt+dFAibUCxlToTtpttE2+OUldobkdxRqJ/frjptqnmkMmlZzKx56nFKkr7SGJK4xUGferS82R/3qBDA4KNgY6U4OfLP+zTFX9y7dsgU/DeTgL7/Wm3cErCo7GPceWzjkU4M7HhV/IUiGTI/dnrnpUckjFiM4HoKQx7zFPlwhbv8tI0zbVOE5/2ajfk+/cU1vuLQBJ57f3U/wC+aPtDf3E/75qGigC15jEAhU5H90UVCD8o+lFAFu5Zg/O1uOpUGoN7NnhOBnhRU1x8zDioo1GW3ZA29qAIvOf0X/vkVN5jfZxyOT6CmCFHlCgkKe5qRljRBGzNwc9KVwAyMI0Ax8xP8IxT3b9yrdTk9KRhEEj5b5enFClTGoXBUZxk80wEaZsKOcdMVEUxIWXHsM04Ase3rUnG7kYz1IpDutiGUIGbZngc59ajJ+RRVphHhlZeSetQlUzj5yvbFAEJBFG01N+6Y876XEPTL/pRcRGPur9KKR2AYhTwOmaKYGqbqX/nktVZEd+VXaSeavEy/wDPVqazTAcSkmgnmRU2NjGw0jIzdUJIHFTGeb/nqaTz5v8Anq1BRW2yj+Bj+BqTOT/qZfxFPWWcZ/etyc0vnTf89mquZk8qK4Ev/PNv++KCs3/PJ/8AvirHmzf89n/OjzJv+ez/AJ0czDkRCBIAP3En/fNMMVw5/wBVJ+VTs0pAAlfr60bpd7EyOO3BpczHyohFpNnPlP8AlQ9tJGpdlYY9RUu6TP8ArX/Oo3ZnkCF2Pc5NIY5bOTaMo2e/y0U7L/8APR/zooAuZphPNFFWc5Xl4c0mTiiipNo7BRRRSKCnLzRRQAneg/fb60UUAJUcXLyHvnFFFADj1ooooEf/2Q=="
                  priority
                  layout="fill"
                  // blurDataURL=""
                />
                <div className="relative z-10 w-full min-h-[60vh] h-full max-h-screen flex justify-start items-center bg-[rgba(0,0,0,0.40)]">
                    <div className="w-full">
                        <div className="max-w-screen-xl mx-auto px-6">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">About <span className="whitespace-nowrap">Our Team</span></h1>
                            <p className="mt-4 text-lg sm:text-xl">Rookie FIRST® Robotics Team from Portola High School, Irvine, CA since 2019.</p>
                        </div>
                        <div className="absolute bottom-1 right-2 select-none opacity-25 text-sm">
                        <p>&copy; Jun Yu</p>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>


    <BotIntroCard />

        <div className="mt-8 mb-16 max-w-screen-sm mx-auto">
          <div className="border-t border-stone-200 dark:border-stone-800"></div>
        </div>
    <div className="max-w-screen-xl sm:px-6 mb-24 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8 md:mb-12">Our team members</h1>
      <p className="text-xl px-6 sm:px-0">
        We are divided into different subteams to contribute to our robot.
        Each subteam will focus on a different aspect of the robot, such as programming, mechanical, electrical, and design.
       
      </p>
      </div>
    {/* <div className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8 md:mb-12">Resources</h1>
      <p className="text-xl px-6 sm:px-0">
        Go to our GitHub for the source code of our robot!
       
      </p>
      </div> */}
      
   </div>
  )
}