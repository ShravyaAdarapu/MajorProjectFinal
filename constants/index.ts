import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

const roleBasedInterviewCatalog: Array<{
  role: string;
  type: "Technical" | "Behavioral" | "Mixed";
  techstack: string[];
}> = [
  { role: "Software Developer", type: "Mixed", techstack: ["JavaScript", "Git", "SQL"] },
  { role: "Software Engineer", type: "Technical", techstack: ["Data Structures", "Algorithms", "System Design"] },
  { role: "Full Stack Developer", type: "Technical", techstack: ["React", "Node.js", "PostgreSQL"] },
  { role: "Frontend Developer", type: "Technical", techstack: ["React", "TypeScript", "CSS"] },
  { role: "Backend Developer", type: "Technical", techstack: ["Node.js", "APIs", "MongoDB"] },
  { role: "Web Developer", type: "Mixed", techstack: ["HTML", "CSS", "JavaScript"] },
  { role: "Mobile App Developer", type: "Mixed", techstack: ["Flutter", "API Integration", "Firebase"] },
  { role: "Android Developer", type: "Technical", techstack: ["Kotlin", "Android SDK", "Room"] },
  { role: "iOS Developer", type: "Technical", techstack: ["Swift", "SwiftUI", "Xcode"] },
  { role: "Game Developer", type: "Mixed", techstack: ["Unity", "C#", "Game Physics"] },
  { role: "Data Scientist", type: "Technical", techstack: ["Python", "Pandas", "Machine Learning"] },
  { role: "Data Analyst", type: "Behavioral", techstack: ["SQL", "Excel", "Power BI"] },
  { role: "Data Engineer", type: "Technical", techstack: ["Python", "Spark", "Airflow"] },
  { role: "Machine Learning Engineer", type: "Technical", techstack: ["PyTorch", "MLOps", "Feature Engineering"] },
  { role: "AI Engineer", type: "Mixed", techstack: ["LLMs", "Prompt Engineering", "Vector DB"] },
  { role: "Business Intelligence Analyst", type: "Behavioral", techstack: ["Tableau", "SQL", "Data Modeling"] },
  { role: "Data Architect", type: "Mixed", techstack: ["Data Warehousing", "ETL", "Governance"] },
  { role: "NLP Engineer", type: "Technical", techstack: ["Transformers", "spaCy", "Python"] },
  { role: "Computer Vision Engineer", type: "Technical", techstack: ["OpenCV", "PyTorch", "Image Processing"] },
  { role: "Statistician", type: "Behavioral", techstack: ["R", "Hypothesis Testing", "Regression"] },
  { role: "DevOps Engineer", type: "Technical", techstack: ["Docker", "Kubernetes", "CI/CD"] },
  { role: "Cloud Engineer", type: "Technical", techstack: ["AWS", "Terraform", "Monitoring"] },
  { role: "Cloud Architect", type: "Mixed", techstack: ["AWS", "Azure", "Architecture Patterns"] },
  { role: "Site Reliability Engineer (SRE)", type: "Technical", techstack: ["Observability", "Incident Response", "Kubernetes"] },
  { role: "Platform Engineer", type: "Mixed", techstack: ["Developer Platform", "CI/CD", "IaC"] },
  { role: "Kubernetes Engineer", type: "Technical", techstack: ["Kubernetes", "Helm", "Service Mesh"] },
  { role: "Cybersecurity Analyst", type: "Behavioral", techstack: ["SIEM", "Threat Detection", "Incident Handling"] },
  { role: "Ethical Hacker", type: "Technical", techstack: ["OWASP", "Burp Suite", "Recon"] },
  { role: "Security Engineer", type: "Technical", techstack: ["IAM", "AppSec", "Network Security"] },
  { role: "Information Security Analyst", type: "Behavioral", techstack: ["Risk Assessment", "Compliance", "Security Policies"] },
  { role: "Penetration Tester", type: "Technical", techstack: ["Kali Linux", "Nmap", "Metasploit"] },
  { role: "QA Engineer", type: "Mixed", techstack: ["Test Planning", "Selenium", "Jira"] },
  { role: "Test Engineer", type: "Technical", techstack: ["Test Cases", "API Testing", "Postman"] },
  { role: "Automation Tester", type: "Technical", techstack: ["Cypress", "Playwright", "CI"] },
  { role: "Manual Tester", type: "Behavioral", techstack: ["Exploratory Testing", "Bug Tracking", "Test Reports"] },
  { role: "Product Manager", type: "Behavioral", techstack: ["Roadmapping", "Prioritization", "Stakeholder Management"] },
  { role: "Project Manager", type: "Behavioral", techstack: ["Agile", "Risk Management", "Planning"] },
  { role: "Business Analyst", type: "Behavioral", techstack: ["Requirements Gathering", "Process Mapping", "SQL"] },
  { role: "IT Consultant", type: "Mixed", techstack: ["Solution Design", "Client Communication", "Cloud"] },
  { role: "Scrum Master", type: "Behavioral", techstack: ["Scrum", "Facilitation", "Team Coaching"] },
  { role: "UI/UX Designer", type: "Behavioral", techstack: ["Figma", "Wireframing", "User Research"] },
  { role: "System Administrator", type: "Technical", techstack: ["Linux", "Windows Server", "Shell"] },
  { role: "Network Engineer", type: "Technical", techstack: ["TCP/IP", "Routing", "Firewalls"] },
  { role: "Database Administrator (DBA)", type: "Technical", techstack: ["MySQL", "PostgreSQL", "Backup & Recovery"] },
  { role: "Blockchain Developer", type: "Technical", techstack: ["Solidity", "Web3", "Smart Contracts"] },
  { role: "AR/VR Developer", type: "Mixed", techstack: ["Unity", "3D Math", "XR SDK"] },
  { role: "Embedded Systems Engineer", type: "Technical", techstack: ["C", "Microcontrollers", "RTOS"] },
  { role: "Robotics Engineer", type: "Mixed", techstack: ["ROS", "Computer Vision", "Control Systems"] },
  { role: "Technical Support Engineer", type: "Behavioral", techstack: ["Troubleshooting", "Networking", "Ticketing"] },
  { role: "Solutions Architect", type: "Mixed", techstack: ["System Design", "Cloud", "Architecture Patterns"] },
];

export const roleBasedInterviews: Interview[] = roleBasedInterviewCatalog.map(
  (item, index) => ({
    id: `seed-${index + 1}`,
    userId: "seed-user",
    role: item.role,
    type: item.type,
    techstack: item.techstack,
    level: "Mid",
    questions: ["Tell me about your experience relevant to this role."],
    finalized: true,
    createdAt: new Date(Date.now() - index * 86400000).toISOString(),
  })
);
