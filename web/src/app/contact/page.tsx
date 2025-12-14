import { Button } from "@/components/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
                <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Hope Family Clinic</h3>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-1" />
                                <p>
                                    Lizungwe Area 145, Dzaleka Refugee Camp<br />
                                    Dowa District, Malawi<br />
                                    PO BOX 93 Lumbadzi
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary" />
                                <p>+265 99 466 6320 (Admin)</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary" />
                                <p>hopefamilyclinic@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-muted h-64 rounded-lg flex items-center justify-center text-muted-foreground border">
                            Map Embed Placeholder (Google Maps)
                        </div>
                    </div>

                    {/* Form */}
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
            </section>
        </div>
    )
}
