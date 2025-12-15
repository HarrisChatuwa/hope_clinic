import { Button } from "@/components/Button";
import { Mail, Phone, MapPin, Send, Building2, Users, Stethoscope } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary py-12 text-primary-foreground">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
                    <p className="mt-2 text-primary-foreground/80 max-w-[600px] mx-auto">
                        We are here to help. Reach out to us for appointments, inquiries, or volunteering.
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">

                    {/* Contact Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {/* General Contact */}
                        <div className="bg-card p-6 rounded-xl shadow-sm border">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <Building2 className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">General Inquiries</h3>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-2">
                                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-medium">Administrator</p>
                                        <p className="text-muted-foreground">+265 99 466 6320</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Mail className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-muted-foreground">hopefamilyclinic@gmail.com</p>
                                        <p className="text-muted-foreground">mmekelwa@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Medical Services */}
                        <div className="bg-card p-6 rounded-xl shadow-sm border">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-secondary/10 rounded-full">
                                    <Stethoscope className="h-6 w-6 text-secondary" />
                                </div>
                                <h3 className="font-bold text-lg">Medical Services</h3>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-2">
                                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-medium">Medical Doctor</p>
                                        <p className="text-muted-foreground">+265 99 472 8882</p>
                                        <p className="text-muted-foreground">+265 88 402 2896</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-medium">General/Mobile Money</p>
                                        <p className="text-muted-foreground">+265 888 123 456</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Volunteer Program */}
                        <div className="bg-card p-6 rounded-xl shadow-sm border">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">Volunteer Program</h3>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-2">
                                    <Mail className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-medium">Volunteer Team</p>
                                        <p className="text-muted-foreground">volunteers@hopefamilyclinic.org</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium mb-1">Coordinator</p>
                                    <p className="text-muted-foreground">Josephine Mhango</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location & Form Section */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Location Info */}
                        <div className="space-y-6">
                            <div className="bg-card p-6 rounded-xl shadow-sm border">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    Our Location
                                </h3>
                                <div className="space-y-2 text-muted-foreground">
                                    <p className="font-semibold text-foreground">Hope Family Clinic Limited</p>
                                    <p>Lizungwe Area 145</p>
                                    <p>Dzaleka Refugee Camp</p>
                                    <p>Dowa District, Malawi</p>
                                    <div className="pt-4 border-t mt-4">
                                        <p className="font-medium text-foreground mb-2">Mailing Address</p>
                                        <p>PO Box 16 Dowa</p>
                                        <p>PO BOX 93 Lumbadzi</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted h-64 rounded-lg flex items-center justify-center text-muted-foreground border">
                                Map Embed Placeholder (Google Maps)
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card p-8 rounded-xl shadow-sm border">
                            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                            <form className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <input id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="How can we help?" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Type your message here..." />
                                </div>
                                <Button className="w-full">
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
