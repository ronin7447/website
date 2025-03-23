import Image from "next/image";
// import Link from "next/link";
import bannerImg from "@/public/67A02062-Enhanced-NR.jpg"

export default async function Home() {
  // const str = await fetchString();
  
  // New cards data

  return (
   <div>
     <div className="max-w-[120rem] mx-auto mb-10 md:mb-16">
        <div className="mx-auto min-w-full">
            <div className="relative box bg-blend-overlay mx-auto text-white bg-gray-400 min-h-[60vh] h-full max-h-screen" style={{aspectRatio: "4/1", maxWidth: "100%"}}>
                {/* <div className="abis= z-[-10] w-full min-h-[60vh] h-full max-h-screen bg-black"></div> */}
                <Image src={bannerImg} sizes="546px" alt="" quality={75} className="object-cover top-0 right-0 w-full h-auto z-0"
                style={{ aspectRatio: "2/3", minHeight: "60vh", maxHeight: "100vh", backgroundPosition: "center", backgroundSize: "contain", objectFit: "cover"}}
                  placeholder="data:image/jpeg;base64,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"
                  priority
                  layout="fill"
                  // blurDataURL=""
                />
                <div className="relative z-10 w-full min-h-[60vh] h-full max-h-screen flex justify-start items-center bg-[rgba(0,0,0,0.40)]">
                    <div className="w-full">
                        <div className="max-w-screen-xl mx-auto px-6">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Rōnin Robotics <span className="whitespace-nowrap">Team 7447</span></h1>
                            <p className="mt-4 text-lg sm:text-xl">High School Robotics Team from Portola High School, Irvine, CA.</p>
                        </div>
                        <div className="absolute bottom-1 right-2 select-none opacity-25 text-sm">
                        <p>&copy; Jun Yu</p>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>


    <div className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter px-6 sm:px-0 mb-8 md:mb-12">About Us</h1>
      <p className="text-xl px-6">
      Our team consists of 30+ members that participate in FIRST® Robotics Competitions along with thousands of teams and students worldwide. Our team strives to provide real-world engineering experiences through competitive robotics. Our team values a sense of community and teamwork while implementing various innovative techniques to challenge young minds. We hope to empower students with the skills they need to pursue their passion in STEM and become leaders of innovation.
       
      </p>
      </div>
      <div className="max-w-screen-xl sm:px-6 mt-16 mb-10 md:mb-20 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter px-6 sm:px-0 mb-8 md:mb-12">Contact us</h1>
      <p className="text-xl px-6">
        Email: first.robotics.portola@gmail.com
      </p>
      </div>
    
   </div>
  )
}