"use client";

import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { motion } from "framer-motion";
import { Input, Select } from "@/components/ui/Input";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { LOCATION_OPTIONS, CITY_OPTIONS } from "@/lib/constants";

interface AddressFormData {
    location: string;
    landmark: string;
    roomNumber: string;
    buildingName: string;
    area: string;
    city: string;
    pincode: string;
}

interface AddressFormProps {
    register: UseFormRegister<AddressFormData & Record<string, unknown>>;
    errors: FieldErrors<AddressFormData>;
}

export const AddressForm: React.FC<AddressFormProps> = ({ register, errors }) => {
    const locationOptions = LOCATION_OPTIONS.map((loc) => ({ value: loc, label: loc }));
    const cityOptions = CITY_OPTIONS.map((city) => ({ value: city, label: city }));

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                    </span>
                    Address Details
                </h3>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
                <Select
                    label="Location"
                    options={[{ value: "", label: "Select location" }, ...locationOptions]}
                    {...register("location", { required: "Location is required" })}
                    error={errors.location?.message}
                />
                <Input
                    label="Landmark"
                    placeholder="Near landmark (optional)"
                    {...register("landmark")}
                />
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
                <Input
                    label="Room / Flat Number"
                    placeholder="e.g., 101, A-202"
                    {...register("roomNumber", { required: "Room/Flat number is required" })}
                    error={errors.roomNumber?.message}
                />
                <Input
                    label="Building Name"
                    placeholder="Building / Society name"
                    {...register("buildingName", { required: "Building name is required" })}
                    error={errors.buildingName?.message}
                />
            </motion.div>

            <motion.div variants={fadeInUp}>
                <Input
                    label="Area / Street"
                    placeholder="Area or street name"
                    {...register("area", { required: "Area is required" })}
                    error={errors.area?.message}
                />
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
                <Select
                    label="City"
                    options={[{ value: "", label: "Select city" }, ...cityOptions]}
                    {...register("city", { required: "City is required" })}
                    error={errors.city?.message}
                />
                <Input
                    label="Pincode"
                    placeholder="6-digit pincode"
                    type="text"
                    maxLength={6}
                    {...register("pincode", {
                        required: "Pincode is required",
                        pattern: {
                            value: /^[1-9][0-9]{5}$/,
                            message: "Enter valid 6-digit pincode",
                        },
                    })}
                    error={errors.pincode?.message}
                />
            </motion.div>
        </motion.div>
    );
};
