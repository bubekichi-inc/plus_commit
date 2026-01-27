import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost"
    size?: "default" | "sm" | "lg"
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25":
                            variant === "default",
                        "border border-primary-500/30 bg-transparent text-primary-500 hover:bg-primary-500/10":
                            variant === "outline",
                        "hover:bg-zinc-800 text-zinc-300 hover:text-white":
                            variant === "ghost",
                        "h-10 px-4 py-2": size === "default",
                        "h-9 px-3 text-sm": size === "sm",
                        "h-12 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
