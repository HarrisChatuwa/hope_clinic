import { Hero } from "@/components/Hero";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title="Our Medical Services"
                subtitle="A broad primary care public health approach applied to all disorders."
                imageSrc="/images/clinic-2.jpg"
                imageAlt="Clinical Services"
                ctaText="Book Consultation"
                ctaLink="/contact"
            />

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto space-y-12">

                    {/* Clinical Services */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-4">Clinical Services</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-secondary" /> Outpatient Department (OPD)
                                </h3>
                                <p className="text-muted-foreground ml-7">Comprehensive care for pediatric, female, and male patients.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-secondary" /> Maternal & Child Health
                                </h3>
                                <ul className="list-disc list-inside ml-7 text-muted-foreground">
                                    <li>Postnatal check-ups</li>
                                    <li>Under-five clinic</li>
                                    <li>Sexual and Reproductive Health (Family planning)</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-secondary" /> Infectious Diseases
                                </h3>
                                <ul className="list-disc list-inside ml-7 text-muted-foreground">
                                    <li>STI Management</li>
                                    <li>Provider Initiated Testing and Counselling (PITC)</li>
                                    <li>Anti-retroviral therapy (ART)</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-secondary" /> Specialized Care
                                </h3>
                                <ul className="list-disc list-inside ml-7 text-muted-foreground">
                                    <li>Minor surgery</li>
                                    <li>Rehabilitation care</li>
                                    <li>Palliative care</li>
                                    <li>Patient Observation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Support Services */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-4">Support Services</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="p-6 bg-muted/30 rounded-lg text-center">
                                <h3 className="font-bold mb-2">Laboratory</h3>
                                <p className="text-sm text-muted-foreground">On-site diagnostics.</p>
                            </div>
                            <div className="p-6 bg-muted/30 rounded-lg text-center">
                                <h3 className="font-bold mb-2">Pharmacy</h3>
                                <p className="text-sm text-muted-foreground">Essential medicines.</p>
                            </div>
                            <div className="p-6 bg-muted/30 rounded-lg text-center">
                                <h3 className="font-bold mb-2">Youth-Friendly</h3>
                                <p className="text-sm text-muted-foreground">Targeted health services.</p>
                            </div>
                            <div className="p-6 bg-muted/30 rounded-lg text-center">
                                <h3 className="font-bold mb-2">Outreach</h3>
                                <p className="text-sm text-muted-foreground">Community mobile clinics.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
