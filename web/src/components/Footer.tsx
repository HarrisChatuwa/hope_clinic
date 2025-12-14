import Link from "next/link"
import { Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-bold text-xl text-primary">
                            <Heart className="h-6 w-6 fill-primary" />
                            <span>Hope Family Clinic</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Compassionate Care for Every Life We Touch. Providing accessible high-quality medical care for all.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary">Our Services</Link></li>
                            <li><Link href="/volunteer" className="hover:text-primary">Volunteer</Link></li>
                            <li><Link href="/donate" className="hover:text-primary">Donate</Link></li>
                        </ul>
                    </div>

                    {/* Contact 1 */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>Lizungwe Area 145, Dzaleka Refugee Camp, Dowa District, Malawi</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 shrink-0" />
                                <span>+265 99 466 6320</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 shrink-0" />
                                <span>hopefamilyclinic@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal/Hours */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Hours</h3>
                        <p className="text-sm">
                            We are open to serve the community.<br />
                            Please contact us for specific department hours.
                        </p>
                        <div className="pt-4 text-xs">
                            &copy; {new Date().getFullYear()} Hope Family Clinic Ltd.<br />
                            Registered Limited Company.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
