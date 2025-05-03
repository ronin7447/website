"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; // Import useState and useEffect

interface NotificationBannerProps {
  title: string;
  content: string;
  link?: {
    url: string;
    text: string;
  };
  backgroundColor?: string;
  textColor?: string;
  onClose: () => void;
}

export default function NotificationBanner({
  title,
  content,
  link,
  backgroundColor = "bg-blue-100 dark:bg-blue-900",
  textColor = "text-blue-800 dark:text-blue-100",
  onClose,
}: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(false); // State to control opacity

  useEffect(() => {
    // Set visibility to true shortly after mounting to trigger the transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Small delay to ensure initial opacity-0 is applied

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Apply opacity based on isVisible state
    <div className={`pt-3 pb-3 absolute mx-auto ${backgroundColor} ${textColor} w-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* ... existing inner content ... */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-4 px-6">
        <div className="flex-grow">
          <p className="font-semibold text-lg leading-tight">{title}</p>
          <p className="text-base leading-tight mt-0.5 sm:mt-0">
            {content}{" "}
            {link && (
              <Link href={link.url} className="underline font-medium hover:opacity-80">
                {link.text}
              </Link>
            )}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Dismiss notification"
          className={`cursor-pointer ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg inline-flex items-center justify-center h-8 w-8 ${textColor} hover:bg-black/10 dark:hover:bg-white/10 focus:ring-2 focus:ring-blue-400`}
        >
          <span className="sr-only">Dismiss</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
