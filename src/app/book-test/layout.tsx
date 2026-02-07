import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Test",
    description: "Select from 100+ diagnostic tests and book home sample collection with SAM Health Services. Easy booking, affordable prices.",
};

export default function BookTestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
