import { Globe, Link, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

export default function NavBar() {
    return (
        <div className="mx-4 z-50 mt-4 sticky top-4">
            <nav className="flex justify-between items-center border-foreground/10 border rounded-xl px-4 py-2 w-full max-w-6xl mx-auto backdrop-blur-md shadow-md/10 shadow-foreground dark:shadow-none">
                <div className="flex gap-2 items-center">
                    <Globe />
                    <p className="font-semibold hidden md:inline">NextGen</p>
                </div>

                {/* For Mobile */}
                <div className="md:hidden flex gap-2 items-center">
                    <ModeToggle />

                    <Menu />
                </div>

                {/* For Desktop */}
                <ul className="hidden md:flex md:gap-4 md:justify-center md:items-center md:text-sm">
                    <li><a href="/" className="hover:bg-accent rounded-xl px-4 py-2 transition-colors">Services</a></li>
                    <li><a href="/" className="hover:bg-accent rounded-xl px-4 py-2 transition-colors">About</a></li>
                    <li><a href="/" className="hover:bg-accent rounded-xl px-4 py-2 transition-colors">Portfolio</a></li>
                    <li><Button>Contact</Button></li>
                    <li><ModeToggle /></li>
                </ul>
            </nav>
        </div>

    )
}