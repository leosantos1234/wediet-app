import { motion } from "framer-motion";
import { ScanFace, Mic, BellRing, Utensils, Trophy } from "lucide-react";

const features = [
  {
    icon: ScanFace,
    title: "360° Body Analysis",
    description: "Patients upload photos and get AI-powered body composition insights — visual progress they can see and feel.",
  },
  {
    icon: Mic,
    title: "AI Consultation Notes",
    description: "Automatic transcription and smart summaries of every consultation. Focus on your patient, not your notepad.",
  },
  {
    icon: BellRing,
    title: "Automated Follow-ups",
    description: "Smart reminders, check-ins, and re-engagement sequences that keep patients on track without your effort.",
  },
  {
    icon: Utensils,
    title: "Meal Plan Generator",
    description: "Create personalized nutrition plans in seconds. Adjust macros, swap meals, and export beautiful PDFs.",
  },
  {
    icon: Trophy,
    title: "Patient Challenges",
    description: "Gamified challenges that keep patients engaged and motivated. Boost retention and results simultaneously.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-surface-elevated">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Everything you need to <span className="text-gradient">grow your practice</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powerful tools designed specifically for nutritionists who want to scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
