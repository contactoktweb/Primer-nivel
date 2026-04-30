import React from "react"
import { cn } from "@/lib/utils"

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  code?: string
  dotClassName?: string
}

export function StatusBadge({ children, className, code = "PN-LVL", ...props }: StatusBadgeProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center gap-4 py-2 select-none",
        className
      )}
      {...props}
    >
      {/* Structural Anchor */}
      <div className="relative flex h-5 w-5 items-center justify-center">
        {/* Outer Frame */}
        <div className="absolute h-full w-full border border-red-600/20 group-hover:border-red-600/50 transition-colors duration-500" />
        {/* Inner Glowing Pixel */}
        <div className="h-1 w-1 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] group-hover:shadow-[0_0_15px_rgba(220,38,38,1)] transition-all duration-500" />
        
        {/* Animated Corner Markers */}
        <div className="absolute -top-[2px] -left-[2px] h-1 w-1 border-t border-l border-red-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute -bottom-[2px] -right-[2px] h-1 w-1 border-b border-r border-red-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col items-start gap-1 border-l border-white/10 pl-4 transition-colors duration-500 group-hover:border-red-600/30">
        {/* Decorative Line */}
        <div className="flex items-center h-2 overflow-hidden">
          <div className="h-[1px] w-6 bg-red-600/40 group-hover:bg-red-600 group-hover:w-12 transition-all duration-700 ease-out" />
        </div>
        
        {/* Main Text */}
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 group-hover:text-white transition-all duration-500 group-hover:translate-x-1">
          {children}
        </span>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-40 bg-red-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </div>
  )
}
