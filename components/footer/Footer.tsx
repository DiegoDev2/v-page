import Image from "next/image";

const Footer = () => {
    const footerNavs = [
        {
            href: 'https://twitch.tv/v_language',
            img: '/social/twitch.svg',
            alt: 'Twitch'
        },
        {
            href: 'https://t.me/vlang_en',
            img: '/social/tg.svg',
            alt: 'Telegram'
        },
        {
            href: 'https://www.youtube.com/c/VLang/videos',
            img: '/social/yt.svg',
            alt: 'YouTube'
        },
        {
            href: 'https://www.github.com/vlang',
            img: '/github.svg',
            alt: 'GitHub'
        },
        {
            href: 'https://mas.to/@vlang',
            img: '/social/mas.svg',
            alt: 'Mastodon'
        }
    ];

    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="justify-between sm:flex">
                    <div className="space-y-6">
                        <Image src={"/vlogo.png"} width={60} height={60} alt="V Logo" />
                        <p className="max-w-md">
                            The V Programming Language is a new open-source, general-purpose programming language designed for building scalable and high-performance applications.
                        </p>
                        <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                            {
                                footerNavs.map((item, idx) => (
                                    <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                                            <Image src={item.img} alt={item.alt} width={30} height={30} />
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t md:text-center">
                    <p>©2024 V Programming Language</p>
                </div>
            </div>
        </footer>
    );
}

Footer.displayName = "Footer";

export default Footer; 
