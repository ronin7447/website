interface ContentProps {
    content: {
        title: string,
        titleColor: string | undefined,
        subtitle: string,
        description: string,
        imgUrl: string | null,
    }[],
}

export default function ContentLayout({ content }: ContentProps) {
    return (
        <div className="space-y-12 md:space-y-16">
            {content.map((item, index) => (
                <div key={index} className="max-w-screen-xl sm:px-6 mx-auto">
                    {(item.title && item.title != "") && (
                    <h1 className={`text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 ${item.titleColor} ${(!item.subtitle || item.subtitle == "") ? "mb-8" : ""}`}>{item.title}</h1>
                    )}
                    {(item.subtitle && item.subtitle != "") && (
                        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter px-6 sm:px-0 mb-8">{item.subtitle}</h1>
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
            ))}
            
        </div>
    );
}