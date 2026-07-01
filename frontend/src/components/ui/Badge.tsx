import * as React from "react"
import { cn } from "../../utils/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'danger' | 'warning' | 'success';
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
        {
          "border-transparent bg-primary text-white hover:bg-primary/80": variant === "default",
          "border-transparent bg-secondary text-gray-100": variant === "secondary",
          "border-transparent bg-danger/20 text-red-400 border border-danger/20": variant === "danger",
          "border-transparent bg-warning/20 text-orange-400 border border-warning/20": variant === "warning",
          "border-transparent bg-success/20 text-emerald-400 border border-success/20": variant === "success",
          "border-white/10 text-gray-200": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
