"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "./Button"

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/contact", label: "Contact" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/"
        }
        return pathname.startsWith(href)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <Heart className="h-6 w-6 fill-primary text-primary" />
                    <span className="hidden sm:inline-block">Hope Family Clinic</span>
                    <span className="sm:hidden">HFC</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive(item.href)
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                        >
                            {item.label}
                            {isActive(item.href) && (
                                <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />
                            )}
                        </Link>
                    ))}
                    <Button asChild size="sm">
                        <Link href="/donate">Donate Now</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary py-2 ${isActive(item.href)
                                        ? "text-primary border-l-2 border-primary pl-3"
                                        : "text-muted-foreground pl-3"
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button asChild size="sm" className="w-full">
                            <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                                Donate Now
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
