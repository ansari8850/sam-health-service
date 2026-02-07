"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, useWatch } from "react-hook-form";
import { LabTest } from "@/types";
import testsData from "@/data/tests.json";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
    TestCard,
    CategoryFilter,
    SelectedTestsSummary,
} from "@/components/book-test";
import { getUniqueCategories, filterTests, formatCurrency } from "@/lib/utils";
import { sendBookingEmail, BookingEmailData } from "@/lib/emailService";
import { STATE_OPTIONS, CITY_OPTIONS, LUCKNOW_AREAS } from "@/lib/constants";

type FormStep = "tests" | "details";

interface BookingFormData {
    first_name: string;
    last_name: string;
    mobile: string;
    state: string;
    city: string;
    area: string;
    custom_area: string;
    landmark: string;
    pincode: string;
    building: string;
    flat_number: string;
}

export default function BookTestPage() {
    // State
    const [selectedTests, setSelectedTests] = useState<LabTest[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentStep, setCurrentStep] = useState<FormStep>("tests");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<BookingFormData>({
        defaultValues: {
            state: "Uttar Pradesh",
            city: "Lucknow",
        }
    });

    // Watch area field to show/hide custom area input
    const selectedArea = useWatch({ control, name: "area" });
    const isOtherArea = selectedArea === "Other";

    // Derived Data - Memoized for performance
    const tests = testsData as LabTest[];
    const categories = useMemo(() => getUniqueCategories(tests), [tests]);
    const filteredTests = useMemo(
        () => filterTests(tests, activeCategory, searchQuery),
        [tests, activeCategory, searchQuery]
    );
    const totalAmount = useMemo(
        () => selectedTests.reduce((sum, t) => sum + t.price, 0),
        [selectedTests]
    );

    // Handlers
    const toggleTest = useCallback((test: LabTest) => {
        setSelectedTests((prev) => {
            const isSelected = prev.some((t) => t.id === test.id);
            if (isSelected) {
                return prev.filter((t) => t.id !== test.id);
            }
            return [...prev, test];
        });
    }, []);

    const removeTest = useCallback((test: LabTest) => {
        setSelectedTests((prev) => prev.filter((t) => t.id !== test.id));
    }, []);

    const clearTests = useCallback(() => {
        setSelectedTests([]);
    }, []);

    const proceedToDetails = useCallback(() => {
        if (selectedTests.length > 0) {
            setCurrentStep("details");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [selectedTests]);

    const goBackToTests = useCallback(() => {
        setCurrentStep("tests");
        setErrorMessage(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    // Handle form submission with EmailJS
    const onSubmit = async (data: BookingFormData) => {
        setIsSubmitting(true);
        setErrorMessage(null);

        // Determine the final area value
        const finalArea = data.area === "Other" ? data.custom_area : data.area;

        const emailData: BookingEmailData = {
            first_name: data.first_name,
            last_name: data.last_name,
            mobile: data.mobile,
            selected_tests: selectedTests,
            location: finalArea, // Area/locality
            landmark: data.landmark,
            room: data.flat_number,
            building: data.building,
            area: finalArea,
            city: data.city,
            pincode: data.pincode,
            state: data.state,
        };

        const result = await sendBookingEmail(emailData);

        setIsSubmitting(false);

        if (result.success) {
            setShowSuccess(true);
        } else {
            setErrorMessage(result.error || "Something went wrong. Please try again.");
        }
    };

    const handleSuccessClose = () => {
        setShowSuccess(false);
        setSelectedTests([]);
        setCurrentStep("tests");
        reset();
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Page Header */}
            <div className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Book a Test</h1>
                        <p className="text-white/90 max-w-2xl mx-auto">
                            Select from our wide range of diagnostic tests and get samples collected at your doorstep in Lucknow
                        </p>
                    </motion.div>

                    {/* Step Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center items-center gap-4 mt-8"
                    >
                        <div className={`flex items-center gap-2 ${currentStep === "tests" ? "opacity-100" : "opacity-60"}`}>
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${currentStep === "tests" ? "bg-white text-teal-600" : "bg-white/30 text-white"
                                }`}>
                                1
                            </span>
                            <span className="hidden sm:inline font-medium">Select Tests</span>
                        </div>
                        <div className="w-12 h-0.5 bg-white/30" />
                        <div className={`flex items-center gap-2 ${currentStep === "details" ? "opacity-100" : "opacity-60"}`}>
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${currentStep === "details" ? "bg-white text-teal-600" : "bg-white/30 text-white"
                                }`}>
                                2
                            </span>
                            <span className="hidden sm:inline font-medium">Fill Details</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {currentStep === "tests" ? (
                    <motion.div
                        key="tests"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
                    >
                        {/* Search and Filter */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex-1">
                                    <Input
                                        placeholder="Search tests by name, category, or condition..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        leftIcon={
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="mt-4 overflow-x-auto hide-scrollbar">
                                <CategoryFilter
                                    categories={categories}
                                    activeCategory={activeCategory}
                                    onCategoryChange={setActiveCategory}
                                />
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-gray-600">
                                Showing <span className="font-semibold text-gray-900">{filteredTests.length}</span> tests
                            </p>
                            {selectedTests.length > 0 && (
                                <p className="text-teal-600 font-medium">
                                    {selectedTests.length} selected • {formatCurrency(totalAmount)}
                                </p>
                            )}
                        </div>

                        {/* Tests Grid - No stagger animation for performance */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-32">
                            {filteredTests.map((test) => (
                                <TestCard
                                    key={test.id}
                                    test={test}
                                    isSelected={selectedTests.some((t) => t.id === test.id)}
                                    onToggle={toggleTest}
                                />
                            ))}
                        </div>

                        {filteredTests.length === 0 && (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">No tests found</h3>
                                <p className="text-gray-500">Try adjusting your search or filter</p>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="details"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
                    >
                        {/* Back Button */}
                        <button
                            onClick={goBackToTests}
                            className="flex items-center gap-2 text-gray-600 hover:text-teal-600 mb-6 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Test Selection
                        </button>

                        {/* Error Toast */}
                        <AnimatePresence>
                            {errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-3"
                                >
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>{errorMessage}</p>
                                    <button onClick={() => setErrorMessage(null)} className="ml-auto">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Selected Tests Summary */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Tests ({selectedTests.length})</h3>
                            <div className="space-y-3 max-h-60 overflow-y-auto">
                                {selectedTests.map((test) => (
                                    <div key={test.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">{test.name}</p>
                                            <p className="text-sm text-gray-500">{test.category}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-semibold text-gray-900">{formatCurrency(test.price)}</span>
                                            <button
                                                onClick={() => removeTest(test)}
                                                className="text-red-500 hover:text-red-600 p-1"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                                <span className="text-gray-600">Total Amount</span>
                                <span className="text-2xl font-bold text-gray-900">{formatCurrency(totalAmount)}</span>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Personal Details */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Details</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Input
                                        label="First Name"
                                        placeholder="Enter first name"
                                        {...register("first_name", { required: "First name is required" })}
                                        error={errors.first_name?.message}
                                    />
                                    <Input
                                        label="Last Name"
                                        placeholder="Enter last name"
                                        {...register("last_name", { required: "Last name is required" })}
                                        error={errors.last_name?.message}
                                    />
                                </div>
                                <div className="mt-4">
                                    <Input
                                        label="Mobile Number"
                                        placeholder="10-digit mobile number"
                                        {...register("mobile", {
                                            required: "Mobile number is required",
                                            pattern: {
                                                value: /^[6-9]\d{9}$/,
                                                message: "Enter a valid 10-digit mobile number",
                                            },
                                        })}
                                        error={errors.mobile?.message}
                                    />
                                </div>
                            </div>

                            {/* Address Details */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Details</h3>
                                <p className="text-sm text-gray-500 mb-4">Currently serving in Lucknow, Uttar Pradesh</p>

                                <div className="space-y-4">
                                    {/* State & City (Read-only for now) */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
                                            <select
                                                {...register("state")}
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                                                disabled
                                            >
                                                {STATE_OPTIONS.map((state) => (
                                                    <option key={state} value={state}>{state}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                                            <select
                                                {...register("city")}
                                                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-700"
                                                disabled
                                            >
                                                {CITY_OPTIONS.map((city) => (
                                                    <option key={city} value={city}>{city}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Area Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Select Area / Locality</label>
                                        <select
                                            {...register("area", { required: "Please select an area" })}
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                                        >
                                            <option value="">Select your area</option>
                                            {LUCKNOW_AREAS.map((area) => (
                                                <option key={area} value={area}>{area}</option>
                                            ))}
                                        </select>
                                        {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area.message}</p>}
                                    </div>

                                    {/* Custom Area Input (when "Other" is selected) */}
                                    <AnimatePresence>
                                        {isOtherArea && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-4">
                                                    <p className="text-sm text-amber-700">
                                                        <strong>Note:</strong> You selected &quot;Other&quot;. Please enter your area details manually below.
                                                    </p>
                                                </div>
                                                <Input
                                                    label="Enter Your Area / Locality"
                                                    placeholder="e.g., Vikas Nagar Sector 2"
                                                    {...register("custom_area", {
                                                        required: isOtherArea ? "Area name is required" : false,
                                                    })}
                                                    error={errors.custom_area?.message}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Building & Flat Details */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <Input
                                            label="Building / Society Name"
                                            placeholder="Enter building or society name"
                                            {...register("building", { required: "Building name is required" })}
                                            error={errors.building?.message}
                                        />
                                        <Input
                                            label="Flat / House No."
                                            placeholder="Enter flat or house number"
                                            {...register("flat_number")}
                                        />
                                    </div>

                                    {/* Landmark & Pincode */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <Input
                                            label="Landmark (Optional)"
                                            placeholder="Near hospital, school, etc."
                                            {...register("landmark")}
                                        />
                                        <Input
                                            label="Pincode"
                                            placeholder="6-digit pincode"
                                            {...register("pincode", {
                                                required: "Pincode is required",
                                                pattern: {
                                                    value: /^[1-9][0-9]{5}$/,
                                                    message: "Enter a valid 6-digit pincode",
                                                },
                                            })}
                                            error={errors.pincode?.message}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="lg"
                                fullWidth
                                isLoading={isSubmitting}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Booking..." : "Confirm Booking"}
                            </Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Selected Tests Summary Bar */}
            <AnimatePresence>
                {currentStep === "tests" && selectedTests.length > 0 && (
                    <SelectedTestsSummary
                        tests={selectedTests}
                        onRemove={removeTest}
                        onClear={clearTests}
                        onProceed={proceedToDetails}
                    />
                )}
            </AnimatePresence>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={handleSuccessClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Success Animation */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center"
                            >
                                <motion.svg
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="w-12 h-12 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <motion.path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M5 13l4 4L19 7"
                                    />
                                </motion.svg>
                            </motion.div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Booking Confirmed!
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Thank you for your booking. Our collection boy will reach your doorstep in{" "}
                                <span className="font-semibold text-teal-600">1-2 hours</span>.
                            </p>

                            <div className="bg-teal-50 rounded-xl p-4 mb-6">
                                <p className="text-sm text-teal-700">
                                    You will receive a confirmation SMS shortly with the phlebotomist&apos;s contact details.
                                </p>
                            </div>

                            <Button onClick={handleSuccessClose} fullWidth>
                                Done
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
