import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Heart, Globe, Utensils, Stethoscope, Wrench, Megaphone, CheckCircle2 } from "lucide-react";

export default function VolunteerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title="Join Our Volunteer Team"
                subtitle="Make a lasting impact. We offer opportunities for medical and non-medical volunteers to serve our community."
                imageSrc="/images/staff-1.jpg"
                imageAlt="Volunteers at Hope Clinic"
                ctaText="Apply Now"
                ctaLink="mailto:volunteers@hopefamilyclinic.org"
            />

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto grid gap-12 lg:grid-cols-2">

                    <div>
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
                    </div>

                    <div className="bg-muted/30 p-8 rounded-xl border">
                        <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                        <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                            <li>Minimum commitment of 4 weeks.</li>
                            <li>Basic proficiency in English (Chichewa is a plus).</li>
                            <li><strong>Vaccinations:</strong> Yellow Fever, Hepatitis A/B, Tetanus.</li>
                        </ul>

                        <h3 className="text-xl font-bold mb-4">Application Steps</h3>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                            <li>Review roles below</li>
                            <li>Complete online form</li>
                            <li>Submit CV and two references</li>
                            <li>Virtual interview</li>
                            <li>Receive welcome packet</li>
                            <li>Arrive in Malawi</li>
                        </ol>

                        <div className="mt-8">
                            <Button asChild size="lg" className="w-full">
                                <Link href="mailto:volunteers@hopefamilyclinic.org">Send Application Email</Link>
                            </Button>
                            <p className="text-xs text-center mt-2 text-muted-foreground">
                                Contact: Josephine Mhango (Volunteer Coordinator)
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-12 md:py-24 bg-primary/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Available Roles</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        We welcome volunteers with diverse skills and backgrounds. Find the role that matches your expertise.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <RoleCard
                            title="Clinical Support Volunteer"
                            icon={<Stethoscope />}
                            description="Assist nurses/doctors with intake and assessments."
                        />
                        <RoleCard
                            title="Community Health Educator"
                            icon={<Megaphone />}
                            description="Lead workshops and door-to-door outreach."
                        />
                        <RoleCard
                            title="Maternal & Child Health Assistant"
                            icon={<BabyIcon />}
                            description="Support prenatal clinics and monitor growth metrics."
                        />
                        <RoleCard
                            title="Logistics & Supply Coordinator"
                            icon={<PackageIcon />}
                            description="Manage inventory and track supplies."
                        />
                        <RoleCard
                            title="Administration & Fundraising Assistant"
                            icon={<PieChartIcon />}
                            description="Grant proposals and donor databases."
                        />
                        <RoleCard
                            title="Solar & Facilities Volunteer"
                            icon={<Wrench />}
                            description="Maintain solar power equipment and clinic repairs."
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

function BenefitItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <li className="flex items-center gap-3 p-3 bg-background rounded-lg shadow-sm">
            {icon}
            <span className="text-sm font-medium">{text}</span>
        </li>
    )
}

function RoleCard({ title, icon, description }: { title: string, icon: React.ReactNode, description: string }) {
    return (
        <div className="bg-background p-6 rounded-lg shadow-sm border hover:border-primary/50 transition-colors">
            <div className="mb-4 text-primary h-8 w-8 [&>svg]:h-8 [&>svg]:w-8">{icon}</div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}

function UsersIcon(props: any) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
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
