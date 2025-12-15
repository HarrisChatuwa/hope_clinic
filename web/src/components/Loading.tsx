"use client"

import { Loader2 } from "lucide-react"

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg"
    className?: string
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8"
    }

    return (
        <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
    )
}

export function LoadingButton({
    children,
    isLoading,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { isLoading?: boolean }) {
    return (
        <button {...props} disabled={isLoading || props.disabled}>
            {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                    <LoadingSpinner size="sm" />
                    Loading...
                </span>
            ) : (
                children
            )}
        </button>
    )
}
