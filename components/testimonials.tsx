import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Punch AI has completely transformed my training. The detailed analysis of my footwork and defensive patterns helped me identify blind spots I never knew existed. My performance has improved dramatically.",
      name: "Marcus Rodriguez",
      title: "Professional Boxer, WBC Ranked",
      avatar: "MR",
    },
    {
      quote:
        "As a coach, having access to detailed AI analysis has been a game-changer. I can now provide my fighters with precise, data-driven feedback that accelerates their development significantly.",
      name: "Sarah Chen",
      title: "Head Coach, Elite Boxing Academy",
      avatar: "SC",
    },
    {
      quote:
        "The accuracy scoring and fight IQ analysis from Punch AI helped me understand exactly where I was losing points. After implementing their recommendations, I won my next three amateur bouts.",
      name: "David Thompson",
      title: "Amateur Boxer, Golden Gloves Champion",
      avatar: "DT",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Champions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See how boxers at every level are using Punch AI to elevate their performance and achieve their goals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-4xl">"</div>
                <p className="italic text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
