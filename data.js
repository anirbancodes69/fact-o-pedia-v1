const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "Quantum computing poses a threat to current encryption methods, necessitating urgent updates to cryptographic practices.",
    source:
      "https://www2.deloitte.com/us/en/insights/focus/tech-trends.html?utm_source=chatgpt.com",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Potential signs of life detected on exoplanet K2-18b, 124 light-years away, via compounds DMS and DMDS found by JWST.",
    source:
      "https://www.thetimes.co.uk/article/were-in-a-golden-age-of-space-discovery-are-we-about-to-find-et-7bptzmltv?utm_source=chatgpt.com",
    category: "science",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "U.S. national debt reaches $158.6 trillion, equating to $974,000 per taxpayer, largely due to unaccounted obligations.",
    source:
      "https://www.truthinaccounting.org/news/detail/financial-state-of-the-union-2025?utm_source=chatgpt.com",
    category: "finance",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// 👍 🤯 ⛔️
