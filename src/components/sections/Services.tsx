import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Terminal, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const services = [
  {
    title: "AI Ready Data Cleaning",
    description: "Sanitize, normalize, and structure legacy datasets into high-fidelity inputs ready for LLM training and RAG architectures.",
    icon: Sparkles,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Modern Data Architecture",
    description: "Migration from monolithic silos to distributed, open-source mesh architectures that scale infinitely without vendor lock-in.",
    icon: Layers,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Server-Side Integrated Intel",
    description: "Zero-latency data processing at the edge, delivering real-time insights and automated decisioning directly into your stack.",
    icon: Terminal,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];
export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Core Capabilities"
          subtitle="Precision engineering for the modern data enterprise."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-soft hover:shadow-glow transition-all duration-300 group overflow-hidden">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}