'use client'

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
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
            if (scrollY - prevPageY > 300) {
                setNavtitle("ui-nav-title-hide");
                return scrollY;
            } else if (prevPageY - scrollY > 300) {
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
        <>
        <div className={"bg-white dark:bg-stone-950 pt-4 sm:px-8 px-6 ui-navbar"}>
            <div className="max-w-screen-xl mx-auto">
                <div className={"ui-nav-title"}>
                    <Link href="/"><h1 translate="no">{title}</h1></Link>
                    {/* d  */}
                </div>
            </div>

        </div>
        <div className={"sm:pt-4 pt-3 flex justify-between sticky top-0 left-0 w-full z-50 ui-navbar sm:px-8 px-6 pb-4 bg-white dark:bg-stone-950 " + " " + navtitle}>
            
            <div className="max-w-screen-xl w-full xl:px-0 mx-auto">
            <ul className="">
                <li className="ui-nav-inline"><Link href={navitems[0].url}>{navitems[0].name}</Link></li>
                {(navitems.map((item, index) => {
                    if (index === 0) return;
                    return <li className="ui-nav-inline ml-3 sm:ml-6" key={index}><Link href={item.url}>{item.name}</Link></li>
                }))}
            </ul>
            </div>

            {/* <ul className="">
                <Link href="/search">
                    <li className="ui-nav-inline material-symbols-rounded hover:[--font-FILL:1] hover:[--font-wght:900]">
                        Search
                    </li>
                </Link>
            </ul> */}
        </div>
    </>
    )
}