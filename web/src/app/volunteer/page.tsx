import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Heart, Globe, Utensils, Stethoscope, Wrench, Megaphone, CheckCircle2, Download, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FAQ } from "@/components/FAQ";

export default function VolunteerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title="Join Our Volunteer Team"
                subtitle="Make a lasting impact. We offer opportunities for medical and non-medical volunteers to serve our community."
                imageSrc="/images/staff-1.jpg"
                imageAlt="Volunteers at Hope Clinic"
                ctaText="Download Application"
                ctaLink="#application"
            />

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto grid gap-12 lg:grid-cols-2">

                    <FadeIn direction="left">
                        <h2 className="text-3xl font-bold mb-6 text-primary">Why Volunteer With Us?</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Volunteering at Hope Family Clinic provides a unique opportunity to work in a challenging yet rewarding environment. You will gain hands-on experience, experience cultural exchange, and directly contribute to the well-being of the Dzaleka community.
                        </p>
                        <h3 className="text-xl font-bold mb-4">What We Provide</h3>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            <BenefitItem icon={<Globe className="h-5 w-5 text-secondary" />} text="Cultural exchange activities" />
                            <BenefitItem icon={<Utensils className="h-5 w-5 text-secondary" />} text="3 meals per day & safe water" />
                            <BenefitItem icon={<Heart className="h-5 w-5 text-secondary" />} text="Shared housing near clinic" />
                            <BenefitItem icon={<CheckCircle2 className="h-5 w-5 text-secondary" />} text="On-site orientation" />
                            <BenefitItem icon={<CheckCircle2 className="h-5 w-5 text-secondary" />} text="Certificate of service" />
                        </ul>
                    </FadeIn>

                    <FadeIn direction="right" delay={0.2} className="bg-muted/30 p-8 rounded-xl border">
                        <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                        <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                            <li>Minimum commitment of 4 weeks</li>
                            <li>Basic proficiency in English (Chichewa is a plus)</li>
                            <li><strong>Vaccinations:</strong> Yellow Fever, Hepatitis A/B, Tetanus</li>
                            <li>Willingness to work in a busy clinic environment with limited resources</li>
                            <li>Background check and reference letters for clinical roles</li>
                        </ul>

                        <div className="mt-8" id="application">
                            <Button asChild size="lg" className="w-full mb-3">
                                <Link href="#" className="flex items-center justify-center gap-2">
                                    <Download className="h-5 w-5" />
                                    Download Application Form
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="w-full">
                                <Link href="mailto:volunteers@hopefamilyclinic.org">Email Application</Link>
                            </Button>
                            <p className="text-xs text-center mt-3 text-muted-foreground">
                                Contact: Josephine Mhango (Volunteer Coordinator)
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* Volunteer Voices Section */}
            <section className="py-12 md:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 mx-auto">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Volunteer Voices</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Hear from volunteers who have made a difference at Hope Family Clinic
                        </p>
                    </FadeIn>
                    <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <StaggerItem className="bg-background p-8 rounded-xl shadow-sm border-l-4 border-primary relative hover:shadow-lg transition-shadow">
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                            <p className="text-muted-foreground italic mb-6 relative z-10">
                                "Volunteering here transformed my perspective on global health. Every day I saw the impact of small acts—like teaching hand-washing—save lives."
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    E
                                </div>
                                <div>
                                    <p className="font-bold">Dr. Elena R.</p>
                                    <p className="text-sm text-muted-foreground">Clinical Support Volunteer</p>
                                </div>
                            </div>
                        </StaggerItem>
                        <StaggerItem className="bg-background p-8 rounded-xl shadow-sm border-l-4 border-secondary relative hover:shadow-lg transition-shadow">
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-secondary/20" />
                            <p className="text-muted-foreground italic mb-6 relative z-10">
                                "Working with local health educators taught me as much as I taught them. The bonds formed in Dzaleka are unforgettable."
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t">
                                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                                    M
                                </div>
                                <div>
                                    <p className="font-bold">Marcus K.</p>
                                    <p className="text-sm text-muted-foreground">Volunteer</p>
                                </div>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-12 md:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 mx-auto">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Application Process</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Follow these simple steps to join our volunteer team
                        </p>
                    </FadeIn>

                    <StaggerContainer className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            <StaggerItem>
                                <ProcessStep
                                    number="1"
                                    title="Review & Apply"
                                    description="Review available roles and download the application form"
                                />
                            </StaggerItem>
                            <StaggerItem>
                                <ProcessStep
                                    number="2"
                                    title="Submit Documents"
                                    description="Complete form, submit CV and two references"
                                />
                            </StaggerItem>
                            <StaggerItem>
                                <ProcessStep
                                    number="3"
                                    title="Interview"
                                    description="Participate in a virtual interview with our team"
                                />
                            </StaggerItem>
                            <StaggerItem>
                                <ProcessStep
                                    number="4"
                                    title="Welcome Packet"
                                    description="Receive detailed information and preparation materials"
                                />
                            </StaggerItem>
                            <StaggerItem>
                                <ProcessStep
                                    number="5"
                                    title="Pre-Departure"
                                    description="Complete vaccinations and travel arrangements"
                                />
                            </StaggerItem>
                            <StaggerItem>
                                <ProcessStep
                                    number="6"
                                    title="Arrival"
                                    description="Arrive in Malawi and begin your volunteer journey"
                                />
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Available Roles</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We welcome volunteers with diverse skills and backgrounds. Find the role that matches your expertise.
                        </p>
                    </FadeIn>
                    <StaggerContainer className="grid md:grid-cols-3 gap-6">
                        <StaggerItem>
                            <RoleCard
                                title="Clinical Support Volunteer"
                                icon={<Stethoscope />}
                                description="Assist nurses/doctors with intake and assessments."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <RoleCard
                                title="Community Health Educator"
                                icon={<Megaphone />}
                                description="Lead workshops and door-to-door outreach."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <RoleCard
                                title="Maternal & Child Health Assistant"
                                icon={<BabyIcon />}
                                description="Support prenatal clinics and monitor growth metrics."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <RoleCard
                                title="Logistics & Supply Coordinator"
                                icon={<PackageIcon />}
                                description="Manage inventory and track supplies."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <RoleCard
                                title="Administration & Fundraising Assistant"
                                icon={<PieChartIcon />}
                                description="Grant proposals and donor databases."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <RoleCard
                                title="Solar & Facilities Volunteer"
                                icon={<Wrench />}
                                description="Maintain solar power equipment and clinic repairs."
                            />
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <FadeIn>
                        <FAQ
                            title="Volunteer FAQs"
                            items={[
                                {
                                    question: "How long is the minimum volunteer commitment?",
                                    answer: "We require a minimum commitment of 4 weeks to ensure volunteers can make a meaningful impact and fully integrate into our team and community."
                                },
                                {
                                    question: "Do I need medical experience to volunteer?",
                                    answer: "Not necessarily! While we welcome medical professionals, we also have roles for non-medical volunteers in administration, logistics, community outreach, and facilities maintenance."
                                },
                                {
                                    question: "What vaccinations are required?",
                                    answer: "All volunteers must have Yellow Fever, Hepatitis A/B, and Tetanus vaccinations up to date before arrival. We recommend consulting with a travel health clinic 6-8 weeks before departure."
                                },
                                {
                                    question: "Is accommodation provided?",
                                    answer: "Yes! We provide shared housing near the clinic, along with 3 meals per day and safe drinking water."
                                },
                                {
                                    question: "What is the application process timeline?",
                                    answer: "From application submission to arrival, the process typically takes 2-3 months. This includes document review, interview, background check, and pre-departure preparations."
                                },
                                {
                                    question: "Can I volunteer if I don't speak Chichewa?",
                                    answer: "Yes! Basic proficiency in English is sufficient. However, learning some Chichewa phrases is encouraged and we provide language support during orientation."
                                }
                            ]}
                        />
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}

function BenefitItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <li className="flex items-center gap-3 p-3 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
            {icon}
            <span className="text-sm font-medium">{text}</span>
        </li>
    )
}

function ProcessStep({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div className="relative bg-background p-6 rounded-xl shadow-sm border hover:shadow-lg hover:scale-105 transition-all">
            <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {number}
            </div>
            <h3 className="font-bold text-lg mb-2 mt-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}

function RoleCard({ title, icon, description }: { title: string, icon: React.ReactNode, description: string }) {
    return (
        <div className="bg-background p-6 rounded-lg shadow-sm border hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all">
            <div className="mb-4 text-primary h-8 w-8 [&>svg]:h-8 [&>svg]:w-8">{icon}</div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}

function BabyIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 12h.01" />
            <path d="M15 12h.01" />
            <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
            <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.8 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.8A9 9 0 0 1 12 2.1l.3.9a4.5 4.5 0 0 0 9.1 1.8l.6 1.5Z" />
        </svg>
    )
}

function PackageIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22v-9.5" />
        </svg>
    )
}

function PieChartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
    )
}
