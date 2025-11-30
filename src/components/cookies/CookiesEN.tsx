"use client";

import { useEffect, useState } from "react";

export default function CookiesEN() {
    const [open, setOpen] = useState(false);
    const [customOpen, setCustomOpen] = useState(false);

    // Individual cookie states
    const [analytics, setAnalytics] = useState(false);
    const [ads, setAds] = useState(false);
    const [personalization, setPersonalization] = useState(false);

    // Check if user has already chosen something
    useEffect(() => {
        const consent = localStorage.getItem("windly-consent");
        if (!consent) {
            setOpen(true);
        }

        function handleOpenSettings() {
            setOpen(true);
        }

        window.addEventListener("open-cookie-settings", handleOpenSettings);

        return () => {
            window.removeEventListener("open-cookie-settings", handleOpenSettings);
        };
    }, []);

    // Send consent to Google
    function updateConsent(options: Record<string, string>) {
        if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
            window.gtag("consent", "update", options);
        }
    }

    // Accept all
    function acceptAll() {
        const preferences = {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
            analytics_storage: "granted",
        };

        updateConsent(preferences);
        localStorage.setItem("windly-consent", JSON.stringify(preferences));
        setOpen(false);
    }

    // Reject all
    function rejectAll() {
        const preferences = {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            analytics_storage: "denied",
        };

        updateConsent(preferences);
        localStorage.setItem("windly-consent", JSON.stringify(preferences));
        setOpen(false);
    }

    // Save custom preferences
    function saveCustom() {
        const preferences = {
            ad_storage: ads ? "granted" : "denied",
            ad_user_data: ads ? "granted" : "denied",
            ad_personalization: personalization ? "granted" : "denied",
            analytics_storage: analytics ? "granted" : "denied",
        };

        updateConsent(preferences);
        localStorage.setItem("windly-consent", JSON.stringify(preferences));
        setCustomOpen(false);
        setOpen(false);
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
            <div className="bg-white max-w-lg w-full rounded-2xl p-6 shadow-xl border border-gray-200 space-y-4">

                {!customOpen && (
                    <>
                        <h2 className="text-xl font-semibold text-gray-800">Manage Cookies</h2>
                        <p className="text-gray-600">
                            We use cookies to improve your experience. Choose how your data should be used.
                        </p>

                        <div className="flex flex-col gap-3 pt-4">
                            <button
                                onClick={acceptAll}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition cursor-pointer"
                            >
                                Accept all
                            </button>

                            <button
                                onClick={rejectAll}
                                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg font-medium transition cursor-pointer"
                            >
                                Reject all
                            </button>

                            <button
                                onClick={() => setCustomOpen(true)}
                                className="w-full bg-white border border-gray-300 hover:bg-gray-100 py-2 rounded-lg font-medium transition cursor-pointer"
                            >
                                Customize preferences
                            </button>
                        </div>
                    </>
                )}

                {customOpen && (
                    <>
                        <h2 className="text-xl font-semibold text-gray-800">Custom Preferences</h2>

                        <div className="space-y-3 text-gray-700 pt-2">

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={analytics}
                                    onChange={() => setAnalytics(!analytics)}
                                />
                                <span>Analytics cookies</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={ads}
                                    onChange={() => setAds(!ads)}
                                />
                                <span>Advertising cookies</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={personalization}
                                    onChange={() => setPersonalization(!personalization)}
                                />
                                <span>Personalization</span>
                            </label>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button
                                onClick={saveCustom}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition cursor-pointer"
                            >
                                Save
                            </button>

                            <button
                                onClick={() => setCustomOpen(false)}
                                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg font-medium transition cursor-pointer"
                            >
                                Back
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
