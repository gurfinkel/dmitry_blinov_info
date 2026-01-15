export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  accomplishments: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "SOTA / Rival Technologies",
    role: "Lead Software Engineer",
    period: "Dec 2024 – Present",
    description:
      "Company pivoted from AR/VR (Rival) to AI content generation (SOTA). Led the technical transition.",
    accomplishments: [
      "Built multi-user collaborative editor using React Flow + Yjs (CRDT) + Liveblocks for low-latency, conflict-safe sync",
      "Designed and implemented billing platform (Stripe + TigerBeetle) with usage-based pricing, credits, and automated invoicing",
      "Increased paid subscriptions by 30% through unified payment flows and improved checkout UX",
      "Led recommendation system design using ML (decision trees, Spark, MLLeap) for personalized user experiences",
      "Mentored 2 engineers and 1 designer, growing them from mid to senior level",
      "Established RFC culture and design doc practices for technical decision-making",
      "Led AI pivot: integrated LangChain + OpenAI for content generation workflows",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "Stripe",
      "Liveblocks",
      "Yjs",
      "LangChain",
      "PostHog",
    ],
  },
  {
    company: "Omneky",
    role: "Lead Software Engineer",
    period: "2023 – 2025",
    description:
      "AI-powered ad content generation platform. Joined as first senior engineer, built core platform.",
    accomplishments: [
      "Led AI ads platform from MVP to GA, implementing data-driven onboarding improvements",
      "Built full-stack features: React frontend + Node.js/MongoDB backend with PostHog experimentation",
      "Architected serverless backend using AWS Amplify, Step Functions, Lambda, DynamoDB, and GraphQL",
      "Implemented event-driven workflows with AWS SQS for reliable async processing",
      "Integrated AWS Cognito for authentication and authorization",
      "Set up PostHog analytics with revenue guardrails for safe experimentation",
      "Designed data pipelines using AWS Glue, Spark, and Parquet for ML model training",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB",
      "AWS Amplify",
      "Lambda",
      "Step Functions",
      "DynamoDB",
      "Cognito",
      "SQS",
      "Glue",
      "Bedrock",
      "GraphQL",
      "PostHog",
    ],
  },
  {
    company: "Amazon",
    role: "Senior Software Engineer",
    period: "2021 – 2022",
    description: "Alexa Mobile team, working on voice navigation for the Amazon app.",
    accomplishments: [
      "Designed and delivered Alexa voice navigation feature for Amazon mobile app",
      "Led cross-team collaboration in high-scale environment with strict latency SLAs",
      "Worked with distributed systems serving millions of users globally",
      "Contributed to on-call rotation and incident response for critical voice infrastructure",
      "Implemented A/B testing framework for voice UX experiments",
    ],
    technologies: ["Java", "AWS", "Distributed Systems", "Android", "iOS"],
  },
  {
    company: "Booking.com",
    role: "Full-stack Software Engineer",
    period: "2018 – 2020",
    description:
      "Revenue-generating widgets team, building features for the world's largest travel platform.",
    accomplishments: [
      "Built revenue-generating widgets with rigorous A/B testing methodology",
      "Worked in globally distributed async team across multiple time zones",
      "Contributed to Perl 5 backend codebase (Booking's core infrastructure)",
      "Implemented Node.js microservices for new product features",
      "Delivered user-facing features with measurable conversion impact",
    ],
    technologies: ["Perl 5", "Node.js", "JavaScript", "A/B Testing"],
  },
  {
    company: "Veeam Software",
    role: "Software Engineer",
    period: "2016 – 2018",
    description: "Enterprise backup and disaster recovery solutions.",
    accomplishments: [
      "Migrated legacy UI to React + Redux, improving performance from ~5s to ~2s load time",
      "Built Node.js backend services for new product features",
      "Implemented desktop tooling with Chromium-based rendering",
    ],
    technologies: ["React", "Redux", "Node.js", "TypeScript", "Electron"],
  },
  {
    company: "HSBC",
    role: "Software Engineer",
    period: "2015 – 2016",
    description: "Global banking, internal tools and customer-facing applications.",
    accomplishments: [
      "Built Angular 2 frontend applications for internal banking tools",
      "Developed Node.js REST APIs for data integration",
      "Worked in regulated financial services environment with security requirements",
    ],
    technologies: ["Angular 2", "Node.js", "TypeScript", "REST APIs"],
  },
  {
    company: "GC Innovation",
    role: "Technical Lead",
    period: "2006 – 2015",
    description: "In-house CRM and business software development. 9 years of ownership.",
    accomplishments: [
      "Built in-house CRM system from scratch, automating ~35% of company business processes",
      "Maintained end-to-end ownership of the platform over 9 years",
      "Led small development team delivering business-critical internal applications",
      "Designed database architecture and business logic for complex sales workflows",
    ],
    technologies: ["C#", ".NET", "SQL Server", "JavaScript", "REST APIs"],
  },
];
