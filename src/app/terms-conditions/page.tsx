import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Read the terms and conditions for using SAM Health Services.",
};

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
                    <p className="mt-2 text-gray-500">Last updated: February 2024</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 prose prose-gray max-w-none">
                    <h2>1. Agreement to Terms</h2>
                    <p>
                        By accessing or using {COMPANY_INFO.name}&apos;s services, you agree to be bound by these
                        Terms and Conditions. If you disagree with any part of these terms, please do not
                        use our services.
                    </p>

                    <h2>2. Services Description</h2>
                    <p>{COMPANY_INFO.name} provides:</p>
                    <ul>
                        <li>Home sample collection for diagnostic tests</li>
                        <li>Digital delivery of test reports</li>
                        <li>Health information and test recommendations</li>
                    </ul>

                    <h2>3. User Responsibilities</h2>
                    <p>When using our services, you agree to:</p>
                    <ul>
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the confidentiality of your account</li>
                        <li>Follow pre-test instructions provided</li>
                        <li>Be available at the scheduled collection time</li>
                        <li>Notify us of any health conditions that may affect sample collection</li>
                    </ul>

                    <h2>4. Booking and Cancellation</h2>
                    <ul>
                        <li>Bookings are confirmed upon successful payment or COD confirmation</li>
                        <li>Free cancellation up to 2 hours before scheduled collection</li>
                        <li>Rescheduling is available at no extra cost</li>
                        <li>We reserve the right to reschedule due to unforeseen circumstances</li>
                    </ul>

                    <h2>5. Sample Collection</h2>
                    <ul>
                        <li>Our phlebotomists will carry valid identification</li>
                        <li>Collection will be performed following standard medical protocols</li>
                        <li>You may request a different phlebotomist if uncomfortable</li>
                        <li>We are not responsible for delays due to incorrect address</li>
                    </ul>

                    <h2>6. Test Results</h2>
                    <ul>
                        <li>Reports are delivered digitally within the specified timeframe</li>
                        <li>Results are for informational purposes only</li>
                        <li>Please consult a qualified physician for medical advice</li>
                        <li>We are not responsible for treatment decisions based on results</li>
                    </ul>

                    <h2>7. Payment Terms</h2>
                    <ul>
                        <li>Prices are inclusive of home collection charges</li>
                        <li>Payment can be made via cards, UPI, net banking, or COD</li>
                        <li>Prices are subject to change without notice</li>
                        <li>Refunds are processed as per our Refund Policy</li>
                    </ul>

                    <h2>8. Intellectual Property</h2>
                    <p>
                        All content, trademarks, and intellectual property on our platform belong to
                        {COMPANY_INFO.name} and may not be used without written permission.
                    </p>

                    <h2>9. Limitation of Liability</h2>
                    <p>
                        {COMPANY_INFO.name} shall not be liable for any indirect, incidental, or consequential
                        damages arising from the use of our services. Our total liability is limited to
                        the amount paid for the specific service.
                    </p>

                    <h2>10. Governing Law</h2>
                    <p>
                        These terms are governed by the laws of India. Any disputes shall be subject to
                        the exclusive jurisdiction of courts in Mumbai.
                    </p>

                    <h2>11. Contact Information</h2>
                    <p>
                        For questions about these Terms, contact us at:<br />
                        Email: {COMPANY_INFO.email}<br />
                        Phone: {COMPANY_INFO.phone}
                    </p>
                </div>
            </div>
        </div>
    );
}
