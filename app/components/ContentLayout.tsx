import Image, { StaticImageData } from "next/image";

interface ContentProps {
    content: {
        title: string,
        titleColor: string | undefined,
        subtitle: string,
        description: string,
        imgUrl: string | StaticImageData | null,
        imgBelow?: StaticImageData | null,
        altText?: string,
        titleSize?: string,
    }[],
}

export default function ContentLayout({ content }: ContentProps) {
    return (
        <div className="space-y-12 md:space-y-16">
            {content.map((item, index) => (
                <div key={index}>
                    <div className="max-w-screen-xl sm:px-6 mx-auto">
                        {(item.title && item.title != "") && (
                        <h1 className={`${item.titleSize ? item.titleSize : "text-3xl sm:text-4xl"} font-semibold tracking-tighter px-6 sm:px-0 ${item.titleColor} ${(!item.subtitle || item.subtitle == "") ? "mb-8" : ""}`}>{item.title}</h1>
                        )}
                        {(item.subtitle && item.subtitle != "") && (
                            <h1 className={`${item.titleSize ? item.titleSize : "text-3xl sm:text-4xl"} font-semibold tracking-tighter px-6 sm:px-0 mb-8`}>{item.subtitle}</h1>
                        )}
                        <p className="text-lg sm:text-xl px-6 sm:px-0 whitespace-pre-line">
                            {item.description}
                        </p>
                        {/* Optional: Add image rendering logic here if item.imgUrl exists */}
                        {/* {item.imgUrl && (
                            <div className="mt-8">
                                <img src={item.imgUrl} alt={item.title} className="w-full h-auto rounded-lg" />
                            </div>
                        )} */}
                    </div>
                    {/* Image below content section */}
                    {item.imgBelow && (
                        <div className="max-w-screen-xl mx-auto px-6 pb-4 sm:pb-8 tracking-tighter mt-10 md:mt-12">
                            <Image 
                                src={item.imgBelow} 
                                alt={item.altText || item.title} 
                                className="w-full object-cover object-center mt-12 mb-1" 
                                quality={80} 
                                placeholder="blur" 
                                loading="lazy" 
                            />
                            {item.altText && (
                                <p className="mt-2"><i className="text-lg leading-tight">{item.altText}</i></p>
                            )}
                        </div>
                    )}
                </div>
            ))}
            
        </div>
    );
}