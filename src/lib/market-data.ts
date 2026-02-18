export interface Agency {
  name: string;
  location: string;
  website: string;
  phone: string;
}
export interface CityStats {
  id: string;
  name: string;
  agencyCount: string;
  avgCost: string;
  primaryClientele: string;
  frameworks: { name: string; value: number }[];
  serviceFocus: { name: string; value: number }[];
}
export const cityData: Record<string, CityStats> = {
  "southern-oregon": {
    id: "southern-oregon",
    name: "Southern Oregon",
    agencyCount: "25+",
    avgCost: "$2,500 - $15,000",
    primaryClientele: "Small Business & Tourism",
    frameworks: [
      { name: "WordPress", value: 65 },
      { name: "React/Next.js", value: 15 },
      { name: "Shopify", value: 12 },
      { name: "Other", value: 8 },
    ],
    serviceFocus: [
      { name: "Web Design", value: 45 },
      { name: "SEO", value: 30 },
      { name: "E-commerce", value: 15 },
      { name: "Ads", value: 10 },
    ],
  },
  portland: {
    id: "portland",
    name: "Portland",
    agencyCount: "150+",
    avgCost: "$10,000 - $100,000+",
    primaryClientele: "Enterprise & Tech Startups",
    frameworks: [
      { name: "React/Next.js", value: 45 },
      { name: "WordPress", value: 30 },
      { name: "Vue/Nuxt", value: 15 },
      { name: "Other", value: 10 },
    ],
    serviceFocus: [
      { name: "Web App Dev", value: 40 },
      { name: "UX Design", value: 25 },
      { name: "SEO/SEM", value: 20 },
      { name: "Branding", value: 15 },
    ],
  },
  bend: {
    id: "bend",
    name: "Bend",
    agencyCount: "40+",
    avgCost: "$5,000 - $40,000",
    primaryClientele: "Lifestyle & Outdoor Brands",
    frameworks: [
      { name: "WordPress", value: 40 },
      { name: "Shopify", value: 35 },
      { name: "React", value: 15 },
      { name: "Other", value: 10 },
    ],
    serviceFocus: [
      { name: "E-commerce", value: 40 },
      { name: "Web Design", value: 30 },
      { name: "Social/SEO", value: 20 },
      { name: "Video", value: 10 },
    ],
  },
  eugene: {
    id: "eugene",
    name: "Eugene",
    agencyCount: "35+",
    avgCost: "$3,500 - $25,000",
    primaryClientele: "Education & Local Services",
    frameworks: [
      { name: "WordPress", value: 55 },
      { name: "Drupal", value: 15 },
      { name: "React", value: 15 },
      { name: "Other", value: 15 },
    ],
    serviceFocus: [
      { name: "Web Design", value: 35 },
      { name: "SEO", value: 25 },
      { name: "Maintenance", value: 25 },
      { name: "Ads", value: 15 },
    ],
  },
  salem: {
    id: "salem",
    name: "Salem",
    agencyCount: "20+",
    avgCost: "$3,000 - $20,000",
    primaryClientele: "Public Sector & B2B",
    frameworks: [
      { name: "WordPress", value: 60 },
      { name: "PHP/Laravel", value: 20 },
      { name: "React", value: 10 },
      { name: "Other", value: 10 },
    ],
    serviceFocus: [
      { name: "Web Design", value: 40 },
      { name: "IT Services", value: 30 },
      { name: "SEO", value: 20 },
      { name: "Copywriting", value: 10 },
    ],
  },
};
export const southernOregonAgencies: Agency[] = [
  { name: "Project A", location: "Ashland", website: "projecta.com", phone: "(541) 488-1702" },
  { name: "Klamath Falls Web Design", location: "Klamath Falls", website: "klamathfallswebdesign.com", phone: "(541) 884-2555" },
  { name: "Word of Mouse", location: "Medford", website: "wordofmouse.com", phone: "(541) 773-4552" },
  { name: "Coding Zeal", location: "Medford", website: "codingzeal.com", phone: "(541) 200-5011" },
  { name: "Creative Marketing & Design", location: "Grants Pass", website: "cmdgp.com", phone: "(541) 474-0950" },
  { name: "Southern Oregon SEO", location: "Medford", website: "so-seo.com", phone: "(541) 625-0555" },
  { name: "Digital Edge", location: "Ashland", website: "digitaledge.com", phone: "(541) 552-1100" },
  { name: "Rogue Valley Web Design", location: "Medford", website: "rvweb.com", phone: "(541) 951-5000" },
  { name: "Applegate Media", location: "Grants Pass", website: "applegate.media", phone: "(541) 226-9500" },
  { name: "Ashland Design Studio", location: "Ashland", website: "ashland.design", phone: "(541) 482-1000" },
  { name: "Bear Creek Digital", location: "Medford", website: "bearcreek.digital", phone: "(541) 326-4400" },
  { name: "Table Rock Marketing", location: "Medford", website: "tablerock.com", phone: "(541) 779-1122" },
  { name: "Skyline SEO", location: "Klamath Falls", website: "skylineseo.com", phone: "(541) 850-2000" },
  { name: "Caveman Web Solutions", location: "Grants Pass", website: "cavemanweb.com", phone: "(541) 479-5555" },
  { name: "SOU Digital Arts", location: "Ashland", website: "sou.edu", phone: "(541) 552-6101" },
];