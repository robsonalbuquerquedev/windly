"use client";

export default function RevisarCookiesEN() {
    function handleClick() {
        if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("open-cookie-settings"));
        }
    }

    return (
        <button
            onClick={handleClick}
            className="text-white/70 text-sm underline hover:text-white cursor-pointer"
            aria-label="Review cookie preferences"
        >
            Review cookies
        </button>
    );
}
