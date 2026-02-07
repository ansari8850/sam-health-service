"use client";

import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface UserFormData {
    firstName: string;
    lastName: string;
    mobileNumber: string;
}

interface UserFormProps {
    register: UseFormRegister<UserFormData & Record<string, unknown>>;
    errors: FieldErrors<UserFormData>;
}

export const UserForm: React.FC<UserFormProps> = ({ register, errors }) => {
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
                        1
                    </span>
                    Personal Details
                </h3>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
                <Input
                    label="First Name"
                    placeholder="Enter first name"
                    {...register("firstName", {
                        required: "First name is required",
                        minLength: { value: 2, message: "Minimum 2 characters" },
                    })}
                    error={errors.firstName?.message}
                />
                <Input
                    label="Last Name"
                    placeholder="Enter last name"
                    {...register("lastName", {
                        required: "Last name is required",
                        minLength: { value: 2, message: "Minimum 2 characters" },
                    })}
                    error={errors.lastName?.message}
                />
            </motion.div>

            <motion.div variants={fadeInUp}>
                <Input
                    label="Mobile Number"
                    placeholder="Enter 10-digit mobile number"
                    type="tel"
                    {...register("mobileNumber", {
                        required: "Mobile number is required",
                        pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter valid 10-digit mobile number",
                        },
                    })}
                    error={errors.mobileNumber?.message}
                    leftIcon={
                        <span className="text-gray-500 text-sm">+91</span>
                    }
                />
            </motion.div>
        </motion.div>
    );
};
