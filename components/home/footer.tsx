import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background/10 border-t border-muted-foreground/10 py-12 px-6 md:px-12 mt-24 text-foreground">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Branding */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-tight">NextGen Consultancy</h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        Empowering you to lead, innovate, and grow.
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                        Phone: +1 90 1315 3266
                    </p>
                </div>

                {/* Navigation */}
                <div className="md:flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground hidden">
                    <a href="#" className="hover:text-foreground transition">Home</a>
                    <a href="#" className="hover:text-foreground transition">Services</a>
                    <a href="#" className="hover:text-foreground transition">About</a>
                    <a href="#" className="hover:text-foreground transition">Contact</a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 text-muted-foreground">
                    <a href="#"><Facebook className="w-5 h-5 hover:text-foreground transition" /></a>
                    <a href="#"><Twitter className="w-5 h-5 hover:text-foreground transition" /></a>
                    <a href="#"><Linkedin className="w-5 h-5 hover:text-foreground transition" /></a>
                    <a href="#"><Mail className="w-5 h-5 hover:text-foreground transition" /></a>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} NextGen Consultancy. All rights reserved.
            </div>
        </footer>
    );
};
