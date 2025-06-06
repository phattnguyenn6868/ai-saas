import FeatureCard from "@/components/feature-card"
import {
  BotIcon,
  SparklesIcon,
  DatabaseIcon,
  ShieldIcon,
  FileTextIcon,
  ServerIcon,
  LockIcon,
  ZapIcon,
} from "@/components/feature-icons"

export default function FeaturesSection() {
  const features = [
    {
      icon: <BotIcon />,
      title: "Power Score Analysis",
      description:
        "AI measures punch velocity, impact force, and technique efficiency to give you detailed power ratings for every strike.",
      accentColor: "rgba(36, 101, 237, 0.5)",
    },
    {
      icon: <SparklesIcon />,
      title: "Defense Score Tracking",
      description:
        "Analyze your defensive movements, head movement, blocking, and evasion techniques with precision scoring.",
      accentColor: "rgba(236, 72, 153, 0.5)",
    },
    {
      icon: <DatabaseIcon />,
      title: "Accuracy Assessment",
      description:
        "Track your punch accuracy, target selection, and landing percentage with detailed statistical breakdowns.",
      accentColor: "rgba(34, 211, 238, 0.5)",
    },
    {
      icon: <ShieldIcon />,
      title: "Ring Generalship",
      description: "Evaluate your control of distance, ring positioning, and tactical dominance throughout the fight.",
      accentColor: "rgba(132, 204, 22, 0.5)",
    },
    {
      icon: <FileTextIcon />,
      title: "Fight IQ Analysis",
      description: "Assess your tactical decision-making, timing, and strategic adaptations during combat situations.",
      accentColor: "rgba(249, 115, 22, 0.5)",
    },
    {
      icon: <ServerIcon />,
      title: "Footwork Evaluation",
      description: "Detailed analysis of your movement patterns, balance, and positioning for optimal performance.",
      accentColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      icon: <LockIcon />,
      title: "Winner Determination",
      description:
        "AI determines fight winners based on comprehensive scoring and provides detailed explanations for the decision.",
      accentColor: "rgba(251, 191, 36, 0.5)",
    },
    {
      icon: <ZapIcon />,
      title: "Performance Insights",
      description:
        "Get actionable recommendations and training suggestions to improve specific aspects of your boxing.",
      accentColor: "rgba(16, 185, 129, 0.5)",
    },
  ]

  return (
    <section className="py-20 bg-muted/50 dark:bg-muted/10" id="features" aria-labelledby="features-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              Boxing Analytics
            </div>
            <h2 id="features-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Boxing Analysis
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Advanced AI technology that analyzes every aspect of your boxing performance with professional-grade
              precision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
