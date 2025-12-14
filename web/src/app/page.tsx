import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Activity, Users, Baby, HeartHandshake, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Compassionate Care for Every Life We Touch"
        subtitle="Providing accessible, high-quality medical care to the Dzaleka community and beyond. We are dedicated to your health and well-being."
        ctaText="Donate Now"
        ctaLink="/donate"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        imageSrc="/images/hero-1.jpg"
        imageAlt="Hope Family Clinic Staff and Patients"
      />

      {/* Impact Metrics */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">12k+</h3>
              <p className="text-primary-foreground/80">Patients Treated Annually</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">5k+</h3>
              <p className="text-primary-foreground/80">Vaccinations Administered</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">3k+</h3>
              <p className="text-primary-foreground/80">Mothers & Children Supported</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">86k+</h3>
              <p className="text-primary-foreground/80">Population Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To promote the health and wellbeing of the local population by providing accessible high-quality medical care for people of all ages without discrimination. We restore health and hope through compassionate care that respects the dignity of every individual.
          </p>
          <Button asChild variant="link" className="mt-4">
            <Link href="/about" className="text-primary text-lg">Learn more about us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a broad range of primary care and specialized services to meet the needs of our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Activity className="h-10 w-10 text-primary" />}
              title="Outpatient Care"
              description="Pediatric, female, and male OPD services for general health needs."
            />
            <ServiceCard
              icon={<Baby className="h-10 w-10 text-primary" />}
              title="Maternal & Child"
              description="Prenatal, postnatal, under-five clinic, and family planning."
            />
            <ServiceCard
              icon={<HeartHandshake className="h-10 w-10 text-primary" />}
              title="Infectious Diseases"
              description="Management of STIs, ART, and provider-initiated testing."
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Community Outreach"
              description="Mobile clinics and health education for remote areas."
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="container px-4 md:px-6 mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Make a Difference Today</h2>
          <p className="max-w-[600px] mx-auto text-lg/relaxed opacity-90">
            Your support allows us to continue providing vital healthcare to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-secondary hover:bg-white/90">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white">
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="mb-4 p-3 bg-primary/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
