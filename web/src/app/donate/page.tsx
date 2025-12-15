import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CreditCard, Landmark, Smartphone, Package, Shield, Heart, Calendar, Handshake, TrendingUp, Users2 } from "lucide-react";

export default function DonatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title="Support Our Cause"
                subtitle="Your contribution saves lives. 100% of your donation goes directly to patient care and clinic operations."
                imageSrc="/images/hero-1.jpg"
                imageAlt="Donation Impact"
                ctaText="Donate Now"
                ctaLink="#donate"
            />

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">See Your Impact</h2>
                        <p className="text-muted-foreground mb-8">Every dollar makes a difference in someone's life.</p>
                        <div className="grid md:grid-cols-3 gap-8 mt-8">
                            <ImpactCard amount="$25" description="Provides a full health consultation for one patient." />
                            <ImpactCard amount="$50" description="Funds five childhood vaccinations." />
                            <ImpactCard amount="$100" description="Supports prenatal care for expectant mothers." />
                        </div>
                    </div>

                    {/* Ways to Give Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-4">Ways to Give</h2>
                        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Choose the giving strategy that works best for you. Every contribution makes a lasting impact.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <GivingStrategyCard
                                icon={<Heart className="h-6 w-6" />}
                                title="One-Time Gift"
                                description="A single contribution to address immediate needs."
                            />
                            <GivingStrategyCard
                                icon={<Calendar className="h-6 w-6" />}
                                title="Monthly Sustainer Program"
                                description="Recurring gifts that ensure our clinic remains stocked with vital supplies."
                            />
                            <GivingStrategyCard
                                icon={<Package className="h-6 w-6" />}
                                title="In-Kind Contributions"
                                description="We accept direct donations of medicines, medical equipment, and solar panels."
                            />
                            <GivingStrategyCard
                                icon={<Handshake className="h-6 w-6" />}
                                title="Corporate Partnerships"
                                description="Corporate matching gifts and strategic partnerships."
                            />
                            <GivingStrategyCard
                                icon={<TrendingUp className="h-6 w-6" />}
                                title="Fundraising Campaigns"
                                description="Host a virtual run, community drive, or faith-based event to support us."
                                className="md:col-span-2 lg:col-span-1"
                            />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-8" id="donate">How to Donate</h2>
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
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

                    {/* Transparency Promise */}
                    <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Shield className="h-6 w-6 text-primary" /> Our Transparency Promise
                        </h3>
                        <p className="text-muted-foreground">
                            We uphold the highest standards of stewardship: <strong>Quarterly Impact Reports</strong> emailed to donors, <strong>Annual Audited Financial Statements</strong> available on our website.
                        </p>
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

function GivingStrategyCard({ icon, title, description, className = "" }: { icon: React.ReactNode, title: string, description: string, className?: string }) {
    return (
        <div className={`bg-background p-6 rounded-xl shadow-sm border hover:border-primary/50 transition-colors ${className}`}>
            <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">
                {icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}
