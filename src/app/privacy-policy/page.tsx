import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Learn how SAM Health Services collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
                    <p className="mt-2 text-gray-500">Last updated: February 2024</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 prose prose-gray max-w-none">
                    <h2>1. Introduction</h2>
                    <p>
                        {COMPANY_INFO.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                        when you use our services.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <h3>Personal Information</h3>
                    <ul>
                        <li>Name, email address, phone number</li>
                        <li>Address and location data</li>
                        <li>Date of birth and gender</li>
                        <li>Medical test history and results</li>
                    </ul>

                    <h3>Automatically Collected Information</h3>
                    <ul>
                        <li>Device information and IP address</li>
                        <li>Browser type and settings</li>
                        <li>Usage data and preferences</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>We use the collected information for:</p>
                    <ul>
                        <li>Processing and managing your test bookings</li>
                        <li>Communicating test results and health information</li>
                        <li>Improving our services and user experience</li>
                        <li>Sending important updates and notifications</li>
                        <li>Complying with legal obligations</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement industry-standard security measures to protect your personal information,
                        including encryption, secure servers, and regular security audits. Your health data
                        is stored in compliance with applicable healthcare data protection regulations.
                    </p>

                    <h2>5. Data Sharing</h2>
                    <p>We do not sell your personal information. We may share your data with:</p>
                    <ul>
                        <li>NABL certified partner laboratories for test processing</li>
                        <li>Healthcare providers with your consent</li>
                        <li>Legal authorities when required by law</li>
                    </ul>

                    <h2>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal data</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>

                    <h2>7. Cookies</h2>
                    <p>
                        We use cookies to enhance your experience. You can control cookie settings
                        through your browser preferences.
                    </p>

                    <h2>8. Children&apos;s Privacy</h2>
                    <p>
                        Our services are not intended for children under 13 without parental consent.
                        We do not knowingly collect information from children under 13.
                    </p>

                    <h2>9. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy periodically. Changes will be posted on this page
                        with an updated revision date.
                    </p>

                    <h2>10. Contact Us</h2>
                    <p>
                        For questions about this Privacy Policy, contact us at:<br />
                        Email: {COMPANY_INFO.email}<br />
                        Phone: {COMPANY_INFO.phone}
                    </p>
                </div>
            </div>
        </div>
    );
}
