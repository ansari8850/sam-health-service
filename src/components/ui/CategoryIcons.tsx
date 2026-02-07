import React from "react";

// Medical category icons as inline SVG components
export const CategoryIcons: Record<string, React.ReactNode> = {
    Hematology: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Blood drop */}
            <defs>
                <linearGradient id="bloodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
            </defs>
            <path
                d="M32 8C32 8 12 28 12 42C12 53.0457 20.9543 62 32 62C43.0457 62 52 53.0457 52 42C52 28 32 8 32 8Z"
                fill="url(#bloodGrad)"
            />
            <ellipse cx="24" cy="38" rx="4" ry="6" fill="#fca5a5" opacity="0.5" />
        </svg>
    ),
    Diabetes: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Glucose meter */}
            <defs>
                <linearGradient id="diabetesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
            </defs>
            <rect x="14" y="10" width="36" height="44" rx="6" fill="url(#diabetesGrad)" />
            <rect x="18" y="16" width="28" height="18" rx="3" fill="#ffffff" />
            <text x="32" y="30" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="bold">98</text>
            <text x="32" y="36" textAnchor="middle" fill="#6b7280" fontSize="5">mg/dL</text>
            <rect x="22" y="40" width="20" height="4" rx="2" fill="#93c5fd" />
            <rect x="22" y="46" width="14" height="4" rx="2" fill="#93c5fd" />
        </svg>
    ),
    Cardiac: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Heart with pulse */}
            <defs>
                <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#e11d48" />
                </linearGradient>
            </defs>
            <path
                d="M32 56L14.5 38.5C8.5 32.5 8.5 22.5 14.5 16.5C20.5 10.5 30.5 10.5 36.5 16.5L32 21L27.5 16.5C21.5 10.5 11.5 10.5 5.5 16.5C5.5 16.5 49.5 10.5 49.5 16.5C55.5 22.5 55.5 32.5 49.5 38.5L32 56Z"
                fill="url(#heartGrad)"
            />
            <path
                d="M32 56C32 56 8 32 8 22C8 14.268 14.268 8 22 8C27.3 8 31.8 10.8 34 15C32.2 10.8 27.7 8 22.4 8C31.2 8 38 14 42 8C49.732 8 56 14.268 56 22C56 32 32 56 32 56Z"
                fill="url(#heartGrad)"
            />
            <path d="M4 32H16L20 24L26 40L32 28L36 36H60" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Liver: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Liver shape */}
            <defs>
                <linearGradient id="liverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#92400e" />
                    <stop offset="100%" stopColor="#78350f" />
                </linearGradient>
            </defs>
            <path
                d="M52 24C52 18 48 12 40 12C34 12 30 16 28 20C26 16 22 14 16 14C10 14 6 20 8 28C10 38 18 48 32 54C46 48 54 38 56 28C57 24 55 24 52 24Z"
                fill="url(#liverGrad)"
            />
            <path d="M32 20C32 20 28 26 28 32C28 38 32 44 32 44" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
    ),
    Kidney: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Kidney shape */}
            <defs>
                <linearGradient id="kidneyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#6d28d9" />
                </linearGradient>
            </defs>
            <path
                d="M22 10C14 10 8 18 8 28C8 38 12 48 22 52C28 54 32 50 32 44C32 50 36 54 42 52C52 48 56 38 56 28C56 18 50 10 42 10C36 10 34 16 32 22C30 16 28 10 22 10Z"
                fill="url(#kidneyGrad)"
            />
            <ellipse cx="20" cy="28" rx="4" ry="8" fill="#a78bfa" opacity="0.4" />
            <ellipse cx="44" cy="28" rx="4" ry="8" fill="#a78bfa" opacity="0.4" />
        </svg>
    ),
    Thyroid: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Thyroid butterfly shape */}
            <defs>
                <linearGradient id="thyroidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#db2777" />
                </linearGradient>
            </defs>
            <path
                d="M32 24V54"
                stroke="url(#thyroidGrad)"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <ellipse cx="20" cy="30" rx="12" ry="16" fill="url(#thyroidGrad)" />
            <ellipse cx="44" cy="30" rx="12" ry="16" fill="url(#thyroidGrad)" />
            <ellipse cx="18" cy="26" rx="4" ry="6" fill="#f9a8d4" opacity="0.5" />
            <ellipse cx="46" cy="26" rx="4" ry="6" fill="#f9a8d4" opacity="0.5" />
        </svg>
    ),
    Allergy: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Allergy/immune */}
            <defs>
                <linearGradient id="allergyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="20" fill="url(#allergyGrad)" />
            <circle cx="32" cy="32" r="12" fill="#fef3c7" />
            <circle cx="32" cy="32" r="6" fill="url(#allergyGrad)" />
            {/* Spikes */}
            <path d="M32 6V16M32 48V58M6 32H16M48 32H58M14 14L22 22M42 42L50 50M50 14L42 22M22 42L14 50" stroke="url(#allergyGrad)" strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
    Infectious: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Virus/bacteria */}
            <defs>
                <linearGradient id="infectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="18" fill="url(#infectGrad)" />
            <circle cx="26" cy="28" r="4" fill="#a7f3d0" />
            <circle cx="38" cy="28" r="3" fill="#a7f3d0" />
            <circle cx="32" cy="38" r="5" fill="#a7f3d0" />
            {/* Spikes */}
            <circle cx="32" cy="8" r="4" fill="url(#infectGrad)" />
            <circle cx="32" cy="56" r="4" fill="url(#infectGrad)" />
            <circle cx="8" cy="32" r="4" fill="url(#infectGrad)" />
            <circle cx="56" cy="32" r="4" fill="url(#infectGrad)" />
            <circle cx="15" cy="15" r="3" fill="url(#infectGrad)" />
            <circle cx="49" cy="49" r="3" fill="url(#infectGrad)" />
            <circle cx="49" cy="15" r="3" fill="url(#infectGrad)" />
            <circle cx="15" cy="49" r="3" fill="url(#infectGrad)" />
        </svg>
    ),
    "Cancer Markers": (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* DNA/cells */}
            <defs>
                <linearGradient id="cancerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
            </defs>
            <path d="M20 8C20 8 12 20 12 32C12 44 20 56 20 56" stroke="url(#cancerGrad)" strokeWidth="4" strokeLinecap="round" />
            <path d="M44 8C44 8 52 20 52 32C52 44 44 56 44 56" stroke="url(#cancerGrad)" strokeWidth="4" strokeLinecap="round" />
            <line x1="20" y1="16" x2="44" y2="20" stroke="url(#cancerGrad)" strokeWidth="3" strokeLinecap="round" />
            <line x1="18" y1="28" x2="46" y2="28" stroke="url(#cancerGrad)" strokeWidth="3" strokeLinecap="round" />
            <line x1="18" y1="40" x2="46" y2="36" stroke="url(#cancerGrad)" strokeWidth="3" strokeLinecap="round" />
            <line x1="20" y1="48" x2="44" y2="52" stroke="url(#cancerGrad)" strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
    Vitamins: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Vitamin pill */}
            <defs>
                <linearGradient id="vitaminGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
            </defs>
            <rect x="20" y="8" width="24" height="48" rx="12" fill="url(#vitaminGrad)" />
            <rect x="20" y="8" width="24" height="24" rx="12" fill="#fbbf24" />
            <text x="32" y="36" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">V</text>
        </svg>
    ),
    Hormones: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hormone molecule */}
            <defs>
                <linearGradient id="hormoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="12" fill="url(#hormoneGrad)" />
            <circle cx="16" cy="20" r="8" fill="url(#hormoneGrad)" />
            <circle cx="48" cy="20" r="8" fill="url(#hormoneGrad)" />
            <circle cx="16" cy="44" r="8" fill="url(#hormoneGrad)" />
            <circle cx="48" cy="44" r="8" fill="url(#hormoneGrad)" />
            <line x1="24" y1="26" x2="20" y2="24" stroke="#5eead4" strokeWidth="3" />
            <line x1="40" y1="26" x2="44" y2="24" stroke="#5eead4" strokeWidth="3" />
            <line x1="24" y1="38" x2="20" y2="40" stroke="#5eead4" strokeWidth="3" />
            <line x1="40" y1="38" x2="44" y2="40" stroke="#5eead4" strokeWidth="3" />
        </svg>
    ),
    Electrolytes: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Electrolyte/ion */}
            <defs>
                <linearGradient id="electroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="22" fill="url(#electroGrad)" />
            <text x="32" y="26" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">+</text>
            <text x="32" y="46" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">−</text>
            <circle cx="32" cy="32" r="22" stroke="#67e8f9" strokeWidth="3" fill="none" strokeDasharray="6 4" />
        </svg>
    ),
    Urine: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Test tube */}
            <defs>
                <linearGradient id="urineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#ca8a04" />
                </linearGradient>
            </defs>
            <path d="M22 8H42V12H22V8Z" fill="#9ca3af" />
            <path d="M24 12H40V48C40 52.4183 36.4183 56 32 56C27.5817 56 24 52.4183 24 48V12Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
            <path d="M24 32H40V48C40 52.4183 36.4183 56 32 56C27.5817 56 24 52.4183 24 48V32Z" fill="url(#urineGrad)" />
            <line x1="28" y1="20" x2="36" y2="20" stroke="#9ca3af" strokeWidth="1" />
            <line x1="28" y1="26" x2="36" y2="26" stroke="#9ca3af" strokeWidth="1" />
        </svg>
    ),
    Default: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Generic medical cross */}
            <defs>
                <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="26" fill="url(#defaultGrad)" />
            <rect x="28" y="16" width="8" height="32" rx="2" fill="#ffffff" />
            <rect x="16" y="28" width="32" height="8" rx="2" fill="#ffffff" />
        </svg>
    ),
};

// Component to render category icon
export const CategoryIcon: React.FC<{ category: string; className?: string }> = ({ category, className = "w-10 h-10" }) => {
    const icon = CategoryIcons[category] || CategoryIcons.Default;
    return <div className={className}>{icon}</div>;
};

export default CategoryIcon;
