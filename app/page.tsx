import Image from "next/image";
import bannerImgVertical from "@/public/robot_images/67A02062-Enhanced-NR.jpg"
// import bannerImg from "@/public/banner/67A02981_sm.jpg"
// import bannerImgLG from "@/public/robot_images/67A02062-Enhanced-NR_LG.jpg"
// import bannerImgXL from "@/public/robot_images/67A02062-Enhanced-NR_XL.jpg"
import firstLogo from "@/public/sponsors/first-horz-rgb.png"
import firstDarkLogo from "@/public/sponsors/first-dark.png"
import ContactCard from "./components/ContactCard";
import ContentLayout from "./components/ContentLayout";
import Banner from "./components/Banner"; // Import the new Banner component
import bannerImgMD from "@/public/banner/67A02981_lg.jpg"
import mediaTeamImg from "@/public/media/67A03021.jpg"
const pageContent = {
  content: [
    {
      title: "About Rōnin Robotics",
      titleColor: "text-blue-500 dark:text-blue-400",
      subtitle: "Inspiring students through robotics and STEM.",
      description: `Rōnin Robotics Team 7447 consists of 65+ members from Portola High School in Irvine, CA, who participate in FIRST® Robotics Competitions along with thousands of teams and students worldwide. We are student-led and organized into mechanical, electrical, programming, CAD, and business subteams. From kickoff to competition, members plan, prototype, machine, wire, code, test, and document complete industrial-level robots within six weeks, then share our work through demos, workshops, and community events.`,
      imgUrl: null,
    },
    {
      title: "Our Mission",
      titleColor: "text-sky-600 dark:text-sky-400",
      subtitle: "Empowering students through STEM and hands-on innovation.",
      description: `Formed in 2019, Rōnin Robotics is dedicated to providing real-world engineering and FIRST® Robotics experiences within our local community. As a high school team, students don't need to have any previous experience to join. We offer students the opportunity to explore STEM and robotics through hands-on learning and teamwork. Our goal is to inspire and empower the next generation of innovators with the skills and confidence to pursue their passions and become future leaders in technology.`,
      imgUrl: null,
      imgBelow: mediaTeamImg,
      altText: "Rōnin Robotics Team Members Cheer at FRC Aerospace Valley Regional 2025.",
    },
  ],
}


export default function Home() {

  return (
    <div>
      {/* Replace the old banner section with the Banner component */}
      <Banner
        title={<>Rōnin Robotics <span className="whitespace-nowrap">Team 7447</span></>}
        subtitle="High School FIRST® Robotics Competition Team, from Portola High School, Irvine, CA since 2019."
        imageSources={{
          default: {
            src: bannerImgVertical,
            blurDataURL: "data:image/jpeg;base64,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"
          },
          md: {
            src: bannerImgMD,
            blurDataURL: "data:image/jpeg;base64,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"
          }
        }}
        imageAlt="Ronin Robotics 7447 Robot at OC Regional 2025."
        imageCredit="Jun Yu"
        useBlur={false}
        imagePriority={true} // Make the LCP image priority,
        minHeight={"70vh"}
        heroButton={
          {
            text: "Explore",
            link: "/about",
            color: "sky",
            enable: true
          }
        }
      />

      <ContentLayout content={pageContent.content} />
      <div className="max-w-screen-xl sm:px-6 mt-8 md:mt-8 mb-12 md:mb-16 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-[550] tracking-tighter px-6 sm:px-0 text-blue-600 dark:text-blue-500">About FIRST®</h1>
        <h1 className="text-3xl sm:text-4xl font-[550] tracking-tighter px-6 sm:px-0 mb-8">Where STEM meets innovation and teamwork.</h1>
        <div className="sm:flex items-center block">
          <div className="w-full md:w-3/5 mr-0 md:mr-12">
            <div className="block md:hidden w-full px-6 mb-8 sm:w-4/5 mx-auto max-w-md">
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

      <ContactCard />
    </div>
  );
}