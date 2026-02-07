"use client";

import React, { Suspense, lazy } from "react";

const LottieComponent = lazy(() => import("lottie-react"));

interface LottieAnimationProps {
    animationData: object;
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const LoadingPlaceholder: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`flex items-center justify-center ${className || "w-full h-full"}`}>
        <div className="w-12 h-12 rounded-full border-4 border-teal-200 border-t-teal-500 animate-spin" />
    </div>
);

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
    animationData,
    loop = true,
    autoplay = true,
    className,
    style,
}) => {
    return (
        <Suspense fallback={<LoadingPlaceholder className={className} />}>
            <LottieComponent
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}
                className={className}
                style={style}
            />
        </Suspense>
    );
};

// Loading Animation Data (inline simple animation)
export const loadingAnimationData = {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 120,
    w: 200,
    h: 200,
    nm: "Loading",
    ddd: 0,
    assets: [],
    layers: [
        {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "Circle",
            sr: 1,
            ks: {
                o: { a: 0, k: 100 },
                r: {
                    a: 1,
                    k: [
                        { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
                        { t: 120, s: [360] },
                    ],
                },
                p: { a: 0, k: [100, 100, 0] },
                a: { a: 0, k: [0, 0, 0] },
                s: { a: 0, k: [100, 100, 100] },
            },
            ao: 0,
            shapes: [
                {
                    ty: "el",
                    s: { a: 0, k: [80, 80] },
                    p: { a: 0, k: [0, 0] },
                    nm: "Ellipse",
                },
                {
                    ty: "st",
                    c: { a: 0, k: [0.31, 0.76, 0.97, 1] },
                    o: { a: 0, k: 100 },
                    w: { a: 0, k: 8 },
                    lc: 2,
                    lj: 1,
                    d: [
                        { n: "d", nm: "dash", v: { a: 0, k: 50 } },
                        { n: "g", nm: "gap", v: { a: 0, k: 150 } },
                        { n: "o", nm: "offset", v: { a: 0, k: 0 } },
                    ],
                    nm: "Stroke",
                },
            ],
            ip: 0,
            op: 120,
            st: 0,
        },
    ],
};

// Success Animation Data
export const successAnimationData = {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 60,
    w: 200,
    h: 200,
    nm: "Success",
    ddd: 0,
    assets: [],
    layers: [
        {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "Check",
            sr: 1,
            ks: {
                o: { a: 0, k: 100 },
                r: { a: 0, k: 0 },
                p: { a: 0, k: [100, 100, 0] },
                a: { a: 0, k: [0, 0, 0] },
                s: { a: 0, k: [100, 100, 100] },
            },
            ao: 0,
            shapes: [
                {
                    ty: "gr",
                    it: [
                        {
                            ty: "el",
                            s: { a: 0, k: [120, 120] },
                            p: { a: 0, k: [0, 0] },
                            nm: "Circle",
                        },
                        {
                            ty: "fl",
                            c: { a: 0, k: [0.4, 0.73, 0.41, 1] },
                            o: { a: 0, k: 100 },
                            nm: "Fill",
                        },
                    ],
                    nm: "Circle Group",
                },
            ],
            ip: 0,
            op: 60,
        },
    ],
};
