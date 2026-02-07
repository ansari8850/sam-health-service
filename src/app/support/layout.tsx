import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Support & FAQ",
    description: "Find answers to frequently asked questions about SAM Health Services.",
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
    return children;
}
