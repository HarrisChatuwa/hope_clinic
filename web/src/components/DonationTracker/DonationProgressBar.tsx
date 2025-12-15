"use client"

import { motion } from "framer-motion"

interface DonationProgressBarProps {
    current: number
    goal: number
    showPercentage?: boolean
    showAmount?: boolean
    animated?: boolean
    className?: string
}

export function DonationProgressBar({
    current,
    goal,
    showPercentage = true,
    showAmount = true,
    animated = true,
    className = ""
}: DonationProgressBarProps) {
    const percentage = Math.min((current / goal) * 100, 100)

    return (
        <div className={`space-y-2 ${className}`}>
            {/* Progress bar with gradient */}
            <div className="h-4 bg-muted rounded-full overflow-hidden relative">
                {animated ? (
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary via-primary to-secondary rounded-full"
                    />
                ) : (
                    <div
                        style={{ width: `${percentage}%` }}
                        className="h-full bg-gradient-to-r from-primary via-primary to-secondary rounded-full"
                    />
                )}
            </div>

            {/* Stats row */}
            <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-primary">
                    ${current.toLocaleString()}
                </span>
                {showPercentage && (
                    <span className="text-muted-foreground font-medium">
                        {Math.round(percentage)}%
                    </span>
                )}
                <span className="text-muted-foreground">
                    ${goal.toLocaleString()}
                </span>
            </div>
        </div>
    )
}
