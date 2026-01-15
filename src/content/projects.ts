export interface Project {
  title: string;
  company?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  url?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    title: "Billing & Credits Platform",
    company: "SOTA/Rival",
    description:
      "Complete billing platform supporting subscriptions, usage-based billing, credits, and automated invoicing.",
    highlights: [
      "Monthly/annual subscriptions with proration",
      "Usage-based billing with credits system",
      "Entitlements and feature gating",
      "Event-driven architecture for payment processing",
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Stripe", "TigerBeetle"],
    impact: "+30% active subscriptions after launching usage-based model",
  },
  {
    title: "Real-time Collaborative Editor",
    company: "SOTA/Rival",
    description:
      "Multi-user collaborative visual editor with real-time presence and conflict-free sync.",
    highlights: [
      "Real-time presence and cursor tracking",
      "Conflict-free sync using CRDTs (Yjs)",
      "Graph-based workflow visualization",
      "Low-latency UX optimizations",
    ],
    technologies: ["React", "React Flow", "Yjs", "Liveblocks", "TypeScript"],
  },
  {
    title: "AI Content Generation Platform",
    company: "SOTA/Omneky",
    description:
      "AI-powered platform where users describe content needs and the system generates creative variations.",
    highlights: [
      "Managing AI latency and errors gracefully",
      "Intuitive UIs for non-deterministic outputs",
      "Scaling to thousands of concurrent users",
      "Cost optimization for AI API calls",
    ],
    technologies: ["Node.js", "TypeScript", "React", "PostgreSQL", "OpenAI", "Stability APIs"],
    impact: "Shipped to GA, thousands of active users",
  },
  {
    title: "Crossposter",
    description:
      "Cross-platform social media posting app. Post once to Instagram, TikTok, LinkedIn, and YouTube simultaneously.",
    highlights: [
      "Real-time collaborative draft editing using Liveblocks + Yjs",
      "AI content generation with LangChain/LangGraph",
      "OAuth 2.0 integrations with 4 social platforms",
      "Serverless deployment on AWS using SST",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React Native",
      "PostgreSQL",
      "AWS",
      "SST",
      "Drizzle ORM",
      "Stripe",
      "LangChain",
    ],
    url: "https://crossposter.tech",
  },
  {
    title: "Practice Interview",
    description:
      "AI-powered mock interview platform connecting candidates with FAANG interviewers.",
    highlights: [
      "Interview booking system with Stripe payments",
      "Resume analysis using pgvector embeddings",
      "Multi-role authentication",
      "Full CMS for blog and interview guides",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "pgvector",
      "OpenAI",
      "Vercel AI SDK",
      "Stripe",
    ],
    url: "https://www.practice-interview.com",
  },
];
