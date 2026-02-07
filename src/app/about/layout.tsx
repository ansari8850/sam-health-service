import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about SAM Health Services - our mission, values, and commitment to accessible healthcare.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
