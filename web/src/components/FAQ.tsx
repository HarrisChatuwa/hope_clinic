"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
    question: string
    answer: string
}

interface FAQProps {
    items: FAQItem[]
    title?: string
}

export function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">{title}</h2>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-background border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                            <span className="font-semibold text-lg pr-4">{item.question}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-4 text-muted-foreground">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}
