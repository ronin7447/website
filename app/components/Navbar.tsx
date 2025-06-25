'use client'

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import NotificationBanner from "./NotificationBanner"; // Import the new component

const title = "Rōnin Robotics"
const navitems = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Robot",
        url: "/robot"
    },
    {
        name: "Sponsors",
        url: "/sponsors"
    },
    {
        name: "About",
        url: "/about"
    },

]


// Define notification content (example)
const notification = {
    show: false, // Control initial visibility
    title: "We invite you to our 2025 team banquet!",
    content: "We'll hold our team banquet on May 29th, 2025, and we look forward to seeing you there! ", 
    link: { url: "/banquet?utm_source=promotion_banner", text: "Click here to learn more." },
    backgroundColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-100",
    ignorePath: ["/banquet"]
};

export default function Navbar() {
    const [navtitle, setNavtitle] = useState<string>("ui-nav-title-show")
    const [pageY, setPageY] = useState(0);
    const [showNotification, setShowNotification] = useState(false); // State for banner visibility
    const pathname = usePathname();
    const isIgnoredPath = notification.ignorePath.some(path => pathname.startsWith(path));


    const onScroll = useCallback(() => {
        const { scrollY } = window;
        setPageY(prevPageY => {
            if (prevPageY === 0) {
                return scrollY;
            }
            if (scrollY - prevPageY > 200) {
                setNavtitle("ui-nav-title-hide");
                return scrollY;
            } else if (prevPageY - scrollY > 200) {
                setNavtitle("ui-nav-title-show");
                return scrollY;
            }
            return prevPageY;
        });
    }, []);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [onScroll]);

    useEffect(() => {
        // console.log("PageY updated:", pageY);
    }, [pageY]);

    const handleCloseNotification = () => {
        setShowNotification(false);
        // Optionally, save this preference to localStorage/sessionStorage
        sessionStorage.setItem('notificationDismissed', 'true');
    };

    // Optional: Check storage on initial load
    useEffect(() => {
      const dismissed = sessionStorage.getItem('notificationDismissed');
      if (dismissed === 'true') {
        setShowNotification(false);
      } else {
        if (isIgnoredPath) {
            setShowNotification(false);
        } else {
            setShowNotification(notification.show);
        }
        
      }
    }, []);


    return (
        <>
        <div className={"bg-white dark:bg-stone-950 pt-4 sm:px-8 px-6 ui-navbar"}>
            <div className="max-w-screen-xl mx-auto">
                <div className={"ui-nav-title flex items-center"}>
                    <Image src="/7447logo.png" alt="Rōnin Robotics Logo" width={48} height={48} className="ui-nav-logo mt-[-6px] ml-[-24px]" quality={50} priority/>
                    <Link href="/"><h1 translate="no">{title}</h1></Link>
                    {/* d  */}

                </div>
            </div>
        </div>
        {/* Sticky container for nav links AND notification */}
        <div className={"sticky top-0 left-0 w-full z-50 ui-navbar transition-transform duration-300" + " " + navtitle}>
            {/* Nav links background */}
            <div className="sm:pt-4 pt-3 flex justify-between sm:px-8 px-6 pb-4 bg-white dark:bg-stone-950">
                <div className="max-w-screen-xl w-full xl:px-0 mx-auto">
                    <ul className="pl-[24px]">
                        <li className="ui-nav-inline"><Link href={navitems[0].url}>{navitems[0].name}</Link></li>
                        {(navitems.map((item, index) => {
                            if (index === 0) return null; // Use null instead of return;
                            return <li className="ui-nav-inline ml-3 sm:ml-4" key={index}><Link href={item.url}>{item.name}</Link></li>
                        }))}
                    </ul>
                </div>
            </div>
            {/* Notification Banner Area */}
            {showNotification && (
                <NotificationBanner
                    title={notification.title}
                    content={notification.content}
                    link={notification.link}
                    backgroundColor={notification.backgroundColor}
                    textColor={notification.textColor}
                    onClose={handleCloseNotification}
                />
            )}
        </div>
    </>
    )
}