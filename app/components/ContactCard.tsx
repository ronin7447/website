import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactCard() {
  return (
    <div className="max-w-screen-xl sm:px-6 mt-12 md:mt-24 mb-24 mx-auto">
      <div className="px-6 sm:px-0 block md:flex">
        <div className="w-full md:w-1/2 md:mr-12 mb-8 md:mb-0 ">
          <h1 className="text-3xl sm:text-4xl font-[550] tracking-tighter mb-8">Contact us</h1>
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
  );
}
