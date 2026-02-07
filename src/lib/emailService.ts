import emailjs from "@emailjs/browser";
import { LabTest } from "@/types";

// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceId: "service_7wsoj91",
    templateId: "template_6ybdfou",
    publicKey: "3z6mCfuhFepiUUrqj",
};

// Initialize EmailJS
let isInitialized = false;

export function initEmailJS(): void {
    if (!isInitialized) {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        isInitialized = true;
    }
}

// Format currency for display
function formatCurrency(amount: number): string {
    return `₹${amount.toLocaleString("en-IN")}`;
}

// Generate formatted test list string
export function formatTestList(tests: LabTest[]): string {
    return tests.map((test) => `${test.name} - ${formatCurrency(test.price)}`).join("\n");
}

// Calculate total amount
export function calculateTotal(tests: LabTest[]): number {
    return tests.reduce((sum, test) => sum + test.price, 0);
}

// Booking form data interface
export interface BookingEmailData {
    first_name: string;
    last_name: string;
    mobile: string;
    selected_tests: LabTest[];
    location: string;
    landmark: string;
    room: string;
    building: string;
    area: string;
    city: string;
    pincode: string;
}

// Send booking email
export async function sendBookingEmail(formData: BookingEmailData): Promise<{ success: boolean; error?: string }> {
    try {
        // Initialize EmailJS if not already
        initEmailJS();

        // Prepare template parameters
        const testList = formatTestList(formData.selected_tests);
        const totalAmount = calculateTotal(formData.selected_tests);

        const templateParams = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            mobile: formData.mobile,
            tests: formData.selected_tests.length.toString(),
            test_list: testList,
            total_amount: formatCurrency(totalAmount),
            location: formData.location,
            landmark: formData.landmark || "N/A",
            room: formData.room || "N/A",
            building: formData.building,
            area: formData.area,
            city: formData.city,
            pincode: formData.pincode,
        };

        // Send email via EmailJS
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
        );

        console.log("Email sent successfully:", response);
        return { success: true };
    } catch (error) {
        console.error("Email sending failed:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to send booking confirmation",
        };
    }
}

// Check if EmailJS is configured
export function isEmailConfigured(): boolean {
    return Boolean(
        EMAILJS_CONFIG.serviceId &&
        EMAILJS_CONFIG.templateId &&
        EMAILJS_CONFIG.publicKey &&
        EMAILJS_CONFIG.serviceId !== "YOUR_SERVICE_ID"
    );
}
