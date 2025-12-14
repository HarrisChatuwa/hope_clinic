import Link from "next/link"
import { Button } from "@/components/Button"
import Image from "next/image"

interface HeroProps {
    title: string
    subtitle: string
    ctaText?: string
    ctaLink?: string
    imageSrc: string
    imageAlt: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
}

export function Hero({
    title,
    subtitle,
    ctaText,
    ctaLink,
    imageSrc,
    imageAlt,
    secondaryCtaText,
    secondaryCtaLink,
}: HeroProps) {
    return (
        <section className="relative bg-muted/30 py-12 md:py-24 lg:py-32 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                                {title}
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                {subtitle}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            {ctaText && ctaLink && (
                                <Button asChild size="lg" className="px-8">
                                    <Link href={ctaLink}>{ctaText}</Link>
                                </Button>
                            )}
                            {secondaryCtaText && secondaryCtaLink && (
                                <Button asChild variant="outline" size="lg" className="px-8">
                                    <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="mx-auto lg:order-last aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square relative group shadow-lg">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
