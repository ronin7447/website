import Image from "next/image";
// import Link from "next/link";
import bannerImg from "@/public/67A02062-Enhanced-NR.jpg"
import Link from "next/link";
import firstLogo from "@/public/sponsors/first-horz-rgb.png"
import firstDarkLogo from "@/public/sponsors/first-dark.png"
export default async function Home() {
  // const str = await fetchString();

  // New cards data

  return (
    <div>
      <div className="max-w-[120rem] mx-auto mb-10 md:mb-16">
        <div className="mx-auto min-w-full">
          <div className="relative box bg-blend-overlay mx-auto text-white bg-gray-400 min-h-[60vh] h-full max-h-screen" style={{ aspectRatio: "4/1", maxWidth: "100%" }}>
            {/* <div className="abis= z-[-10] w-full min-h-[60vh] h-full max-h-screen bg-black"></div> */}
            <Image src={bannerImg} sizes="546px" alt="" quality={75} className="object-cover top-0 right-0 w-full h-auto z-0"
              style={{ aspectRatio: "2/3", minHeight: "60vh", maxHeight: "100vh", backgroundPosition: "center", backgroundSize: "contain", objectFit: "cover" }}
              placeholder="data:image/jpeg;base64,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"
              priority
              layout="fill"
            // blurDataURL=""
            />
            <div className="relative z-10 w-full min-h-[60vh] h-full max-h-screen flex justify-start items-center bg-[rgba(0,0,0,0.40)]">
              <div className="w-full">
                <div className="max-w-screen-xl mx-auto px-6">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Rōnin Robotics <span className="whitespace-nowrap">Team 7447</span></h1>
                  <p className="mt-4 text-lg sm:text-xl">Rookie High School FIRST® Robotics Competition Team, from Portola High School, Irvine, CA <span className="whitespace-nowrap">since 2019</span>.</p>
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
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">About Rōnin Robotics</h1>
        <p className="text-lg sm:text-xl px-6 sm:px-0">
          Rōnin Robotics Team 7447 consists of 30+ members from Portola High School in Irvine, CA, who participate in FIRST® Robotics Competitions along with thousands of teams and students worldwide.
          Our team strives to provide real-world engineering experiences through competitive robotics and values a sense of community and teamwork while implementing various innovative techniques to challenge young minds.
          We hope to inspire and empower students with the skills for them to pursue passions in STEM and become leaders of innovation.

        </p>
      </div>
      <div className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">Our Mission</h1>
        <p className="text-lg sm:text-xl px-6 sm:px-0">
          Formed in 2019, Rōnin Robotics is dedicated to providing real-world engineering and FIRST® Robotics experiences within our local community.
          As a high school team, we offer students the opportunity to explore STEM and robotics through hands-on learning and teamwork.
          Our goal is to inspire and empower the next generation of innovators with the skills and confidence to pursue their passions and become future leaders in technology.

        </p>
      </div>

      <div className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">About FIRST®</h1>
        <div className="sm:flex items-center block">
          <div className="w-full md:w-3/5 mr-0 md:mr-12">
            <div className="block md:hidden w-full px-6 mb-8 sm:w-4/5 mx-auto">
              <Image src={firstLogo} alt="FIRST" className="dark:hidden block" />
              <Image src={firstDarkLogo} alt="FIRST" className="hidden dark:block" />
            </div>
            <p className="text-lg sm:text-xl px-6 sm:px-0">
              FIRST® (For Inspiration and Recognition of Science and Technology) is a global nonprofit founded in 1989 by inventor Dean Kamen to inspire young people to become leaders in science and technology. Through hands-on robotics programs, FIRST helps students build technical skills, teamwork, and confidence—preparing them for future careers in STEM.
              The FIRST® Robotics Competition (FRC), challenges high school teams to design, build, and program industrial-sized robots to compete in themed games, and pushes students to innovate, collaborate, and think like engineers.
            </p>
          </div>
          <div className="hidden md:block md:w-2/5">
            <Image src={firstLogo} alt="FIRST" className="dark:hidden block" />
            <Image src={firstDarkLogo} alt="FIRST" className="hidden dark:block" />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl sm:px-6 mt-16 mb-24 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">Contact us</h1>
        <p className="text-lg sm:text-xl px-6 sm:px-0 ui-content">
          Email: <Link href="mailto:first.robotics.portola@gmail.com" className="a-link">first.robotics.portola@gmail.com</Link><br />
          Follow us on Instagram: <Link href="https://www.instagram.com/frc7447/" className="a-link">@frc7447</Link><br />
          Visit our GitHub repositories: <Link href="https://github.com/ronin7447" className="a-link">@ronin7447</Link><br /><br />
          Portola High School (Irvine Unified School District)<br />
          1001 Cadence, Irvine, CA 92618
        </p>
      </div>

    </div>
  )
}