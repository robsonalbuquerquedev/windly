"use client";

import { useEffect, useState } from "react";

export default function CookiePolicyEN() {
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
        <section className="space-y-8 text-gray-800">
            <header>
                <h1 className="text-3xl font-bold">Cookie Policy</h1>
                <p className="text-sm text-gray-600">
                    Last updated: <strong>{currentDate}</strong>
                </p>

                <p className="mt-2 text-lg text-gray-600">
                    This Cookie Policy explains how Windly uses cookies and similar technologies
                    to improve your experience, analyze performance, and offer essential features.
                </p>
            </header>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">1. What are cookies?</h2>
                <p>
                    Cookies are small files stored in your browser when you visit a website.
                    They help remember your preferences, improve page functionality, personalize content,
                    and help us understand how you use the site.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">2. Why do we use cookies?</h2>
                <p>Windly uses cookies to:</p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Ensure essential site functionality;</li>
                    <li>Understand how visitors navigate and interact;</li>
                    <li>Improve our content and performance;</li>
                    <li>Display more relevant ads (when permitted);</li>
                    <li>Store your consent preferences.</li>
                </ul>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">3. Types of cookies used</h2>

                <h3 className="text-xl font-medium">3.1. Essential cookies</h3>
                <p>
                    Necessary for the website to function properly. They ensure features such as navigation,
                    page loading, and security. These cookies cannot be disabled.
                </p>

                <h3 className="text-xl font-medium">3.2. Analytics cookies</h3>
                <p>
                    Used to understand visitor behavior. They help us evaluate popular pages, time on site,
                    and possible improvements. They are activated only with your permission.
                </p>

                <h3 className="text-xl font-medium">3.3. Advertising cookies</h3>
                <p>
                    Help display more relevant advertisements, improving your experience with sponsored content.
                    These are used by services like Google AdSense and work only after your consent.
                </p>

                <h3 className="text-xl font-medium">3.4. Personalization cookies</h3>
                <p>
                    Used to remember preferences such as language, theme, and site settings.
                    They depend on your choices.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">4. Consent and control</h2>

                <p>
                    When you first visit Windly, we display a notice requesting your consent
                    to use cookies. You can accept all, refuse, or manually select your preferences.
                </p>

                <p>
                    Your choices are saved in your browser and can be changed at any time through
                    the “Review cookies” button available in the footer or the initial notice.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">5. Third-party cookies</h2>
                <p>
                    Some external services we use — such as Google Analytics and Google AdSense —
                    may install their own cookies. Each provider has its own policies, which we
                    recommend reviewing.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">6. How to disable cookies in your browser</h2>

                <p>You can manage or block cookies directly in your browser:</p>

                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies.</li>
                    <li><strong>Mozilla Firefox:</strong> Preferences → Privacy & Security.</li>
                    <li><strong>Safari:</strong> Settings → Privacy & Security.</li>
                    <li><strong>Microsoft Edge:</strong> Settings → Cookies and permissions.</li>
                </ul>

                <p>
                    Disabling certain cookies may affect some site features, but you always have
                    full control over your privacy.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">7. Updates to this policy</h2>
                <p>
                    We may update this Cookie Policy to reflect improvements, legal changes,
                    or adjustments made to our tools. We recommend revisiting this page periodically.
                </p>
            </article>
        </section>
    );
}
