import type { ProjectContent } from "../../types";

export default {
  title: "HubSpot ➔ Teamtailor Sync",
  theme: "dark",
  tags: ["node", "postgresql", "javascript", "html"],
  videoBorder: false,
  description:
    "Event-gesteuerte Datenpipeline, die HubSpot CRM-Datensätze mit Teamtailor-Recruiting-Plattform mit Python, REST APIs und Webhook-Integrationen synchronisiert.<br/><br/>Verarbeitet massive Datenmengen mit asynchroner Verarbeitung, Webhooks in Echtzeit und automatischer Fehlerbehandlung für nahtlose Kandidaten- und Unternehmens-Datensynchronisierung.",
  components: [
    {
      type: "text",
      props: {
        title: "Tech Stack",
        text: "Python (Asyncio, Requests), HubSpot API, Teamtailor API, Event Webhooks, JSON Processing",
      },
    },
    {
      type: "text",
      props: {
        title: "Hauptfunktionen",
        text: "Echtzeit-Datensync, massive Verarbeitung, asynchrone Event-Verarbeitung, automatische Wiederholungen, Webhook-Verifizierung",
      },
    },
    {
      type: "text",
      props: {
        title: "Geschäftliche Auswirkung",
        text: "Manuelle Dateneingabe beseitigt, Sync-Zeit von Stunden auf Echtzeit reduziert, unterstützt 10K+ Datensätze",
      },
    },
  ],
} as const satisfies ProjectContent;
