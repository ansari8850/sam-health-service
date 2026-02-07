// Company Information
export const COMPANY_INFO = {
    name: "SAM HEALTH SERVICES",
    tagline: "Your Health, Our Priority",
    phone: "+91 73099 30118",
    email: "contact@samhealthservices.com",
    address: "Hazratganj, Lucknow, Uttar Pradesh 226001",
    workingHours: "24/7 Available",
} as const;

// EmailJS Configuration (Replace with your actual keys)
export const EMAILJS_CONFIG = {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
} as const;

// Location Options for Dropdown - Lucknow Localities
export const LOCATION_OPTIONS = [
    // Central Lucknow
    "Hazratganj",
    "Aminabad",
    "Chowk",
    "Hussainganj",
    "Lalbagh",
    "Kaiserbagh",
    "Naka Hindola",
    "Qaiserbagh",
    // South Lucknow
    "Gomti Nagar",
    "Gomti Nagar Extension",
    "Vikas Nagar",
    "Aliganj",
    "Mahanagar",
    "Indira Nagar",
    "Jankipuram",
    "Jankipuram Extension",
    // North Lucknow
    "Alambagh",
    "Charbagh",
    "Aishbagh",
    "Rajajipuram",
    "Krishna Nagar",
    "Nirala Nagar",
    // West Lucknow
    "Aashiana",
    "Cantt Area",
    "Telibagh",
    "Raebareli Road",
    "Kanpur Road",
    "Sushant Golf City",
    // East Lucknow
    "Chinhat",
    "Faizabad Road",
    "Polytechnic",
    "IIM Road",
    "Sultanpur Road",
    // Residential Colonies
    "Vasant Kunj",
    "Sector A Aliganj",
    "Sector B Aliganj",
    "Sector C Aliganj",
    "Sector D Aliganj",
    "Sector E Aliganj",
    "Sector F Aliganj",
    "Sector G Aliganj",
    "Sector H Aliganj",
    "LDA Colony",
    "Butler Colony",
    "Civil Lines",
    "Mall Avenue",
    // Popular Areas
    "Saharaganj",
    "Phoenix Palassio",
    "Riverside Mall Area",
    "IT City Lucknow",
    "Vrindavan Colony",
    "Eldeco Udyan",
    "Omaxe City",
    "Ansal API",
    // Outer Areas
    "Bakshi Ka Talab",
    "Kakori",
    "Mohanlalganj",
    "Banthra",
    "Itaunja",
    "Other",
] as const;

// City Options
export const CITY_OPTIONS = [
    "Lucknow",
    "Kanpur",
    "Barabanki",
    "Sitapur",
    "Other",
] as const;


// Navigation Links
export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/book-test", label: "Book Test" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
] as const;

// Footer Links
export const FOOTER_LINKS = {
    company: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/support", label: "Support" },
    ],
    legal: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-conditions", label: "Terms & Conditions" },
        { href: "/refund-policy", label: "Refund Policy" },
    ],
    services: [
        { href: "/book-test", label: "Book a Test" },
        { href: "/book-test?category=Hematology", label: "Blood Tests" },
        { href: "/book-test?category=Cardiac", label: "Heart Health" },
        { href: "/book-test?category=Diabetes", label: "Diabetes Tests" },
    ],
} as const;

// Social Links
export const SOCIAL_LINKS = [
    { href: "https://facebook.com", label: "Facebook", icon: "facebook" },
    { href: "https://twitter.com", label: "Twitter", icon: "twitter" },
    { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
    { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
] as const;

// How It Works Steps
export const HOW_IT_WORKS_STEPS = [
    {
        id: 1,
        title: "Select Tests",
        description: "Browse and select from our wide range of diagnostic tests",
        icon: "search",
    },
    {
        id: 2,
        title: "Fill Details",
        description: "Provide your contact information and address",
        icon: "form",
    },
    {
        id: 3,
        title: "Book Appointment",
        description: "Confirm your booking and choose your preferred time",
        icon: "calendar",
    },
    {
        id: 4,
        title: "Home Collection",
        description: "Our trained phlebotomist visits your doorstep",
        icon: "home",
    },
] as const;

// Features
export const FEATURES = [
    {
        id: "1",
        title: "Home Sample Collection",
        description: "Get samples collected at your doorstep by trained professionals",
        icon: "home",
    },
    {
        id: "2",
        title: "NABL Certified Labs",
        description: "All tests processed in nationally accredited laboratories",
        icon: "certificate",
    },
    {
        id: "3",
        title: "Quick Reports",
        description: "Receive accurate digital reports within 24-48 hours",
        icon: "clock",
    },
    {
        id: "4",
        title: "Expert Support",
        description: "24/7 customer support and doctor consultation available",
        icon: "headphones",
    },
    {
        id: "5",
        title: "Secure & Private",
        description: "Your health data is encrypted and completely confidential",
        icon: "shield",
    },
    {
        id: "6",
        title: "Affordable Pricing",
        description: "Competitive prices with no hidden charges",
        icon: "wallet",
    },
] as const;

// Testimonials
export const TESTIMONIALS = [
    {
        id: "1",
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        comment: "Excellent service! The phlebotomist was very professional and gentle. Got my reports on time.",
    },
    {
        id: "2",
        name: "Rajesh Kumar",
        location: "Thane",
        rating: 5,
        comment: "Very convenient home collection service. The app is easy to use and the prices are reasonable.",
    },
    {
        id: "3",
        name: "Anita Patel",
        location: "Navi Mumbai",
        rating: 4,
        comment: "Great experience with SAM Health. Quick sample collection and accurate reports.",
    },
    {
        id: "4",
        name: "Vikram Singh",
        location: "Powai",
        rating: 5,
        comment: "Best diagnostic service in Mumbai. Highly recommend for anyone looking for quality lab tests.",
    },
] as const;

// FAQ Data
export const FAQ_DATA = [
    {
        question: "How does home sample collection work?",
        answer: "Once you book a test, our trained phlebotomist will visit your address at the scheduled time to collect the sample. The process is safe, hygienic, and comfortable.",
    },
    {
        question: "What are your operating hours?",
        answer: "Our sample collection service is available from 6 AM to 10 PM, 7 days a week. For urgent requirements, you can call our 24/7 helpline.",
    },
    {
        question: "How will I receive my reports?",
        answer: "Reports are sent to your registered email and are also available in our app. Physical copies can be requested for an additional fee.",
    },
    {
        question: "Are your labs certified?",
        answer: "Yes, all our partner laboratories are NABL certified and follow strict quality control protocols.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, UPI, net banking, and popular wallets. Cash on collection is also available.",
    },
    {
        question: "Can I cancel or reschedule my booking?",
        answer: "Yes, you can cancel or reschedule your booking up to 2 hours before the scheduled time without any charges.",
    },
    {
        question: "Do I need to fast before certain tests?",
        answer: "Yes, some tests like fasting blood sugar or lipid profile require 8-12 hours of fasting. Our team will inform you about specific requirements when you book.",
    },
    {
        question: "How accurate are your test results?",
        answer: "Our NABL certified labs use state-of-the-art equipment and follow rigorous quality control measures to ensure highly accurate results.",
    },
] as const;

// Animation Durations
export const ANIMATION_DURATION = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;
