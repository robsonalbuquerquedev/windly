"use client";

import { useEffect, useState } from "react";

export default function PrivacyPolicyEN() {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();
        const formatted = date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
        setCurrentDate(formatted);
    }, []);

    return (
        <article className="space-y-8">
            <header className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">
                    Privacy Policy
                </h1>

                <p className="text-sm text-gray-600">
                    Last updated: <strong>{currentDate}</strong>
                </p>
            </header>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    1. Introduction
                </h2>
                <p>
                    This Privacy Policy explains how we collect, use, and protect the
                    information you provide when using Windly. Our commitment is to ensure
                    transparency and security while you browse our website.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    2. Information Collection
                </h2>
                <p>
                    We may collect personal information provided directly by you, such as
                    your name and email when interacting with forms. We also automatically
                    collect data such as IP address, browser type, and visited pages for
                    analytical and site improvement purposes.
                </p>
                <p>
                    Cookies may be used to enhance your experience. You may disable them in
                    your browser settings if you prefer.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    3. Advertising and Ads (Google AdSense)
                </h2>
                <p>
                    We display ads provided by third parties, including Google AdSense.
                    These partners may use cookies, such as the DART cookie, to show ads
                    based on your previous visits to our website or others.
                </p>
                <p>
                    You can disable the DART cookie by accessing Google’s ad settings page.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    4. External Links and Affiliate Programs
                </h2>
                <p>
                    Windly participates in affiliate programs such as Hotmart, Amazon,
                    Mercado Livre, Shopee, and ClickBank. This means we may earn a
                    commission when you make purchases through our affiliate links.
                </p>
                <p>
                    Although we carefully choose all recommendations, we do not control the
                    content, security, or privacy practices of external websites.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    5. Use of Information
                </h2>
                <p>The information collected may be used to:</p>

                <ul className="list-disc list-inside space-y-1">
                    <li>Improve user experience;</li>
                    <li>Customize displayed content;</li>
                    <li>Send updates and communications;</li>
                    <li>Provide internal analytics and performance metrics;</li>
                    <li>Operate ads and affiliate links.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    6. Data Security
                </h2>
                <p>
                    We implement technical measures to protect your information from loss,
                    misuse, or unauthorized access. However, no digital system is entirely
                    secure, so we recommend caution when sharing data online.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    7. Changes to This Policy
                </h2>
                <p>
                    This Policy may be updated periodically to reflect legal or operational
                    changes. The update date above will always show the latest version.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    8. Contact
                </h2>
                <p>
                    If you have questions about this Privacy Policy, please contact us
                    through the Contact page available in the main menu.
                </p>
            </section>
        </article>
    );
}
