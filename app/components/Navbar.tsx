'use client'

import { useState, useCallback, useEffect, useRef } from "react"
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
        name: "Robots",
        url: "/robot"
    },
    {

        name: "Workshops",
        url: "/workshops"
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
// const notification = {
//     show: true, // Control initial visibility
//     title: "We invite you to our 2025 team banquet!",
//     content: "We'll hold our team banquet on May 29th, 2025, and we look forward to seeing you there! ", 
//     link: { url: "/banquet?utm_source=promotion_banner", text: "Click here to learn more." },
//     backgroundColor: "bg-blue-100 dark:bg-blue-900",
//     textColor: "text-blue-800 dark:text-blue-100",
//     ignorePath: ["/banquet"],
// };
const notification = {
    show: true, // Control initial visibility
    title: "Join Rōnin Robotics to design, build, and compete!",
    content: "A 65+ member community where students collaborate on 120-pound robots; no experience required.",
    link: { url: "/join", text: "Click here for the 2026-27 interest form." },
    backgroundColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-100",
    ignorePath: ["/banquet"],
};

export default function Navbar() {
    const [navtitle, setNavtitle] = useState<string>("ui-nav-title-show")
    const [showNotification, setShowNotification] = useState(false); // State for banner visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pageY = useRef(0);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();
    const isIgnoredPath = notification.ignorePath.some(path => pathname.startsWith(path));


    const onScroll = useCallback(() => {
        if (isMenuOpen) {
            return;
        }

        const { scrollY } = window;
        const previousPageY = pageY.current;

        if (previousPageY === 0) {
            pageY.current = scrollY;
        } else if (scrollY - previousPageY > 200) {
            setNavtitle("ui-nav-title-hide");
            pageY.current = scrollY;
        } else if (previousPageY - scrollY > 200) {
            setNavtitle("ui-nav-title-show");
            pageY.current = scrollY;
        }
    }, [isMenuOpen]);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [onScroll]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const desktopViewport = window.matchMedia("(min-width: 640px)");
        const closeMenuOnDesktop = () => {
            if (desktopViewport.matches) {
                setIsMenuOpen(false);
            }
        };

        desktopViewport.addEventListener("change", closeMenuOnDesktop);

        return () => {
            desktopViewport.removeEventListener("change", closeMenuOnDesktop);
        };
    }, []);

    useEffect(() => {
        pageY.current = window.scrollY;

        if (isMenuOpen) {
            setNavtitle("ui-nav-title-show");
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMenuOpen]);

    const handleCloseNotification = () => {
        setShowNotification(false);
        // Optionally, save this preference to localStorage/sessionStorage
        sessionStorage.setItem('notificationDismissed-' + notification.title.toLowerCase().replace(/\s+/g, '-'), 'true');
    };

    // Optional: Check storage on initial load
    useEffect(() => {
      const dismissed = sessionStorage.getItem('notificationDismissed-' + notification.title.toLowerCase().replace(/\s+/g, '-'));
      setShowNotification(dismissed !== 'true' && !isIgnoredPath && notification.show);
    }, [isIgnoredPath]);


    return (
        <>
        <div className={"bg-white dark:bg-stone-950 pt-4 sm:px-8 px-6 ui-navbar"}>
            <div className="max-w-screen-xl mx-auto">
                <div className={"ui-nav-title flex items-center"}>
                    <Image src="/7447logo.png" alt="Rōnin Robotics Logo" width={48} height={48} className="ui-nav-logo mt-[-3px] ml-[-12px] sm:ml-[-24px]" quality={50} priority/>
                    <Link href="/"><h1 translate="no">{title}</h1></Link>
                    {/* d  */}

                </div>
            </div>
        </div>
        {/* Sticky container for nav links AND notification */}
        <div className={"sticky top-0 left-0 w-full z-50 ui-navbar transition-transform duration-300" + " " + navtitle}>
            {/* Nav controls background */}
            <div className="sm:pt-4 pt-1 flex justify-between sm:px-8 px-6 sm:pb-4 pb-1.5 bg-white dark:bg-stone-950">
                <div className="max-w-screen-xl w-full xl:px-0 mx-auto">
                    <button
                        ref={menuButtonRef}
                        type="button"
                        className="flex min-h-11 w-full items-center pl-[36px] text-left text-lg font-[660] sm:hidden cursor-pointer"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span>{isMenuOpen ? "Close" : "Menu"}</span>
                    </button>

                    <nav aria-label="Primary navigation" className="hidden sm:block">
                        <ul className="pl-[24px]">
                            <li className="ui-nav-inline"><Link href={navitems[0].url}>{navitems[0].name}</Link></li>
                            {(navitems.map((item, index) => {
                                if (index === 0) return null; // Use null instead of return;
                                return <li className="ui-nav-inline ml-3 sm:ml-4" key={index}><Link href={item.url}>{item.name}</Link></li>
                            }))}
                        </ul>
                    </nav>
                </div>
            </div>

            {isMenuOpen && (
                <nav
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    className="absolute left-0 top-full z-10 w-full bg-white px-6 pb-3 dark:bg-stone-950  sm:hidden"
                >
                    <div className="border-b border-stone-200 dark:border-stone-700"></div>
                    <ul className="mx-auto max-w-screen-xl mt-3">
                        {navitems.map((item) => (
                            <li key={item.url}>
                                <Link
                                    href={item.url}
                                    className="flex min-h-12 items-center py-3 pl-[36px] text-xl font-[660] tracking-tight"
                                    aria-current={pathname === item.url ? "page" : undefined}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
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
