
// import Link from "next/link";
import bannerImg from "@/public/robot_images/67A02955.jpg"; // Keep for default
import bannerImgXL from "@/public/robot_images/67A02955_XL.jpg"; // Keep for large screens
import BotIntroCard from "../components/BotIntroCard";
import { Metadata } from "next";
import Banner from "../components/Banner"; // Import the Banner component

export const metadata: Metadata = {
  title: "The Robots We Built - Rōnin Robotics (FRC Team 7447)",
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
     {/* Replace the existing banner div with the updated Banner component usage */}
     <Banner
        title={<>The <span className="whitespace-nowrap">Robots</span> We Built</>}
        subtitle="Rookie FIRST® Robotics Team from Portola High School, Irvine, CA since 2019."
        imageSources={{
          default: {
            src: bannerImg,
            blurDataURL: "data:image/jpeg;base64,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"
          },
          lg: { // Use 'lg' breakpoint based on previous class 'hidden lg:block'
            src: bannerImgXL,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAxAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCuFfzIwqNtI+Zu1SRQ5kEm1vl/KoxvDIVYhQMMuTx71NvIRdoL89u1ICqbWItw79f7opqwRhuJTnnqn/16vxAugZ0Ct3FQzIBvIA+XGOKLlJXK8UCFWQTKS2McGrNrbGNGXepJYYxkU5I0WblO+PT0q0fLEbYX3PPJo3FaxWFvHxhWGfvc1BLaZiVIFPUk7mFXIssjnJGDgVFiRm2BuvrQG5S8h1VAVO4Z4HNJHblAZijMB91cdTVmaHlUPpziqxWRjlM4A7GlcprQm2sRHJJ12NwR9aZJIyPIwGCu38aliaURrtZuBkjGc0szPGgJZju9D27f1pkFZrVpT5kSgI3IBOMUVHNIxZdoZflH4+9FMC5aygookcgbz+VKJYCjCQyKBnG360sUa/YWliDZRsnd39cVBkK+RFgHnB5zSAvW2ye0wC2ASue+KZOuFkAJ42/1ospXZSrHC8hRjGMH/wCvTp1J3gAnOMcUmVHccFALt1KkEfkKlCkqFBGSRnimxLlmyODjr9KkQfxegqkKW5Eg5cA8E9M1HPGkK4kbGCaQPhmGcfNxTpmie6WOUAgcfMepoEiCQCRxtbcuMZHanQw4BJzzxVlYlVdqjaPamzMIU3HcecVJd76ELR7FyGYEDsM1A8jghv48fKR6fSpnLzqHiyNp60vlswUZaMjq2M0XBplOZxI+SrKQMHFFK4QyNvk3EHGQuKKZNmLbzFYTGTwTn6VLb6gYHwyBscbgOcVRQnPHQ1OiAneRge9AF4SrKWkQHaGznHX1onkCOoz7nrToHj8lQrAjGKbcW3m4w5G3gGkUtHqhpd25iddo6g0+bdJDtYquWzwcfhUK2dwn3J8fhQ9tdN1ZG5zT1D3GwgiKzLuB29SSaawuHcNvUZOR6imm3uh/yzB+hpwtrluyoPUnJpalWgTK00akySbvwqRVW6iy/TPQGovsTOczTM/sOBVmOMRIEUYAosS5K2iGC1RVKqzAHrzSOrohYSnA55UVMSfSopjlAv8AeIFMm7MxonDH5snPPHeir1sA0Zdh95iaKLBzMzoujf7wp0v3xRRTEWrP75+tW5ug+tFFZPc3hsS0tFFaGACiiigApDRRQAhqKX70f+9/Q0UUAMtf+PaP6UUUUAf/2Q=="
          }
        }}
        imageAlt="Ronin Robotics Team Robot Photo"
        imageCredit="Jun Yu"
        imagePriority={true} // This is likely the LCP
        // aspectRatio is handled internally by fill layout now
        prioritySourceKey={["lg", "default"]} // Specify which image sources to prioritize
        useBlur={true}
     />

    <BotIntroCard />


    <div className="max-w-screen-xl sm:px-6 mb-10 md:mb-20 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter px-6 sm:px-0 mb-8 md:mb-12"></h1>
      <p className="text-xl px-6 sm:px-0">
      </p>
      </div>
      
    
   </div>
  )
}