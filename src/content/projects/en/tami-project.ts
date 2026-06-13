import type { ProjectContent } from "../../types";

export default {
  title: "T.A.M.I. Project",
  theme: "dark",
  tags: ["node", "javascript", "postgresql", "html"],
  videoBorder: false,
  description:
    "Advanced trend analysis platform integrating web scraping, Google Trends data, and Google Gemini LLM API for intelligent insight extraction and structured reporting.<br/><br/>Combines real-time web data collection with AI-powered trend analysis, generating actionable business intelligence from market signals and consumer behavior patterns.",
  components: [
    {
      type: "text",
      props: {
        title: "Tech Stack",
        text: "Web Scraping (BeautifulSoup, Selenium), Google Trends API, Google Gemini API, JSON Structured Output, Data Aggregation",
      },
    },
    {
      type: "text",
      props: {
        title: "Key Features",
        text: "Real-time web scraping, trend correlation analysis, AI-powered insights, structured JSON reports, trend forecasting",
      },
    },
    {
      type: "text",
      props: {
        title: "Business Impact",
        text: "Identifies emerging trends 2-4 weeks ahead, generates daily trend reports for 50+ markets, powers strategic planning",
      },
    },
  ],
} as const satisfies ProjectContent;
