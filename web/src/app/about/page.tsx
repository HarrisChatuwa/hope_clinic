import { Hero } from "@/components/Hero";
import { CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title="About Hope Family Clinic"
                subtitle="Founded in 2018 with a vision to restore health and hope through compassionate care."
                imageSrc="/images/clinic-1.jpg"
                imageAlt="Hope Family Clinic Building"
                ctaText="Our Services"
                ctaLink="/services"
            />

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto grid gap-12 lg:grid-cols-2">
                    <FadeIn direction="left" className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Story</h2>
                        <p className="text-lg text-muted-foreground">
                            Hope Family Clinic Limited was founded in 2018 by Alepembwe Bwisengo. Located in the Dzaleka Refugee Camp area, we have grown to serve a population of over 86,000 people.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Our clinic operates as a registered limited company but with a heart for the community, providing essential medical services to refugees and the local host community alike.
                        </p>
                    </FadeIn>
                    <FadeIn direction="right" delay={0.2} className="space-y-6">
                        <div className="bg-muted p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Identity</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li><strong>Name:</strong> Hope Family Clinic Limited</li>
                                <li><strong>Status:</strong> Registered Limited Company</li>
                                <li><strong>Slogan:</strong> "Compassionate Care for Every Life We Touch"</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="py-12 md:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 mx-auto">
                    <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <StaggerItem className="bg-background p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                            <p className="text-muted-foreground">
                                A community in which all people achieve their full potential for health and well-being across the lifespan. We work to be trusted by patients, valued partners in the community, and creators of positive change.
                            </p>
                        </StaggerItem>
                        <StaggerItem className="bg-background p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To promote the health and wellbeing of the local population by providing accessible high-quality medical care for the people of all ages without discrimination.
                            </p>
                        </StaggerItem>
                        <StaggerItem className="bg-background p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Our Goal</h3>
                            <p className="text-muted-foreground">
                                To provide comprehensive health services to the individual, family and community within Dzaleka catchment area in Dowa district.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Core Values & Guiding Principles */}
            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-8">Our Core Values</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our work is guided by key values: <strong>Respect, honesty, collaboration, Excellency, innovation and professionalism.</strong>
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        <StaggerItem>
                            <ValueCard
                                title="Patient First"
                                description="The patients always come first and we are dedicated to patient care."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <ValueCard
                                title="Compassionate Listening"
                                description="We are compassionate listeners, we hear the issues of our patients, respect them, and do everything in our power to help."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <ValueCard
                                title="Patient-Centered Care"
                                description="We provide patient centered services; people who come to Hope family clinic can expect polite, friendly, helpful staff members who relate to each person as an individual recognizing their history, relationships, culture and need."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <ValueCard
                                title="Excellence"
                                description="We go the extra mile, to their expectation. We believe that providing high quality accessible health care is our reason for being. We seek to be a model for other health providers."
                            />
                        </StaggerItem>
                        <StaggerItem className="md:col-span-2">
                            <ValueCard
                                title="Team Approach"
                                description="We use team approach to providing health care, and involve the patient as part of our team."
                            />
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-12 md:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 mx-auto">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Team</h2>
                    </FadeIn>
                    <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <StaggerItem>
                            <TeamMember
                                name="Alepembwe Bwisengo"
                                role="Founder & Health Coordinator"
                                description="Visionary leader guiding strategy, partnerships, and operations. Founded the clinic in 2018."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <TeamMember
                                name="Dr. Mercy Phiri"
                                role="Medical Director"
                                description="Oversees patient care standards, mentors clinical staff, and leads emergency response efforts."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <TeamMember
                                name="Sr. Mary Banda"
                                role="Head Nurse"
                                description="Manages nursing teams, coordinates maternal/child health, and ensures compassionate bedside care."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <TeamMember
                                name="John Phiri"
                                role="Outreach & Community Engagement Manager"
                                description="Develops health education campaigns, liaises with community leaders, and organizes mobile clinics."
                            />
                        </StaggerItem>
                        <StaggerItem>
                            <TeamMember
                                name="Josephine Mhango"
                                role="Volunteer Coordinator"
                                description="Recruits, trains, and supports volunteers."
                            />
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </div>
    )
}

function ValueCard({ title, description, className = "" }: { title: string, description: string, className?: string }) {
    return (
        <div className={`bg-background p-6 rounded-lg border-l-4 border-secondary hover:shadow-md transition-shadow ${className}`}>
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                {title}
            </h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}

function TeamMember({ name, role, description }: { name: string, role: string, description?: string }) {
    return (
        <div className="bg-background p-6 rounded-xl shadow-sm space-y-4 hover:shadow-lg transition-all hover:scale-105">
            <div className="h-32 w-32 rounded-full bg-muted overflow-hidden flex items-center justify-center mx-auto">
                <span className="text-muted-foreground text-xs">Photo</span>
            </div>
            <div className="text-center space-y-2">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-sm text-primary font-medium">{role}</p>
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
        </div>
    )
}
