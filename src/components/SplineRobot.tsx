"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface SplineRobotProps {
    className?: string;
    onLoaded?: () => void;
}

export default function SplineRobot({ className = "", onLoaded }: SplineRobotProps) {
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);
    const [canLoad, setCanLoad] = useState(false);
    const [SplineComponent, setSplineComponent] = useState<React.ComponentType<{
        scene: string;
        onLoad?: (splineApp: unknown) => void;
        style?: React.CSSProperties;
        className?: string;
    }> | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => {
        const isVeryLowEnd = navigator.hardwareConcurrency <= 1;
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
        const noWebGL = !gl;

        if (!noWebGL && !isVeryLowEnd) {
            setCanLoad(true);
            import("@splinetool/react-spline").then((mod) => {
                setSplineComponent(() => mod.default);
            });
        } else {
            onLoaded?.();
        }
    }, [onLoaded]);

    useEffect(() => {
        if (!canLoad) return;

        timeoutRef.current = setTimeout(() => {
            if (!loaded) {
                setFailed(true);
                onLoaded?.();
            }
        }, 8000);

        return () => clearTimeout(timeoutRef.current);
    }, [canLoad, loaded, onLoaded]);

    const onLoad = useCallback(() => {
        clearTimeout(timeoutRef.current);
        setLoaded(true);
        onLoaded?.();
    }, [onLoaded]);

    return (
        <div
            className={`absolute inset-0 z-0 overflow-hidden ${className}`}
            style={{ contain: "strict" }}
        >
            {/* Spline scene — transparent bg so stars show through */}
            {canLoad && !failed && SplineComponent && (
                <SplineComponent
                    scene="https://prod.spline.design/iuPdsPFeGspafc6M/scene.splinecode"
                    onLoad={onLoad}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 1.0s ease",
                    }}
                />
            )}
        </div>
    );
}
