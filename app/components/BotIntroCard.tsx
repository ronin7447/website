import CardNavigator from "../components/CardNavigator";
import Link from "next/link";
import limelightImg from "@/public/reefscape/limelight.png"
import swerveImg from "@/public/reefscape/swerve.jpg"
import elevatorImg from "@/public/reefscape/elevator.jpg"
import shooterImg from "@/public/reefscape/shooter.jpg"
import bannerImg from "@/public/robot_images/67A02062-Enhanced-NR.jpg"
import Image from "next/image";

export default function BotIntroCard() {
    return (
        <div className="max-w-screen-xl sm:px-6 mt-16 mb-18 md:mb-18 mx-auto ui-content">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 opacity-80 text-blue-600 dark:text-blue-400">&apos;25 REEFSCAPE</h1>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8 ">Our Robot for the 2025 Season.</h1>
        <p className="text-xl px-6 sm:px-0 mb-8">
          Learn more about our robot for the 2025 season <Link className="a-link" href="/robot/reefscape">REEFSCAPE<sup>SM</sup> presented by Haas: Taketsune</Link>.
        </p>
        <CardNavigator />
        <div className="flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-pl sm:scroll-pl-16 h-[600px] pl-2 pr-2 sm:pl-0 sm:pr-0 ui-intro-cards">
          <div className="ui-intro-card">
              <h2 className="text-3xl font-semibold tracking-tighter">Swerve Drive</h2>
              <Image src={swerveImg} alt="Swerve Drive" className="w-full bg-gray-300 dark:bg-gray-800 h-[300px] rounded-xl mt-6 object-cover" quality={50} />
              <p className="mt-6 text-lg">A fully independent swerve drive system gives our robot smooth, precise movement in any direction. This makes it easy to navigate the field with high performance all the time.</p>
          </div>
          <div className="ui-intro-card">
              <h2 className="text-3xl font-semibold tracking-tighter">Coral Shooter</h2>
              <Image src={shooterImg} alt="Shooter" className="w-full bg-gray-300 dark:bg-gray-800 h-[300px] rounded-xl mt-6 object-cover" quality={50} />
              <p className="mt-6 text-lg">Designed for power and accuracy, our shooter launches &quot;coral&quot; game pieces efficiently from various distances, ensuring consistent scoring.</p>
          </div>
          <div className="ui-intro-card">
              <h2 className="text-3xl font-semibold tracking-tighter">Level 3 Elevator</h2>
              <Image src={elevatorImg} alt="Elevator" className="w-full bg-gray-300 dark:bg-gray-800 h-[300px] rounded-xl mt-6 object-cover" quality={50} />
              <p className="mt-6 text-lg">Our uniquely designed elevator reaches Level 3 on the &quot;reef&quot; with speed and stability, making the upper-level scoring of our robot quick and reliable. </p>
          </div>
          <div className="ui-intro-card">
              <h2 className="text-3xl font-semibold tracking-tighter">Limelight Cameras <span className="whitespace-nowrap">for Alignment</span></h2>
              <Image src={limelightImg} alt="Limelight camera" className="w-full bg-gray-300 dark:bg-gray-800 h-[263px] rounded-xl mt-6 object-cover" quality={50} />
              <p className="mt-6 text-lg">Equipped with two Limelight cameras, our robot can automatically aligns with targets by using AprilTags on the field, helping drivers improve shooting precision and reduce scoring errors.</p>
          </div>
          <div className="ui-intro-card">
              <h2 className="text-3xl font-semibold tracking-tighter">More highlights of <span className="whitespace-nowrap">Taketsune</span></h2>
              <Image src={bannerImg} alt="Limelight camera" className="w-full bg-gray-300 dark:bg-gray-800 h-[263px] rounded-xl mt-6 object-cover" quality={50} />
              <p className="mt-6 text-lg"><Link className="a-link" href="/robot/reefscape">Learn more information and highlights about our new robot for the 2025 season.</Link></p>
          </div>
      </div>
     
          
    </div>
    )
}