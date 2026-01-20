import Image from "next/image";
import iusdImg from "@/public/sponsors/iusd.png";
import ghfImg from "@/public/sponsors/ghf-dark.png";
import fabworksImg from "@/public/sponsors/fabworks.svg";
import simplyOrthodoniticsImg from "@/public/sponsors/simply-orthodontics.png";
import simplyOrthodoniticsImgBlack from "@/public/sponsors/simply-orthodonitics-black.png";
import fabworksImgDark from "@/public/sponsors/fabworks-dark.svg";
// import portolaImg from "@/public/sponsors/portola.png";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { Metadata } from "next";
import anoChemImg from "@/public/sponsors/anochem.png";
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

const moreSponsors = [
  {
    name: "Fabworks",
    url: "https://fabworks.com/",
    imgSrc: fabworksImg,
    darkImgSrc: fabworksImgDark
  },
  {
    name: "Simply Orthodontics",
    url: "https://www.soirvine.com/",
    imgSrc: simplyOrthodoniticsImgBlack,
    darkImgSrc: simplyOrthodoniticsImg
  },
  {
    name: "AnoChem Coatings",
    url: "https://anochem.com/",
    imgSrc: anoChemImg,
  }
];

export default function Home() {



  // New cards data

  return (
    <div>

      <div className="max-w-screen-xl sm:px-6 mt-12 mb-24 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-[590] tracking-tighter px-6 sm:px-0 mb-8 ">Our Sponsors</h1>
        <p className="text-lg sm:text-xl px-6 sm:px-0">
          We are incredibly grateful to our sponsors for their generous support and belief in our team.
          Your contributions help us innovate, grow, and compete at the highest level in FIRST® Robotics.
        </p>

        <div className="mt-12 space-y-12 md:space-y-16">
          <div>
            <div className="max-w-screen-xl mx-auto">
              <h1 className={`text-2xl sm:text-3xl font-[550] tracking-tighter px-6 sm:px-0 text-sky-600 dark:text-blue-300`}><Link href={"https://iusd.org/"} rel="nofollow">Irvine Unified School District</Link></h1>
              <div className="md:flex block mt-8">
                <div className="w-full block md:hidden mb-6 px-6 ">
                  <Link href={"https://iusd.org/"} rel="nofollow"><Image src={iusdImg} alt="IUSD" className="w-full h-auto max-w-[420px] mx-auto bg-white p-2" /></Link>
                
              </div>
                <div className="w-full md:w-3/5 mr-0 md:mr-12">
                  <p className="text-lg sm:text-xl px-6 sm:px-0 whitespace-pre-line">
                    Established in 1972, Irvine Unified School District has been frequently recognized among the top school systems in California and the United States.
                    As a student-led team at Portola High School, we benefit from IUSD facilities, safety oversight, and STEM programs that make it possible for us to meet, prototype, and compete in FIRST® Robotics.
                    The district’s support empowers students in Portola High School to practice real-world engineering and leadership.
                </p>
                </div>
                
              <div className="w-full md:w-2/5 md:block hidden">
                <Link href={"https://iusd.org/"} rel="nofollow"><Image src={iusdImg} alt="IUSD" className="w-full h-auto max-w-[420px] mx-auto bg-white p-2" /></Link>
              </div>
              </div>
            </div>
          </div>
        </div>
         <div className="mt-12 space-y-12 md:space-y-16">
          <div>
            <div className="max-w-screen-xl mx-auto">
              <h1 className={`text-2xl sm:text-3xl font-[550] tracking-tighter px-6 sm:px-0 text-red-600 dark:text-red-300`}><Link href={"https://ghaasfoundation.org/"} rel="nofollow">Gene Haas Foundation</Link></h1>
              <div className="md:flex block mt-8">
                <div className="w-full block md:hidden mb-6 px-6">
                  <Link href={"https://ghaasfoundation.org/"} rel="nofollow"><Image src={ghfImg} alt="Gene Haas Foundation" className="w-full h-auto max-w-[220px] mx-auto" /></Link>
                </div>
                <div className="w-full md:w-3/5 mr-0 md:mr-12">
                  <p className="text-lg sm:text-xl px-6 sm:px-0 whitespace-pre-line">
                    Haas Automation is the largest machine tool builder in the United States, and one of the largest builders of CNC machines in the world.
                    The company designs and manufactures machine tools and specialized accessory tooling, mostly CNC equipment.
                    The Gene Haas Foundation, created by Gene Haas, extends that impact by advancing manufacturing education.
                    By investing in hands-on learning at high schools, the Gene Haas Foundation helps prepare the next generation of skilled engineers and machinists.
                </p>
                </div>
                
              <div className="w-full md:w-2/5 md:block hidden md:-mt-8">
                <Link href={"https://ghaasfoundation.org/"} rel="nofollow"><Image src={ghfImg} alt="Gene Haas Foundation" className="w-full h-auto max-w-[220px] mx-auto" /></Link>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-18 sm:px-0 px-6">
          {moreSponsors.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.url}
              rel="nofollow"
              className="flex items-center justify-center"
            >
              {sponsor.darkImgSrc ? (
                <>
                  <Image
                    src={sponsor.imgSrc}
                    alt={sponsor.name}
                    className="w-full h-auto max-w-[260px] rounded-md dark:hidden"
                  />
                  <Image
                    src={sponsor.darkImgSrc}
                    alt={sponsor.name}
                    className="w-full h-auto max-w-[260px] rounded-md hidden dark:block"
                  />
                </>
              ) : (
                <Image
                  src={sponsor.imgSrc}
                  alt={sponsor.name}
                  className="w-full h-auto max-w-[260px] rounded-md"
                />
              )}
            </Link>
          ))}
        </div>

        {/* for more sponsors  */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-12 sm:px-0 px-6">
        <div className="relative">
          <Link href="https://www.ghaasfoundation.org/" rel="nofollow"
        >
          <div className="w-full md:w-4/5 h-full opacity-0 hover:opacity-100 absolute inset-0 bg-black/30 backdrop-blur-md rounded-md z-10 text-white transition-all flex items-center">
            <p className="text-2xl font-semibold px-6 lg:mb-2 leading-none">Gene Haas Foundation</p>
          </div>
          <Image src={ghfImg} alt="Gene Haas Foundation" className="w-full md:w-4/5 rounded-md transition-all -z-10" width={350} quality={75} placeholder="blur" />

        </Link>
        </div>
        
      </div> */}
{/* 
        <div className="w-full mx-auto mt-12 sm:px-0 px-6">
          <div className="relative w-1/2 sm:w-1/3 mx-auto">
            <Link href="https://www.ghaasfoundation.org/" rel="nofollow"
            >
              <div className="w-full md:w-4/5 h-full opacity-0 hover:opacity-100 absolute inset-0 bg-black/30 backdrop-blur-md rounded-md z-10 text-white transition-all flex items-center">
                <p className="text-2xl font-semibold px-6 lg:mb-2 leading-none">Gene Haas Foundation</p>
              </div>
              <Image src={ghfImg} alt="Gene Haas Foundation" className="w-full md:w-4/5 rounded-md transition-all -z-10" width={350} quality={75} placeholder="blur" />

            </Link>
          </div>

        </div>


 */}


        <div className=" mt-24 ">
          <div className="px-6 sm:px-0"><h1 className="text-3xl sm:text-4xl font-[590] tracking-tighter mb-8 ">Support Rōnin Robotics</h1></div>
          <div className="px-6 sm:px-0  block md:flex ">
            
            <div className="mb-12 md:mb-0 md:mr-12 w-full md:w-1/2">
              <p className="text-lg md:text-xl ">
              We provide FIRST® and real-world engineering experiences to students at our high school and within our local community, offering meaningful opportunities to explore STEM.
              Your support plays a vital role in our growth and helps us fulfill our mission of inspiring and empowering the next generation of innovators.
              In appreciation of your sponsorship, we&apos;re proud to recognize our sponsors through placements on our robot, team apparel, and website to help showcase your support throughout the season.
            </p>
            <p className="text-lg md:text-xl mt-6">
              Gifts to support Ronin Robotics are processed through Portola High School ASB. Portola High School is a public school in Irvine Unified School District. Contributions may be tax-deductible to the extent permitted by law. You can make check payable to:<br /><br/ >
              <b>Portola High School ASB</b> (with “FIRST Robotics Club” in memo),<br/>
              Attn: Ryan Johnson Room 310, <br />
              1001 Cadence, Irvine, CA 92618.
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
