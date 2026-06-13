import type { ProjectContent } from "../../types";

export default {
  title: "T.A.M.I. Project",
  theme: "dark",
  tags: ["node", "javascript", "postgresql", "html"],
  videoBorder: false,
  description:
    "Fortgeschrittene Trend-Analyse-Plattform, die Web-Scraping, Google Trends-Daten und Google Gemini LLM API für intelligente Insight-Extraktion und strukturierte Berichte integriert.<br/><br/>Kombiniert Echtzeit-Webdatenerfassung mit KI-gestützter Trendanalyse und generiert verwertbare Business Intelligence aus Marktsignalen und Verbraucherverhaltensmustern.",
  components: [
    {
      type: "text",
      props: {
        title: "Tech Stack",
        text: "Web-Scraping (BeautifulSoup, Selenium), Google Trends API, Google Gemini API, JSON strukturierte Ausgabe, Datenaggregation",
      },
    },
    {
      type: "text",
      props: {
        title: "Hauptfunktionen",
        text: "Echtzeit-Web-Scraping, Trend-Korrelationsanalyse, KI-gestützte Insights, strukturierte JSON-Berichte, Trend-Prognosen",
      },
    },
    {
      type: "text",
      props: {
        title: "Geschäftliche Auswirkung",
        text: "Identifiziert aufkommende Trends 2-4 Wochen voraus, generiert tägliche Trend-Berichte für 50+ Märkte, unterstützt strategische Planung",
      },
    },
  ],
} as const satisfies ProjectContent;
