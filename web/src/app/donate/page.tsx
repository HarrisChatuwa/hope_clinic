import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CreditCard, Landmark, Smartphone, Package } from "lucide-react";

export default function DonatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title="Support Our Cause"
                subtitle="Your contribution saves lives. 100% of your donation goes directly to patient care and clinic operations."
                imageSrc="/images/hero-1.jpg"
                imageAlt="Donation Impact"
                ctaText="Donate Online"
                ctaLink="#online"
            />

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">See Your Impact</h2>
                        <div className="grid md:grid-cols-3 gap-8 mt-8">
                            <ImpactCard amount="$25" description="Provides one full health consultation for a patient in need." />
                            <ImpactCard amount="$50" description="Covers five essential childhood vaccinations." />
                            <ImpactCard amount="$100" description="Funds complete prenatal care for an expectant mother." />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12" id="online">
                        {/* Bank Transfer */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <Landmark className="h-6 w-6 text-primary" /> Bank Transfer
                            </h3>
                            <div className="bg-muted/50 p-6 rounded-xl border">
                                <div className="space-y-3 font-mono text-sm">
                                    <p><span className="text-muted-foreground">Bank Name:</span> Malawi Savings Bank</p>
                                    <p><span className="text-muted-foreground">Account Name:</span> Hope Family Clinic Limited</p>
                                    <p><span className="text-muted-foreground">Account Number:</span> 123456789</p>
                                    <p><span className="text-muted-foreground">SWIFT Code:</span> MWSBMWMW</p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Money */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <Smartphone className="h-6 w-6 text-primary" /> Mobile Money
                            </h3>
                            <div className="bg-muted/50 p-6 rounded-xl border">
                                <p className="font-medium">Airtel Money</p>
                                <p className="text-2xl font-bold text-primary mt-2">+265 888 123 456</p>
                            </div>
                        </div>

                        {/* In-Kind */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <Package className="h-6 w-6 text-primary" /> In-Kind Donations
                            </h3>
                            <p className="text-muted-foreground">
                                We gratefully accept medicines, medical equipment, and solar panels. Please contact us to arrange delivery.
                            </p>
                            <Button asChild variant="outline">
                                <Link href="/contact">Contact for Logistics</Link>
                            </Button>
                        </div>

                        {/* Online Placeholder */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <CreditCard className="h-6 w-6 text-primary" /> Online Donation
                            </h3>
                            <p className="text-muted-foreground">
                                Secure credit card payments are processed via our partner platform.
                            </p>
                            <Button size="lg" className="w-full sm:w-auto">
                                Donate via Credit Card (Coming Soon)
                            </Button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

function ImpactCard({ amount, description }: { amount: string, description: string }) {
    return (
        <div className="bg-background p-6 rounded-xl shadow-lg border-t-4 border-secondary transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-bold text-secondary mb-3">{amount}</div>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}
