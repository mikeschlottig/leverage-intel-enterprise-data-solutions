import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { useLeadCapture } from "@/hooks/use-lead-capture";
export function LeadCaptureSheet() {
  const isOpen = useLeadCapture((s) => s.isOpen);
  const onClose = useLeadCapture((s) => s.onClose);
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-[450px] overflow-y-auto bg-background/95 backdrop-blur-xl border-l border-border/50"
      >
        <SheetHeader className="mb-8 text-left">
          <SheetTitle className="text-3xl font-bold tracking-tight">
            Start Your <span className="text-blue-600">Transformation</span>
          </SheetTitle>
          <SheetDescription className="text-lg">
            Tell us about your data infrastructure needs. Our engineers will review your profile and respond within 24 hours.
          </SheetDescription>
        </SheetHeader>
        <LeadCaptureForm />
      </SheetContent>
    </Sheet>
  );
}