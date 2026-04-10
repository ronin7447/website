import Image from "next/image";
// import bannerImgVertical from "@/public/robot_images/67A02062-Enhanced-NR.jpg"
import bannerImgVertical from "@/public/robot_images/67A05909.jpg";
// import bannerImg from "@/public/banner/67A02981_sm.jpg"
// import bannerImgLG from "@/public/robot_images/67A02062-Enhanced-NR_LG.jpg"
// import bannerImgXL from "@/public/robot_images/67A02062-Enhanced-NR_XL.jpg"
import firstLogo from "@/public/sponsors/first-horz-rgb.png"
import firstDarkLogo from "@/public/sponsors/first-dark.png"
import ContactCard from "./components/ContactCard";
import ContentLayout from "./components/ContentLayout";
import Banner from "./components/Banner"; // Import the new Banner component
import bannerImgMD from "@/public/robot_images/67A05919.jpg"
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
      description: `Formed in 2018, Rōnin Robotics is dedicated to providing real-world engineering and FIRST® Robotics experiences within our local community. As a high school team, students don't need to have any previous experience to join. We offer students the opportunity to explore STEM and robotics through hands-on learning and teamwork. Our goal is to inspire and empower the next generation of innovators with the skills and confidence to pursue their passions and become future leaders in technology.`,
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
        subtitle="High School FIRST® Robotics Competition Team, from Portola High School, Irvine, CA since 2018."
        imageSources={{
          default: {
            src: bannerImgVertical,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCABkAEMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC3ijFOxRirMxuKMU/FGKAGYpMU/FGKAGYoxTsUYoAZiinYooAlxRiiQHb6VAQf8mpuWkT8DvSZUnGRmq+PanwD96KVx8pNijFOYgNjFJuHqKdybDcUmKcWX+8KaZEHV1/OncLBiilDKRkNmii4couXPDkYpJEG0kdqNwJGGzzSvgocHnPSpLIiCFBPQ1G7OuTEvOO9LISpTJIzVc3eGKldwzjNFguWo5GeNflG8jmmQsyF/MC5PTAqP7YBGABjHXnrUX24xSHCghqLATyl5HAQr07qKi2TFc7kA/3RTF1BncNtA4/lUZnOWcnOTQIux3GI1BGSB1ziiq0b/u16dKKLDuWDd57D8qQ3bdh+lVM0uaqxNyw1wzYz+FUJQzSN3qUyADHc1Gkm2Q/zpDs+o2NDlgQckYGae1rwMOv5U0yku2eR1FRSn5+PQUBYtRQskmRgYORipzcSjgn9KzkzknnjmrAbNMVmT/aZPUflRUGaKdhXDdTXb5TRmkPNAEO/3o3n1qQqKTaKnlL9oxm8+tPik2yKS2Bnk0m0UbR6Ucoc7LAuIyAWPO7J4qOaYMoVWBG4np0qLYPSgKAelFhXHZopKKokfmjdSUlADs0lJRQAtFFJQAUGikoAWikxRQA6koooAKTNFFAC0UUUAJRRRQAUUUUAf//Z"          },
          md: {
            src: bannerImgMD,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAApAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC95wJK7Tx70oUfeBIzSCMA9RzT+OlAxpRWY7uaQqijIApxBPK01y205AH40gHseGz2FQZURn1z1qUuCCCV5GOtRME2n5xTAjJVtuX+lEEO1SqnC7unWqly2wKMg454qBbhl4GevrRYVzRbZ5isp2k5+Y0si/L/AKxTyOKz5ZW+ZckfjUIZjg9uh5osFzSYxIVPDZ7AmmkqX+UAcdKiiiLohLoMDoTT0gYOWMsZ/GmA6il8s/3k/wC+qKQDjcn1P5Unnn3/ADqvn3pd1VYm5KZmP/66aZGPemZpM+9AD97etGT6mmZqNpcEjpQ9BpNjpucA8014kUA7uSeOKjZg2Pm6d8UjEMoG7p0qbl8jJzII1JKA/Wo/PjPWPv2pjEMCN3WlW33BSJByfSncTjYnWRXXhcUuaYsZHO4AE4GaTeMkehxTTJasPzRTNwopiHZpN1IaQUAO3UUlIaAFNQurFiQalpDRYE7EO1vakw3tUpopcqHzMiw3pTxJIuMY4pTSUWDmYvnScZAOOaRMgUUoosFxc0UGimI//9k="          }
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