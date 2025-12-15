import { Hero } from "@/components/Hero";
import { CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

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
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-4">Clinical Services</h2>
                        <StaggerContainer className="grid md:grid-cols-2 gap-8">
                            <StaggerItem className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-secondary" /> Outpatient Department (OPD)
                                </h3>
                                <p className="text-muted-foreground ml-7">Comprehensive care for pediatric, female, and male patients.</p>
                            </StaggerItem>

                            <StaggerItem className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-secondary" /> Maternal & Child Health
                                </h3>
                                <ul className="list-disc list-inside ml-7 text-muted-foreground">
                                    <li>Postnatal check-ups</li>
                                    <li>Under-five clinic</li>
                                    <li>Sexual and Reproductive Health (Family planning)</li>
                                </ul>
                            </StaggerItem>

                            <StaggerItem className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-secondary" /> Infectious Diseases
                                </h3>
                                <ul className="list-disc list-inside ml-7 text-muted-foreground">
                                    <li>STI Management</li>
                                    <li>PITC (Provider Initiated Testing and Counselling)</li>
                                    <li>ART (Anti-retroviral therapy)</li>
                                </ul>
                            </StaggerItem>

                            <StaggerItem className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-secondary" /> Clinical Care
                                </h3>
                                <ul className="list-disc list-inside ml-7 text-muted-foreground">
                                    <li>Acute and chronic problems</li>
                                    <li>Minor surgery</li>
                                    <li>Rehabilitation care</li>
                                    <li>Palliative care</li>
                                    <li>Observation of patient</li>
                                </ul>
                            </StaggerItem>
                        </StaggerContainer>
                    </FadeIn>

                    {/* Special Programs */}
                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-4">Special Programs</h2>
                        <StaggerContainer className="grid sm:grid-cols-3 gap-6">
                            <StaggerItem className="p-6 bg-muted/30 rounded-lg hover:shadow-md transition-shadow">
                                <h3 className="font-bold mb-2">Youth-Friendly Services</h3>
                                <p className="text-sm text-muted-foreground">Targeted health services for young people.</p>
                            </StaggerItem>
                            <StaggerItem className="p-6 bg-muted/30 rounded-lg hover:shadow-md transition-shadow">
                                <h3 className="font-bold mb-2">Postnatal Check-up</h3>
                                <p className="text-sm text-muted-foreground">Comprehensive mother and baby care.</p>
                            </StaggerItem>
                            <StaggerItem className="p-6 bg-muted/30 rounded-lg hover:shadow-md transition-shadow">
                                <h3 className="font-bold mb-2">Under-Five Clinic</h3>
                                <p className="text-sm text-muted-foreground">Growth monitoring and immunizations.</p>
                            </StaggerItem>
                        </StaggerContainer>
                    </FadeIn>

                    {/* Support Services & Facilities */}
                    <FadeIn delay={0.3}>
                        <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-4">Facilities & Support Services</h2>
                        <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <StaggerItem className="p-6 bg-muted/30 rounded-lg text-center hover:shadow-md hover:scale-105 transition-all">
                                <h3 className="font-bold mb-2">Laboratory</h3>
                                <p className="text-sm text-muted-foreground">On-site diagnostics and testing.</p>
                            </StaggerItem>
                            <StaggerItem className="p-6 bg-muted/30 rounded-lg text-center hover:shadow-md hover:scale-105 transition-all">
                                <h3 className="font-bold mb-2">Pharmacy</h3>
                                <p className="text-sm text-muted-foreground">Essential medicines available.</p>
                            </StaggerItem>
                            <StaggerItem className="p-6 bg-muted/30 rounded-lg text-center hover:shadow-md hover:scale-105 transition-all">
                                <h3 className="font-bold mb-2">Youth-Friendly</h3>
                                <p className="text-sm text-muted-foreground">Confidential adolescent care.</p>
                            </StaggerItem>
                            <StaggerItem className="p-6 bg-muted/30 rounded-lg text-center hover:shadow-md hover:scale-105 transition-all">
                                <h3 className="font-bold mb-2">Outreach Clinics</h3>
                                <p className="text-sm text-muted-foreground">Community mobile services.</p>
                            </StaggerItem>
                        </StaggerContainer>
                    </FadeIn>

                </div>
            </section>
        </div>
    )
}
