export interface Startup {
  id: string;
  rank: number;
  company: string;
  category: "AI" | "FinTech" | "DevTools" | "Cloud" | "Security" | "Data";
  founded: number;
  score: number;
  llmSentiment: number;
  docsQuality: number;
  description: string;
  headquarter: string;
}
const companies: Startup[] = [
  { id: "1", rank: 1, company: "Neon", category: "Data", founded: 2021, score: 98, llmSentiment: 96, docsQuality: 98, description: "Serverless Postgres with instant branching and bottomless storage.", headquarter: "San Francisco" },
  { id: "2", rank: 2, company: "Resend", category: "DevTools", founded: 2022, score: 97, llmSentiment: 95, docsQuality: 99, description: "The email infrastructure for developers.", headquarter: "New York" },
  { id: "3", rank: 3, company: "Pinecone", category: "AI", founded: 2019, score: 96, llmSentiment: 98, docsQuality: 94, description: "Vector database for high-performance AI applications.", headquarter: "New York" },
  { id: "4", rank: 4, company: "Stripe", category: "FinTech", founded: 2010, score: 95, llmSentiment: 94, docsQuality: 99, description: "Financial infrastructure for the internet.", headquarter: "Dublin/SF" },
  { id: "5", rank: 5, company: "Vercel", category: "Cloud", founded: 2015, score: 94, llmSentiment: 92, docsQuality: 96, description: "The platform for frontend developers.", headquarter: "San Francisco" },
  { id: "6", rank: 6, company: "Auth0", category: "Security", founded: 2013, score: 93, llmSentiment: 89, docsQuality: 95, description: "Identity platform for development teams.", headquarter: "Bellevue" },
  { id: "7", rank: 7, company: "Supabase", category: "Data", founded: 2020, score: 92, llmSentiment: 96, docsQuality: 93, description: "The open source Firebase alternative.", headquarter: "Remote" },
  { id: "8", rank: 8, company: "PlanetScale", category: "Data", founded: 2018, score: 91, llmSentiment: 90, docsQuality: 92, description: "The world's most advanced database platform.", headquarter: "San Francisco" },
  { id: "9", rank: 9, company: "Clerk", category: "Security", founded: 2021, score: 90, llmSentiment: 94, docsQuality: 95, description: "The most comprehensive user management platform.", headquarter: "San Francisco" },
  { id: "10", rank: 10, company: "LangChain", category: "AI", founded: 2022, score: 89, llmSentiment: 98, docsQuality: 82, description: "Framework for developing applications powered by LLMs.", headquarter: "San Francisco" },
  { id: "11", rank: 11, company: "Postman", category: "DevTools", founded: 2014, score: 88, llmSentiment: 85, docsQuality: 90, description: "API platform for building and using APIs.", headquarter: "San Francisco" },
  { id: "12", rank: 12, company: "Upstash", category: "Data", founded: 2020, score: 87, llmSentiment: 93, docsQuality: 88, description: "Serverless data for developers.", headquarter: "California" },
  { id: "13", rank: 13, company: "CrowdDev", category: "DevTools", founded: 2021, score: 86, llmSentiment: 88, docsQuality: 85, description: "Community-led growth platform for developer tools.", headquarter: "Remote" },
  { id: "14", rank: 14, company: "Railway", category: "Cloud", founded: 2020, score: 85, llmSentiment: 91, docsQuality: 84, description: "Infrastructure to make software deployment easy.", headquarter: "San Francisco" },
  { id: "15", rank: 15, company: "Tailscale", category: "Security", founded: 2019, score: 84, llmSentiment: 95, docsQuality: 91, description: "Zero config VPN for teams of all sizes.", headquarter: "Toronto" },
  { id: "16", rank: 16, company: "Checkly", category: "DevTools", founded: 2018, score: 83, llmSentiment: 87, docsQuality: 89, description: "Monitoring for modern stacks.", headquarter: "Berlin" },
  { id: "17", rank: 17, company: "Snyk", category: "Security", founded: 2015, score: 82, llmSentiment: 84, docsQuality: 87, description: "Developer security platform.", headquarter: "Reading" },
  { id: "18", rank: 18, company: "Fly.io", category: "Cloud", founded: 2017, score: 81, llmSentiment: 89, docsQuality: 86, description: "Deploy app servers close to users.", headquarter: "Chicago" },
  { id: "19", rank: 19, company: "Render", category: "Cloud", founded: 2018, score: 80, llmSentiment: 86, docsQuality: 85, description: "Cloud platform to host any app.", headquarter: "San Francisco" },
  { id: "20", rank: 20, company: "Tally", category: "FinTech", founded: 2020, score: 79, llmSentiment: 82, docsQuality: 83, description: "Simplest way to create forms.", headquarter: "Ghent" },
];
const names = ["Axiom", "Bento", "Cipher", "Delta", "Echo", "Flux", "Grit", "Helix", "Ion", "Jolt", "Koda", "Lume", "Moxie", "Nova", "Onyx", "Pulse", "Quark", "Rift", "Sync", "Tess", "Ursa", "Vex", "Wisp", "Xenon", "Yield", "Zest", "Aura", "Bolt", "Core", "Dune"];
const categories: ("AI" | "FinTech" | "DevTools" | "Cloud" | "Security" | "Data")[] = ["AI", "FinTech", "DevTools", "Cloud", "Security", "Data"];
// Deterministic padding to reach 50 entries
const paddedData: Startup[] = Array.from({ length: 30 }, (_, i) => {
  const index = i + 21;
  const category = categories[i % categories.length];
  // Deterministic values between 65 and 95
  const sentiment = 65 + ((i * 13) % 31);
  const docs = 70 + ((i * 17) % 26);
  const score = Math.floor((sentiment + docs) / 2);
  return {
    id: index.toString(),
    rank: index,
    company: `${names[i]} Systems`,
    category,
    founded: 2018 + (i % 6),
    score,
    llmSentiment: sentiment,
    docsQuality: docs,
    description: `Enterprise-grade ${category} platform focusing on autonomous agentic workflows and machine-to-machine interfaces.`,
    headquarter: i % 2 === 0 ? "Austin" : "Berlin"
  };
});
export const startupData: Startup[] = [...companies, ...paddedData];
export const categoryCounts = startupData.reduce((acc: { name: string; value: number }[], item) => {
  const existing = acc.find((a) => a.name === item.category);
  if (existing) {
    existing.value += 1;
  } else {
    acc.push({ name: item.category, value: 1 });
  }
  return acc;
}, []);