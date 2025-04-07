import React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
}

interface TimelineItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconColor?: string;
  className?: string;
}

export function TimelineItem({ 
  children, 
  icon, 
  iconColor = "primary", 
  className 
}: TimelineItemProps) {
  // Map color names to Tailwind classes
  const colorMap: Record<string, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
    destructive: "bg-destructive",
    muted: "bg-muted",
  };

  const bgColorClass = colorMap[iconColor] || "bg-primary";

  return (
    <div className={cn("flex relative mb-8 timeline-item", className)}>
      <div className="timeline-dot relative flex-none mr-6">
        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shadow-md", bgColorClass)}>
          {icon || <span className="w-3 h-3 bg-white rounded-full" />}
        </div>
        <div className="absolute w-0.5 h-full bg-gray-200 left-1/2 -translate-x-1/2 top-8 -z-10"></div>
      </div>
      {children}
    </div>
  );
}
