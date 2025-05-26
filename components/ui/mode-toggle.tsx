"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"


export function ModeToggle() {
    const { setTheme } = useTheme()
    const [light, setLight] = useState(false);

    const toggle = () => {
        setLight(!light);
    }

    useEffect(() => {
        light ? setTheme("dark") : setTheme("light");
    }, [light]);


    return (
        <Button size={"icon"} onClick={toggle}>
            {!light && (
                <Sun />
            )}
            {light && (
                <Moon />
            )}
        </Button>
    )
}
