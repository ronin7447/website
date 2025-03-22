'use client'

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
const title = "Rōnin Robotics"
const navitems = [
    {
        name: "Blog",
        url: "/blog"
    },
    {
        name: "About",
        url: "/about"
    },

]

export default function Navbar() {
    const [navtitle, setNavtitle] = useState<string>("ui-nav-title-show")
    const [pageY, setPageY] = useState(0);
    const [lstupdt, setLstupdt] = useState(new Date().getTime());
    const onScroll = useCallback(() => {
        const { scrollY } = window;
        setPageY(prevPageY => {
            if (prevPageY === 0) {
                setLstupdt(new Date().getTime());
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
    }, [pageY, lstupdt]);

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    useEffect(() => {
        // console.log("PageY updated:", pageY);
    }, [pageY]);


    return (
        // <>
        <div className={"bg-white dark:bg-stone-950 pt-4 sm:px-8 px-6 ui-navbar pb-5"}>
            <div className="max-w-screen-xl mx-auto">
                <div className={"ui-nav-title flex items-center"}>
                    <Image src="/7447logo.png" alt="Rōnin Robotics Logo" width={48} height={48} className="ui-nav-logo mt-[-6px] ml-[-24px]"/>
                    <Link href="/"><h1 translate="no">{title}</h1></Link>
                    {/* d  */}
                    
                </div>
            </div>

        </div>
    )
        {/* <div className={"sm:pt-4 pt-3 flex justify-between sticky top-0 left-0 w-full z-50 ui-navbar sm:px-8 px-6 pb-4 bg-white dark:bg-stone-950 " + " " + navtitle}>
            
            <div className="max-w-screen-xl w-full xl:px-0 mx-auto">
            <ul className="pl-[24px]">
                <li className="ui-nav-inline"><Link href={navitems[0].url}>{navitems[0].name}</Link></li>
                {(navitems.map((item, index) => {
                    if (index === 0) return;
                    return <li className="ui-nav-inline ml-3 sm:ml-6" key={index}><Link href={item.url}>{item.name}</Link></li>
                }))}
            </ul>
            </div>

        </div>
    </> */}
}