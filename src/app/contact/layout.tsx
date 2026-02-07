import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with SAM Health Services. Call us 24/7 or send us a message.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
