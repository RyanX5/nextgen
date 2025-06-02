"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Upper() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="bg-gradient-to-r from-[#b3aef5] via-[#d7cbe7] to-[#eaa879] text-background  flex items-center justify-between px-4 py-1 text-xs md:text-sm z-1">
            <div className="w-full text-center">
                <a href="https://nextgeneration.ae" className="hover:underline">
                    Not in the US? <span className="font-semibold">Visit our Dubai website.</span>
                </a>
            </div>
            <button
                className="ml-4 shrink-0"
                aria-label="Dismiss banner"
                onClick={() => setVisible(false)}
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
