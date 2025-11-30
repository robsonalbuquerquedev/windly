"use client";

import { useEffect, useState } from "react";

export default function PoliticaDeAfiliadosEN() {
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
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-6 text-gray-800">
            <h1 className="text-3xl font-bold">Affiliate Policy</h1>
            <p className="text-sm text-gray-600">
                Last updated: <strong>{currentDate}</strong>
            </p>

            <p>
                This Affiliate Policy explains how affiliate links are used on the Windly
                website (windly.com.br), ensuring complete transparency for our users.
            </p>

            <h2 className="text-xl font-semibold">1. What are affiliate links?</h2>
            <p>
                Affiliate links are special URLs that lead to products or services offered by
                platforms such as Amazon, Mercado Livre, Shopee, and other commercial
                partners. When you click one of these links and make a purchase, we may
                receive a small commission — at no additional cost to you.
            </p>

            <h2 className="text-xl font-semibold">2. How we use affiliate links</h2>
            <p>
                Affiliate links are placed in content such as recommendations, reviews,
                product lists, and specific articles. All suggested products are chosen based
                on usefulness, quality, and relevance to Windly’s audience.
            </p>

            <h2 className="text-xl font-semibold">3. Transparency with users</h2>
            <p>
                Whenever an affiliate link is present, we will clearly indicate this within
                the context of the recommendation or on specific pages. Your experience
                remains unchanged — the use of these links does not increase the product
                price.
            </p>

            <h2 className="text-xl font-semibold">4. Affiliate programs used</h2>
            <ul className="list-disc pl-5 space-y-1">
                <li>Amazon Associates</li>
                <li>Mercado Livre Affiliates</li>
                <li>Shopee Affiliates</li>
                <li>Hotmart Affiliates</li>
                <li>ClickBank Affiliates</li>
            </ul>

            <h2 className="text-xl font-semibold">5. Editorial independence</h2>
            <p>
                Our participation in affiliate programs does not influence our opinions or
                recommendations. We maintain full editorial independence and only suggest
                products we genuinely believe may help our readers.
            </p>

            <h2 className="text-xl font-semibold">6. Updates to this policy</h2>
            <p>
                This Affiliate Policy may be updated periodically to reflect changes in
                affiliate programs or website practices. We recommend reviewing this page
                regularly.
            </p>

            <h2 className="text-xl font-semibold">7. Contact</h2>
            <p>
                If you have any questions about this policy, please contact us through the
                Contact page available in the main menu.
            </p>
        </section>
    );
}
