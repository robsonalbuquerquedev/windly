import HeaderEN from "@/components/header/HeaderEN";
import FooterEN from "@/components/footer/FooterEN";
import CookiesEN from "@/components/cookies/CookiesEN";

export default function EnLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderEN />

            <div
                className="
                    min-h-screen w-full
                    bg-gradient-to-br from-sky-50 via-blue-100 to-indigo-200
                    text-gray-800 font-sans
                    px-6 md:px-10 lg:px-20
                    py-10 md:py-16
                    flex flex-col
                    items-center
                    justify-start
                "
            >
                <div
                    className="
                        w-full max-w-6xl
                        bg-white/70 backdrop-blur-md
                        shadow-xl rounded-2xl
                        border border-white/60
                        p-6 md:p-10
                        space-y-8
                    "
                >
                    <main>{children}</main>
                </div>
            </div>
            <FooterEN />
            <CookiesEN />
        </>
    );
}
