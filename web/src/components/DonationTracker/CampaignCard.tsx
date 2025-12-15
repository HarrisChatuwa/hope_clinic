"use client"

import { Campaign } from "@/data/campaigns"
import { DonationProgressBar } from "./DonationProgressBar"
import { Button } from "@/components/Button"
import Link from "next/link"
import { Users, Clock, Lightbulb } from "lucide-react"

interface CampaignCardProps {
    campaign: Campaign
}

export function CampaignCard({ campaign }: CampaignCardProps) {
    const daysLeft = Math.ceil(
        (campaign.endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    )

    const categoryIcons = {
        medical: "💊",
        infrastructure: "⚡",
        program: "💉",
        emergency: "🚨"
    }

    return (
        <div className="bg-background p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all group">
            {/* Category Badge */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{categoryIcons[campaign.category]}</span>
                <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full capitalize">
                    {campaign.category}
                </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {campaign.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {campaign.description}
            </p>

            {/* Progress Bar */}
            <DonationProgressBar
                current={campaign.raised}
                goal={campaign.goal}
                className="mb-4"
            />

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {campaign.donors} donors
                </span>
                <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {daysLeft > 0 ? `${daysLeft} days left` : 'Ended'}
                </span>
            </div>

            {/* Impact Story */}
            {campaign.impactStory && (
                <div className="mb-4 p-3 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                    <div className="flex gap-2">
                        <Lightbulb className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground italic">
                            {campaign.impactStory}
                        </p>
                    </div>
                </div>
            )}

            {/* CTA Button */}
            <Button className="w-full" asChild>
                <Link href="#donate">Contribute Now</Link>
            </Button>
        </div>
    )
}
