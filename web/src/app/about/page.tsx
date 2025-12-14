import { Hero } from "@/components/Hero";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title="About Hope Family Clinic"
                subtitle="Founded in 2018 with a vision to restore health and hope through compassionate care."
                imageSrc="/images/clinic-1.jpg" // Fallback to placeholder if copy fails
                imageAlt="Hope Family Clinic Building"
                ctaText="Our Services"
                ctaLink="/services"
            />

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto grid gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Story</h2>
                        <p className="text-lg text-muted-foreground">
                            Hope Family Clinic Limited was founded in 2018 by Alepembwe Bwisengo. Located in the Dzaleka Refugee Camp area, we have grown to serve a population of over 86,000 people.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Our clinic operates as a registered limited company but with a heart for the community, providing essential medical services to refugees and the local host community alike.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-muted p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Identity</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li><strong>Name:</strong> Hope Family Clinic Limited</li>
                                <li><strong>Status:</strong> Registered Limited Company</li>
                                <li><strong>Slogan:</strong> "Compassionate Care for Every Life We Touch"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-background p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                            <p className="text-muted-foreground">
                                A community in which all people achieve their full potential for health and well-being across the lifespan. We work to be trusted by patients, valued partners in the community, and creators of positive change.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To promote the health and wellbeing of the local population by providing accessible high-quality medical care for the people of all ages without discrimination.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Core Values</h3>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li>Respect</li>
                                <li>Honesty</li>
                                <li>Collaboration</li>
                                <li>Excellence</li>
                                <li>Innovation</li>
                                <li>Professionalism</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary text-center mb-12">Our Team</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <TeamMember name="Alepembwe Bwisengo" role="Founder & Health Coordinator" />
                        <TeamMember name="Dr. Mercy Phiri" role="Medical Director" />
                        <TeamMember name="Sr. Mary Banda" role="Head Nurse" />
                        <TeamMember name="John Phiri" role="Outreach Manager" />
                    </div>
                </div>
            </section>
        </div>
    )
}

function TeamMember({ name, role }: { name: string, role: string }) {
    return (
        <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-32 w-32 rounded-full bg-muted overflow-hidden flex items-center justify-center">
                {/* Placeholder for staff image */}
                <span className="text-muted-foreground text-xs">Photo</span>
            </div>
            <div className="space-y-1">
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
            </div>
        </div>
    )
}
