import Image, { StaticImageData } from "next/image";

// Define a type for individual image sources
type ImageSource = {
  src: StaticImageData | string;
  blurDataURL?: string;
};

interface BannerProps {
  title: React.ReactNode;
  subtitle: string;
  // Accept an object for image sources at different breakpoints
  imageSources: {
    default: ImageSource; // Required: Default/mobile image
    md?: ImageSource;     // Optional: Medium screens and up
    lg?: ImageSource;     // Optional: Large screens and up
    xl?: ImageSource;     // Optional: Extra-large screens and up
  };
  imageAlt?: string;
  imageCredit?: string;
  imageQuality?: number;
  imagePriority?: boolean; // Apply priority usually to the largest/default visible image
  minHeight?: string;
  imageAspectRatio?: string; // This might need adjustment or removal if aspect ratios differ significantly
  useBlur?: boolean; // Changed from useBlur: boolean;
  overlayOpacity?: number;
  prioritySourceKey?: string[]; // This is a bit unclear, but seems to be for determining which image to prioritize
}

export default function Banner({
  title,
  subtitle,
  imageSources, // Use the new imageSources prop
  imageAlt = "",
  imageCredit,
  imageQuality = 75,
  imagePriority = false,
  minHeight = "60vh",
  imageAspectRatio = "2/3", // Consider if this is still applicable or needs per-source definition
  useBlur = true,
  overlayOpacity = 0.40,
  prioritySourceKey = ['default'],
}: BannerProps) {
  // Determine which image source has priority (e.g., largest defined, or default)
//   const prioritySourceKey = imageSources.xl ? 'xl' : (imageSources.lg ? 'lg' : (imageSources.md ? 'md' : 'default'));

  return (
    <div className="max-w-[120rem] mx-auto mb-10 md:mb-16">
      <div className="mx-auto min-w-full">
        {/* Apply minHeight to the outer relative container */}
        <div className="relative box bg-blend-overlay mx-auto text-white bg-gray-400 h-full max-h-screen" style={{ minHeight, }}>
          {/* Render images conditionally based on screen size using Tailwind classes */}
          {/* Default/Mobile Image (Always rendered, hidden on larger screens if others exist) */}
          <Image
            src={imageSources.default.src}
            alt={imageAlt}
            quality={imageQuality}
            // Show by default, hide if 'md' source exists and screen is md or larger
            className={`object-cover top-0 left-0 w-full h-full z-0 ${imageSources.md ? 'md:hidden' : ''}`}
            style={{
              // Use 100% height to fill the container
              aspectRatio: imageAspectRatio, // Aspect ratio might vary, consider removing or adjusting
              minHeight: minHeight, // minHeight is on the parent
              maxHeight: "100vh",
              backgroundPosition: "center",
              backgroundSize: "cover", // Use cover to fill
              objectFit: "cover"
            }}
            placeholder={useBlur ? "blur" : "empty"}
            blurDataURL={imageSources.default.blurDataURL}
            priority={imagePriority && prioritySourceKey.includes('default')}
            fill // Use fill layout
          />

          {/* Medium Image (Hidden by default, shown on md+, hidden on lg+ if lg exists) */}
          {imageSources.md && (
            <Image
              src={imageSources.md.src}
              alt={imageAlt}
              quality={imageQuality}
              className={`object-cover top-0 left-0 w-full h-full z-0 hidden md:block ${imageSources.lg ? 'lg:hidden' : ''}`}
              style={{ backgroundPosition: "center", backgroundSize: "cover", objectFit: "cover" }}
              placeholder={useBlur && imageSources.md.blurDataURL ? "blur" : "empty"}
              blurDataURL={imageSources.md.blurDataURL}
              priority={imagePriority && prioritySourceKey.includes('md')}
              fill
            />
          )}

          {/* Large Image (Hidden by default, shown on lg+, hidden on xl+ if xl exists) */}
          {imageSources.lg && (
            <Image
              src={imageSources.lg.src}
              alt={imageAlt}
              quality={imageQuality}
              className={`object-cover top-0 left-0 w-full h-full z-0 hidden lg:block ${imageSources.xl ? 'xl:hidden' : ''}`}
              style={{ backgroundPosition: "center", backgroundSize: "cover", objectFit: "cover" }}
              placeholder={useBlur && imageSources.lg.blurDataURL ? "blur" : "empty"}
              blurDataURL={imageSources.lg.blurDataURL}
              priority={imagePriority && prioritySourceKey.includes('lg')}
              fill
            />
          )}

          {/* Extra Large Image (Hidden by default, shown on xl+) */}
          {imageSources.xl && (
            <Image
              src={imageSources.xl.src}
              alt={imageAlt}
              quality={imageQuality}
              className="object-cover top-0 left-0 w-full h-full z-0 hidden xl:block"
              style={{ backgroundPosition: "center", backgroundSize: "cover", objectFit: "cover" }}
              placeholder={useBlur && imageSources.xl.blurDataURL ? "blur" : "empty"}
              blurDataURL={imageSources.xl.blurDataURL}
              priority={imagePriority && prioritySourceKey.includes('xl')}
              fill
            />
          )}

          {/* Overlay and Text Content */}
          <div
            className="relative z-10 w-full h-full max-h-screen flex justify-start items-center"
            // Apply minHeight here as well to ensure overlay covers the area
            style={{ minHeight, backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
          >
            <div className="w-full">
              <div className="max-w-screen-xl mx-auto px-6">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">{title}</h1>
                <p className="mt-4 text-lg sm:text-xl">{subtitle}</p>
              </div>
              {imageCredit && (
                <div className="absolute bottom-1 right-2 select-none opacity-25 text-sm">
                  <p>&copy; {imageCredit}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
