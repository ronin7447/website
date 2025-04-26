import Image from "next/image";
import bannerImg from "@/public/robot_images/67A02062-Enhanced-NR.jpg"
// import bannerImgLG from "@/public/robot_images/67A02062-Enhanced-NR_LG.jpg"
// import bannerImgXL from "@/public/robot_images/67A02062-Enhanced-NR_XL.jpg"
import Link from "next/link";
import firstLogo from "@/public/sponsors/first-horz-rgb.png"
import firstDarkLogo from "@/public/sponsors/first-dark.png"
import ContactForm from "./components/ContactForm";
import ContentLayout from "./components/ContentLayout";
import Banner from "./components/Banner"; // Import the new Banner component

const pageContent = {
  content: [
    {
      title: "About Rōnin Robotics",
      titleColor: "",
      subtitle: "",
      description: `Rōnin Robotics Team 7447 consists of 30+ members from Portola High School in Irvine, CA, who participate in FIRST® Robotics Competitions along with thousands of teams and students worldwide. Our team strives to provide real-world engineering experiences through competitive robotics and values a sense of community and teamwork while implementing various innovative techniques to challenge young minds. We hope to inspire and empower students with the skills for them to pursue passions in STEM and become leaders of innovation.`,
      imgUrl: null,
    },
    {
      title: "Our Mission",
      titleColor: "",
      subtitle: "",
      description: `Formed in 2019, Rōnin Robotics is dedicated to providing real-world engineering and FIRST® Robotics experiences within our local community. As a high school team, we offer students the opportunity to explore STEM and robotics through hands-on learning and teamwork. Our goal is to inspire and empower the next generation of innovators with the skills and confidence to pursue their passions and become future leaders in technology.`,
      imgUrl: null,
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
            src: bannerImg,
            blurDataURL: "data:image/jpeg;base64,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"
          }
        }}
        imageAlt="Ronin Robotics 7447 Robot at OC Regional 2025."
        imageCredit="Jun Yu"
        useBlur={false}
        imagePriority={true} // Make the LCP image priority
      />

      <ContentLayout content={pageContent.content} />
      <div className="max-w-screen-xl sm:px-6 mt-10 md:mt-16 mb-10 md:mb-16 mx-auto">
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

      <div className="max-w-screen-xl sm:px-6 mt-12 md:mt-24 mb-24 mx-auto">
        <div className="px-6 sm:px-0 block md:flex">
          <div className="w-full md:w-1/2 md:mr-12 mb-8 md:mb-0 ">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-8">Contact us</h1>
            <div className="flex flex-wrap gap-3 md:gap-2 mb-6">
              <Link href="mailto:first.robotics.portola@gmail.com"
                className="inline-flex items-center px-4 py-2 mb-2 bg-white dark:bg-stone-800 border border-gray-300 dark:border-gray-700 rounded-full font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-stone-700 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                first.robotics.portola@gmail.com
              </Link>

              <div className="flex gap-3 md:gap-2 flex-nowrap mt-0 ">
                <Link href="https://www.instagram.com/frc7447/"
                  className="inline-flex items-center px-4 py-2 mb-2 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-800 dark:to-pink-800 rounded-full font-medium text-white hover:from-purple-600 hover:to-pink-600 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @frc7447
                </Link>

                <Link href="https://github.com/ronin7447"
                  className="inline-flex items-center px-4 py-2 mb-2 bg-gray-800 dark:bg-gray-700 rounded-full font-medium text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                  <svg className="w-6 h-6 mr-1.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                  <span className="">@ronin7447</span>
                </Link>
              </div>
            </div>

            <p className="text-lg sm:text-xl mb-4 mt-4 md:mt-8">
              <span className="font-semibold">Portola High School (Irvine Unified School District)</span><br />
              1001 Cadence, Irvine, CA 92618
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <ContactForm formName="Contact Form" />
          </div>
        </div>
      </div>
    </div>
  );
}