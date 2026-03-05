"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import SplineRobot from "@/components/SplineRobot";
import ProductPins from "@/components/ProductPin";
import ProductCard from "@/components/ProductCard";
import HeroHeadline from "@/components/HeroHeadline";
import ShopButton from "@/components/ShopButton";
import Preloader from "@/components/Preloader";
import { StarsBackground } from "@/components/ui/stars-background";

export default function HeroSection() {
    const [isLoading, setIsLoading] = useState(true);
    const [splineLoaded, setSplineLoaded] = useState(false);

    const handleSplineLoaded = useCallback(() => {
        setSplineLoaded(true);
        setTimeout(() => setIsLoading(false), 300);
    }, []);

    return (
        <>
            <Preloader isLoading={isLoading} />

            <section
                className="relative w-full h-screen overflow-hidden bg-background"
                aria-labelledby="hero-heading"
                role="banner"
            >
                {/* Layer 0: Stars background */}
                <div className="absolute inset-0" style={{ zIndex: 0 }} aria-hidden="true">
                    <StarsBackground
                        starDensity={0.00010}
                        allStarsTwinkle={true}
                        minTwinkleSpeed={0.4}
                        maxTwinkleSpeed={1.2}
                    />
                </div>

                {/* Layer 1: 3D Robot (z-0) */}
                <SplineRobot onLoaded={handleSplineLoaded} />

                {/* Layer 2: Dark gradient overlay for text contrast (z-10) */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    aria-hidden="true"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 35%, transparent 60%)",
                    }}
                />

                {/* Layer 3: UI elements (z-20+) */}
                <Navbar />
                <ShopButton />
                <ProductPins splineLoaded={splineLoaded} />
                <HeroHeadline />
                <ProductCard />
            </section>
        </>
    );
}
