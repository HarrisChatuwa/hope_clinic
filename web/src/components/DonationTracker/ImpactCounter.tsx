"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ImpactCounterProps {
    value: number
    prefix?: string
    suffix?: string
    duration?: number
    className?: string
}

export function ImpactCounter({
    value,
    prefix = "$",
    suffix = "",
    duration = 2,
    className = ""
}: ImpactCounterProps) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (hasAnimated) return

        let start = 0
        const increment = value / (duration * 60) // 60 fps

        const timer = setInterval(() => {
            start += increment
            if (start >= value) {
                setCount(value)
                setHasAnimated(true)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 1000 / 60)

        return () => clearInterval(timer)
    }, [value, duration, hasAnimated])

    return (
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-bold ${className}`}
        >
            {prefix}{count.toLocaleString()}{suffix}
        </motion.span>
    )
}
