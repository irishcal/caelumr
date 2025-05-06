
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The impact Caelum had on our commercial team was immeasurable. Thoughtful, probing and passionate about everything he and we engaged in. His willingness to support all facets of our team was selfless beyond belief and I felt incredibly lucky to call him 'ours'!\n\nFrom day one he helped shape all aspects of our sales process; bringing us closer to product, pushing the boundaries of opportunity, wearing multiple hats at different resource constrained times and always with a smile on his face. An integral part of the team, shaping our outbound approach and proving what is achievable.",
    name: "Adam Cavanagh",
    title: "SVP, Sales at Volt\nFormer Head of Sales, Europe at Plaid"
  },
  {
    id: 2,
    quote: "Caelum navigated a complete lack of process and strategy upon arriving and was core to creating and shaping that process himself. He worked hard on revamping our target account list to ensure we focus on only priority leads, and has had many outbound wins through proactivity, tenacity and strong communication skills (he landed conversations with dream enterprise accounts such as F1, Getir, Bolt, to name just a few). He is very strong both across in-person and inside Sales meetings, during industry events to build brand awareness (e.g. Web Summit, Slush), and demonstrates a strong ability to drive key relationships across many different functions with external stakeholders (Ops, PM, C-suite).\n\nCaelum is a joy to be around, and is directly responsible for bringing an optimistic, positive and can-do attitude to any difficulties faced by the team. He is not afraid to share differing opinions and make his voice heard. He has strongly contributed to our morale with his infectious enthusiasm for our clients, for the possibilities of Open Banking, and for fintech generally, showing strong market awareness.",
    name: "Jayna Devani",
    title: "Member of GTM Staff, OpenAI\nFormer Europe Sales at Plaid"
  },
  {
    id: 3,
    quote: "Caelum was instrumental in my promotion to Junior AE as he coached me on the product, pricing and benefits GoCardless can offer. During the sales cycle of his own deals, he kept me in the loop and showed me how to showcase value.\n\nThroughout his time at GoCardless while I was an SDR we closed several deals together, and his mentorship and coaching was critical to me hitting my targets and eventually transitioning to AE.",
    name: "Amadeus Lombardi",
    title: "Account Executive at GoCardless\nFormer SDR at GoCardless"
  },
  {
    id: 4,
    quote: "Caelum is an invaluable asset to any sales team. During my time at Plaid, where Caelum and I collaborated for over a year, his mentorship was pivotal to my growth. His deep understanding of the fast-paced tech industry was evident in his ability to adopt and share innovative prospecting techniques, swiftly navigating conversations with prospects and creating instant impact.\n\nHe consistently went above and beyond to ensure that success was shared across the team, often taking the time to provide detailed feedback on my pitches and proposals, showing me how to navigate complex client conversations within ever-changing market dynamics and new Open Banking regulations. Caelum fostered a highly collaborative environment where team members openly shared best practices and supported each other.\n\nHis hands-on approach and genuine commitment to my development made a massive difference in my performance. Caelum epitomises the qualities of a true leader and mentor, and any team would benefit greatly from his expertise and dedication.",
    name: "Daria Trinh",
    title: "Sales Specialist at S&P Global\nFormer SDR at Plaid"
  },
  {
    id: 5,
    quote: "I had the pleasure of working with Caelum when I first started at GC. He was extremely helpful during my onboarding and ramp period, organising catch ups and running through best practices for SDR - AE collaboration. He showed me exactly what was required to excel within the role and has the leadership qualities to make an excellent manager.",
    name: "Sam Eley",
    title: "BDR at GoCardless"
  },
  {
    id: 6,
    quote: "Caelum's knowledge of the market and ability to connect with potential customers were spot-on. He helped us tailor our message and streamline our sales process, which led to real results. If you're looking for someone who can help you take your GTM strategy to the next level, I highly recommend him.",
    name: "Antonia Hellman",
    title: "CEO at Toucan"
  },
  {
    id: 7,
    quote: "Having come from a SaaS business that was a highly specialised solution selling into a specific market, Caelum was extremely helpful when I joined Plaid. He worked with me to scale outreach strategies in multiple markets and implement process in order to maintain consistent volumes of touch points and generate high quality leads.",
    name: "Max Smith",
    title: "Account Excecutive at KYP\nFormer BDR at Plaid"
  },
];

const Testimonials: React.FC = () => {
  return (
    <Layout currentPage="testimonials">
      <section className="py-8">
        <h1 className="text-3xl md:text-4xl font-medium mb-8">Testimonials</h1>
        <p className="text-lg text-muted-foreground mb-12">
          What colleagues and clients have to say about working with me.
        </p>
        
        <div className="grid gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-secondary/30">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground mb-2"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <div className="space-y-4">
                  {testimonial.quote.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
