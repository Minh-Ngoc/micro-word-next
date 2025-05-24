"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider locale="en-GB">
            <ToastProvider placement="top-right" />

            {children}
        </HeroUIProvider>
    );
}
