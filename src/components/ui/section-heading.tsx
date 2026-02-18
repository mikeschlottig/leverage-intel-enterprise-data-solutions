import React from "react";
import { cn } from "@/lib/utils";
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}
export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };
  return (
    <div className={cn("flex flex-col space-y-4 mb-12 md:mb-16", alignmentClasses[align], className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}