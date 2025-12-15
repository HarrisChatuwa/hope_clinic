export interface Campaign {
  id: string
  title: string
  description: string
  goal: number              // Target amount in USD
  raised: number           // Current amount raised
  currency: string         // "USD", "MWK", etc.
  startDate: Date
  endDate: Date
  donors: number           // Number of contributors
  category: "medical" | "infrastructure" | "program" | "emergency"
  impactStory?: string     // What this campaign achieves
  image?: string           // Campaign image
}

export const activeCampaigns: Campaign[] = [
  {
    id: "solar-2024",
    title: "Solar Power Expansion",
    description: "Install additional solar panels to ensure 24/7 reliable electricity for medical equipment and vaccine refrigeration",
    goal: 15000,
    raised: 8750,
    currency: "USD",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    donors: 87,
    category: "infrastructure",
    impactStory: "Reliable power means we can operate medical equipment around the clock and refrigerate vaccines safely, serving more patients without interruption."
  },
  {
    id: "medicine-q1-2024",
    title: "Essential Medicine Stock",
    description: "Secure a 3-month supply of critical medications including antibiotics, antimalarials, and chronic disease treatments",
    goal: 10000,
    raised: 7800,
    currency: "USD",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-31"),
    donors: 124,
    category: "medical",
    impactStory: "This ensures we never have to turn away a patient due to lack of medication. Every dollar provides life-saving treatment."
  },
  {
    id: "vaccine-program-2024",
    title: "Childhood Vaccination Program",
    description: "Expand our vaccination program to reach 2,000 children with essential immunizations",
    goal: 8000,
    raised: 7100,
    currency: "USD",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-30"),
    donors: 156,
    category: "program",
    impactStory: "Vaccines prevent deadly diseases. Your contribution protects children and builds healthier communities for generations."
  }
]
