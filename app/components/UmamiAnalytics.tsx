"use client";

// import { useState } from "react";
import Script from "next/script";

export default function UmamiAnalytics() {
//   const [loadFallbackScript, setLoadFallbackScript] = useState(false);
  const websiteId = "eebc5da4-7e5f-4dd0-ae60-1c34394f6063"; // Store ID in a variable

  return (
    <>
    <Script
          id="umami-fallback" // Add unique id
          defer
          src="/insights/script.js"
          data-website-id={websiteId}
          data-host-url="/insights"
          strategy="lazyOnload"
          data-domains="7447.team"
          onError={(e) => {
            console.error("Failed to load fallback Umami script:", e);
          }}
        />
      {/* Primary Umami Cloud Script
      <Script
        id="umami-cloud" // Add unique id
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={websiteId}
        strategy="lazyOnload"
        onError={() => {
          console.warn("Failed to load Umami Cloud script, attempting fallback.");
          setLoadFallbackScript(true);
        }}
      /> */}
      {/* Fallback Self-Hosted Script - Renders only if the primary script fails */}
      {/* {loadFallbackScript && (
        <Script
          id="umami-fallback" // Add unique id
          defer
          src="/insights/script.js"
          data-website-id={websiteId}
          data-host-url="/insights"
          strategy="lazyOnload"
          data-domains="7447.team"
          onError={(e) => {
            console.error("Failed to load fallback Umami script:", e);
          }}
        />
      )} */}
    </>
  );
}
