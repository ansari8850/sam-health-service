import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Refund Policy",
    description: "Learn about SAM Health Services refund and cancellation policy.",
};

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen pt-20 bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900">Refund Policy</h1>
                    <p className="mt-2 text-gray-500">Last updated: February 2024</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 prose prose-gray max-w-none">
                    <h2>1. Cancellation Policy</h2>

                    <h3>Before Sample Collection</h3>
                    <ul>
                        <li><strong>More than 2 hours before:</strong> Full refund, no questions asked</li>
                        <li><strong>Less than 2 hours before:</strong> 50% refund or free rescheduling</li>
                        <li><strong>No-show:</strong> No refund applicable</li>
                    </ul>

                    <h3>After Sample Collection</h3>
                    <p>
                        Once the sample has been collected, cancellation is not possible as the testing
                        process begins immediately.
                    </p>

                    <h2>2. Refund Eligibility</h2>
                    <p>You are eligible for a full refund in the following cases:</p>
                    <ul>
                        <li>Service not available in your area (discovered after booking)</li>
                        <li>Phlebotomist unable to collect sample due to our fault</li>
                        <li>Technical issues preventing test processing</li>
                        <li>Duplicate booking created by system error</li>
                    </ul>

                    <h2>3. Partial Refund Cases</h2>
                    <p>A partial refund may be provided when:</p>
                    <ul>
                        <li>Only some tests from a package could be processed</li>
                        <li>Significant delay in report delivery (more than 72 hours)</li>
                    </ul>

                    <h2>4. Non-Refundable Cases</h2>
                    <p>Refunds are not applicable when:</p>
                    <ul>
                        <li>Customer provides incorrect address or contact information</li>
                        <li>Customer is unavailable at the scheduled time</li>
                        <li>Sample collection failed due to customer&apos;s health condition</li>
                        <li>Customer did not follow pre-test instructions</li>
                        <li>Request made after report delivery</li>
                    </ul>

                    <h2>5. Refund Process</h2>
                    <ol>
                        <li>Contact our support team with your booking ID</li>
                        <li>Provide reason for refund request</li>
                        <li>Our team will review within 24-48 hours</li>
                        <li>Approved refunds processed within 5-7 business days</li>
                    </ol>

                    <h2>6. Refund Methods</h2>
                    <ul>
                        <li><strong>Card payments:</strong> Refunded to the original card</li>
                        <li><strong>UPI/Net Banking:</strong> Refunded to the source account</li>
                        <li><strong>Cash on Delivery:</strong> Bank transfer or wallet credit</li>
                    </ul>

                    <h2>7. Rescheduling</h2>
                    <p>
                        As an alternative to refund, we offer free rescheduling with flexible timing
                        options. Contact our support to reschedule your appointment.
                    </p>

                    <h2>8. Report Disputes</h2>
                    <p>
                        If you believe there is an error in your test results, please contact us within
                        7 days of receiving the report. We may offer a free retest upon verification.
                    </p>

                    <h2>9. Contact for Refunds</h2>
                    <p>
                        To request a refund or for any questions:<br />
                        Email: {COMPANY_INFO.email}<br />
                        Phone: {COMPANY_INFO.phone}<br />
                        Available: {COMPANY_INFO.workingHours}
                    </p>

                    <div className="mt-8 p-4 bg-teal-50 rounded-xl">
                        <p className="text-teal-800 font-medium mb-2">💡 Pro Tip</p>
                        <p className="text-teal-700 text-sm">
                            To avoid cancellation, make sure to save our phlebotomist&apos;s contact number
                            shared via SMS. You can directly coordinate with them for any timing adjustments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
