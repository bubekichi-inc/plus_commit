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
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-90 shadow-lg shadow-blue-500/25":
                            variant === "default",
                        "border border-blue-500/30 bg-transparent text-blue-400 hover:bg-blue-500/10":
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
