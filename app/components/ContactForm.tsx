"use client"
import { useState } from "react";

interface ContactFormProps {
  formName?: string;
}

export default function ContactForm({ formName = 'Contact Form' }: ContactFormProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null); // Reset error on new submission
    setIsSuccess(false); // Reset success state
    setShowOverlay(true); // Show overlay immediately (can act as loading indicator)

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);
    // Convert FormData to an object suitable for URLSearchParams
    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      // Ensure that only string values are added, as URLSearchParams expects strings.
      if (typeof value === 'string') {
        formObject[key] = value;
      }
      // Note: If your form included file inputs, you'd need to handle `value` being a `File` object.
    });
    


    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formObject).toString()
    })
      .then(() => {
        setIsSuccess(true); // Set success state
        myForm.reset(); // Reset form fields on success
        setTimeout(() => {
          setShowOverlay(false);
          setIsSuccess(false); // Reset success state after timeout
        }, 3000);
      })
      .catch(error => {
        console.error("Form submission error:", error);
        setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
        setIsSuccess(false); // Ensure success state is false on error
        // Keep overlay open to show error, maybe add a close button or different timeout logic
        setTimeout(() => {
          setShowOverlay(false);
          setErrorMessage(null); // Reset error after timeout
        }, 5000); // Keep error visible longer
      });
  };

  return (
    <div className="w-full relative">
      {/* Overlay for Success/Error Messages */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-stone-950 flex items-center overflow-hidden border dark:border-gray-700 border-gray-500 rounded-xl p-4 transition-opacity duration-300 z-10 ${
          showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="mb-20 w-full">
          {isSuccess && !errorMessage && (
            <>
              <h1 className="text-2xl tracking-tighter font-medium">Submitted Successfully.</h1>
              <p className="mt-4">Thank you for your message! We will reply to the message through the email provided as soon as possible.</p>
            </>
          )}
          {errorMessage && (
            <>
              <h1 className="text-2xl tracking-tighter font-medium text-red-600 dark:text-red-400">Submission Failed</h1>
              <p className="mt-4">There was an error submitting your message:</p>
              <p className="mt-2 text-sm text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/30 p-2 rounded">{errorMessage}</p>
              <p className="mt-4">Please try again later or contact us directly via email.</p>
            </>
          )}
          {/* Optional: Add a loading indicator state */}
          {!isSuccess && !errorMessage && showOverlay && (
             <p className="mt-4">Submitting...</p> // Basic loading indicator
          )}
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6 mx-auto" onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field" name={formName}>
        {/* Netlify needs this hidden input for form identification */}
        <input type="hidden" name="form-name" value={formName} />
        <div className="hidden">
          <label htmlFor="bot-name">
          Don’t fill this out if you’re human:
          </label>
         <input name="bot-name" />
        </div>
        {/* ... existing form fields ... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-semibold">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-600"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block font-semibold">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-600"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="organization" className="block font-semibold">
            Company/Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-600"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-600"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="float-right px-6 py-2 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 cursor-pointer mr-1 mb-1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
