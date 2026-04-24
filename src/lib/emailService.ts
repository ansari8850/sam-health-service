import emailjs from "@emailjs/browser";
import { LabTest } from "@/types";

// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_izlx3a7",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_dle0n2u",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "R_d5AsHBL-POR-cgP",
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
    state?: string;
}

// Contact form data interface
export interface ContactEmailData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

// Send booking email
export async function sendBookingEmail(formData: BookingEmailData): Promise<{ success: boolean; error?: string }> {
    try {
        // Initialize EmailJS if not already
        initEmailJS();

        // Prepare template parameters
        const testList = formatTestList(formData.selected_tests);
        const totalAmount = calculateTotal(formData.selected_tests);

        // Format full address
        const fullAddress = [
            formData.room ? `Flat/House: ${formData.room}` : "",
            formData.building ? `Building: ${formData.building}` : "",
            formData.area,
            formData.landmark ? `Near: ${formData.landmark}` : "",
            formData.city,
            formData.state || "Uttar Pradesh",
            formData.pincode,
        ].filter(Boolean).join(", ");

        const templateParams = {
            request_type: "Booking Request",
            first_name: formData.first_name || "",
            last_name: formData.last_name || "",
            full_name: `${formData.first_name || ""} ${formData.last_name || ""}`.trim(),
            mobile: formData.mobile || "",
            tests: (formData.selected_tests?.length || 0).toString(),
            test_list: testList || "No tests selected",
            total_amount: formatCurrency(totalAmount),
            location: formData.location || formData.area || "",
            landmark: formData.landmark || "N/A",
            room: formData.room || "N/A",
            flat_number: formData.room || "N/A",
            building: formData.building || "",
            area: formData.area || "",
            city: formData.city || "",
            state: formData.state || "Uttar Pradesh",
            pincode: formData.pincode || "",
            full_address: fullAddress || "",
        };

        // Send email via EmailJS
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
        );

        console.log("Booking email sent successfully:", response);
        return { success: true };
    } catch (error) {
        console.error("Booking email sending failed:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to send booking confirmation",
        };
    }
}

// Send contact inquiry email
export async function sendContactEmail(formData: ContactEmailData): Promise<{ success: boolean; error?: string }> {
    try {
        // Initialize EmailJS if not already
        initEmailJS();

        const templateParams = {
            request_type: "Contact Inquiry",
            full_name: formData.name || "",
            from_name: formData.name || "",
            reply_to: formData.email || "",
            email: formData.email || "",
            mobile: formData.phone || "",
            message: formData.message || "",
        };

        // Send email via EmailJS
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
        );

        console.log("Contact email sent successfully:", response);
        return { success: true };
    } catch (error) {
        console.error("Contact email sending failed:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to send message",
        };
    }
}

// Check if EmailJS is configured
export function isEmailConfigured(): boolean {
    return Boolean(
        EMAILJS_CONFIG.serviceId &&
        EMAILJS_CONFIG.templateId &&
        EMAILJS_CONFIG.publicKey &&
        EMAILJS_CONFIG.serviceId !== ""
    );
}
