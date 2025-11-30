"use client";

import { useEffect, useState } from "react";

export default function TermsOfUse() {
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
                <h1 className="text-3xl font-bold text-gray-900">Terms of Use</h1>

                <p className="text-sm text-gray-600">
                    Last updated: <strong>{currentDate}</strong>
                </p>
            </header>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance</h2>
                <p>
                    By accessing Windly, you agree to comply with these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, we recommend that you do not use our website.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    2. User Responsibility
                </h2>
                <p>
                    You agree to use the website ethically and safely, without violating laws, third-party rights, or compromising the system’s operation. It is forbidden to attempt to access restricted areas, distribute viruses, or any type of malicious content.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    3. Content and Intellectual Property
                </h2>
                <p>
                    All content published on Windly—including texts, code, graphics, images, and tutorials—is protected by copyright. You may view, study, and apply the knowledge, but copying, republishing, or distributing the content without permission is not allowed.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    4. Affiliate Programs
                </h2>
                <p>
                    We participate in affiliate programs such as Hotmart, Amazon, Mercado Livre, Shopee, and ClickBank. When you click our links and make a purchase, we may receive a commission at no additional cost to you.
                </p>
                <p>
                    Although we carefully select the products we recommend, we are not responsible for purchases made on external websites.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    5. Ads and Advertising (Google AdSense)
                </h2>
                <p>
                    We use advertising provided by third parties, including Google AdSense. These services may use cookies to display personalized ads based on your previous visits to our website or others.
                </p>
                <p>
                    You can disable personalized ads in your Google Ads settings.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    6. Limitation of Liability
                </h2>
                <p>
                    Although we strive to maintain accurate and updated information, we do not guarantee that all content will always be free of errors. Windly is not responsible for decisions made based on the information provided.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    7. Changes to the Terms
                </h2>
                <p>
                    We may update these Terms of Use periodically to reflect legal, technical, or operational changes. The update date will always indicate the latest version.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">8. Contact</h2>
                <p>
                    If you have questions about these Terms of Use, contact us through the Contact page available in the main menu.
                </p>
            </section>
        </article>
    );
}
