import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  // const str = await fetchString();
  
  // New cards data

  return (
   <div>
     <div className="max-w-[120rem] mx-auto mb-20">
        <div className="mx-auto min-w-full">
            <div className="relative box bg-blend-overlay mx-auto text-white bg-gray-400 min-h-[60vh] h-full max-h-screen">
                {/* <div className="abis= z-[-10] w-full min-h-[60vh] h-full max-h-screen bg-black"></div> */}
                <Image src="/67A02062-Enhanced-NR.jpg" sizes="1080px" alt="" fill loading="lazy" quality={100} className="object-cover top-0 right-0 w-full h-full z-0"/>
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


    <div className="max-w-screen-xl sm:px-6 mb-20 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter px-6 sm:px-0 mb-24">Learn more</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At blanditiis accusantium qui fugiat, rem quaerat, aperiam corrupti excepturi minima, est possimus! Neque fugiat impedit dolorem soluta deserunt rem mollitia explicabo?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quia possimus illum numquam repellendus. Minus ab, aut eveniet, eaque reprehenderit earum aliquid ut suscipit, dolores a aperiam at dignissimos tenetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi voluptate, magnam vero laboriosam quidem unde quam alias corporis deleniti porro nostrum minima molestiae consequuntur, placeat ea consequatur magni obcaecati.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae minus quae placeat ea aliquid dolor reiciendis perspiciatis voluptatem praesentium accusamus tempora cum natus ducimus magni possimus aut est, iusto ullam?
       
      </p>
      </div>
      <div className="max-w-screen-xl sm:px-6 mt-32 mb-20 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter px-6 sm:px-0 mb-24">Learn more</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At blanditiis accusantium qui fugiat, rem quaerat, aperiam corrupti excepturi minima, est possimus! Neque fugiat impedit dolorem soluta deserunt rem mollitia explicabo?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quia possimus illum numquam repellendus. Minus ab, aut eveniet, eaque reprehenderit earum aliquid ut suscipit, dolores a aperiam at dignissimos tenetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi voluptate, magnam vero laboriosam quidem unde quam alias corporis deleniti porro nostrum minima molestiae consequuntur, placeat ea consequatur magni obcaecati.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae minus quae placeat ea aliquid dolor reiciendis perspiciatis voluptatem praesentium accusamus tempora cum natus ducimus magni possimus aut est, iusto ullam?
       
      </p>
      </div>
    
   </div>
  )
}