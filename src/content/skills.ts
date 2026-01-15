export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  years?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    skills: [
      { name: "TypeScript/JavaScript", years: "15+" },
      { name: "Node.js", years: "8+" },
      { name: "React", years: "7+" },
      { name: "Next.js" },
      { name: "NestJS" },
      { name: "Python", years: "3+" },
      { name: "Java", years: "5+" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", years: "10+" },
      { name: "MongoDB", years: "3+" },
      { name: "DynamoDB", years: "2+" },
      { name: "Redis", years: "3+" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", years: "6+" },
      { name: "Lambda" },
      { name: "S3" },
      { name: "SQS/SNS" },
      { name: "Step Functions" },
      { name: "Docker", years: "5+" },
      { name: "SST" },
    ],
  },
  {
    name: "AI/ML",
    skills: [
      { name: "LangChain/LangGraph" },
      { name: "OpenAI API" },
      { name: "AWS Bedrock" },
      { name: "AWS Glue + Spark" },
      { name: "pgvector" },
    ],
  },
  {
    name: "Real-time & Collaboration",
    skills: [
      { name: "CRDTs (Yjs)" },
      { name: "Liveblocks" },
      { name: "WebSocket/WebRTC" },
    ],
  },
  {
    name: "Payments & Analytics",
    skills: [
      { name: "Stripe" },
      { name: "TigerBeetle" },
      { name: "PostHog" },
    ],
  },
];

export const primarySkills = [
  "Node.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "AWS",
];
