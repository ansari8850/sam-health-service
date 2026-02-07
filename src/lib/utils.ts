import { type ClassValue, clsx } from "clsx";
import { LabTest } from "@/types";

// Combine class names
export function cn(...inputs: ClassValue[]): string {
    return clsx(inputs);
}

// Format currency
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

// Get unique categories from tests
export function getUniqueCategories(tests: LabTest[]): string[] {
    const categories = [...new Set(tests.map((test) => test.category))];
    return ["All", ...categories.sort()];
}

// Filter tests by category and search
export function filterTests(
    tests: LabTest[],
    category: string,
    searchQuery: string
): LabTest[] {
    return tests.filter((test) => {
        const matchesCategory = category === "All" || test.category === category;
        const matchesSearch =
            searchQuery === "" ||
            test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            test.disease_tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
            test.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Debounce function
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Validate phone number (Indian format)
export function isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
}

// Validate pincode (Indian format)
export function isValidPincode(pincode: string): boolean {
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    return pincodeRegex.test(pincode);
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
}

// Generate random ID
export function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

// Smooth scroll to element
export function scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// Group tests by category
export function groupTestsByCategory(tests: LabTest[]): Record<string, LabTest[]> {
    return tests.reduce((acc, test) => {
        if (!acc[test.category]) {
            acc[test.category] = [];
        }
        acc[test.category].push(test);
        return acc;
    }, {} as Record<string, LabTest[]>);
}

// Calculate total amount for selected tests
export function calculateTotalAmount(tests: LabTest[]): number {
    return tests.reduce((sum, test) => sum + test.price, 0);
}

