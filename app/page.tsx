import Image from "next/image";
// import Link from "next/link";


export default async function Home() {
  // const str = await fetchString();
  
  // New cards data

  return (
   <div>
     <div className="max-w-[120rem] mx-auto mb-10 md:mb-16">
        <div className="mx-auto min-w-full">
            <div className="relative box bg-blend-overlay mx-auto text-white bg-gray-400 min-h-[60vh] h-full max-h-screen">
                {/* <div className="abis= z-[-10] w-full min-h-[60vh] h-full max-h-screen bg-black"></div> */}
                <Image src="/67A02062-Enhanced-NR.jpg" sizes="1080px" alt="" fill loading="eager" quality={100} className="object-cover top-0 right-0 w-full h-full z-0"/>
                <div className="relative z-10 w-full min-h-[60vh] h-full max-h-screen flex justify-start items-center bg-[rgba(0,0,0,0.40)]">
                    <div className="w-full">
                        <div className="max-w-screen-xl mx-auto px-6">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Rōnin Robotics <span className="whitespace-nowrap">Team 7447</span></h1>
                            <p className="mt-4 text-lg sm:text-xl">High School Robotics Team from Portola High School, Irvine, CA.</p>
                        </div>
                        <div className="absolute bottom-1 right-2 select-none opacity-25 text-sm">
                        <p>&copy; Cameron Smith</p>

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